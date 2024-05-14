import path from 'path';
import fs from 'fs-extra';
import {visit} from 'unist-util-visit';
import logger from '@docusaurus/logger';

export const variableInjectorPlugin = () => {
  const fileLocations = ['docs', 'versioned_docs'];

  const transformer = async (ast, vfile) => {
    const dirNames = vfile.path.split(path.sep);

    let siteDir = '';
    let fileLocation = '';
    let relativeFilePath = '';
    let versionName = '';

    function getVersionFilePath(version) {
      if (version === 'current')
        return path.join(siteDir, 'website', 'constants.json');
      return path.join(
        siteDir,
        'versioned_constants',
        `version-${version}-constants.json`,
      );
    }

    fileLocations.forEach((folder) => {
      let ind = dirNames.indexOf(folder);
      if (ind !== -1) {
        siteDir = path.normalize(dirNames.slice(0, ind).join(path.sep));
        fileLocation = folder;
        relativeFilePath = dirNames.slice(ind + 1).join(path.sep);
        versionName =
          fileLocation === 'docs'
            ? 'current'
            : relativeFilePath.split(path.sep)[0].substring(8);
      }
    });
    const versionPath = getVersionFilePath(versionName);
    let options;
    if ((await fs.pathExists(versionPath)) || fileLocation === 'docs') {
      options = JSON.parse(await fs.readFile(versionPath));
    } else {
      options = JSON.parse(await fs.readFile(versionPath));
      logger.warn(
        `FILE : ${versionPath} does not exist, USING default constants.json`,
      );
    }
    visit(ast, ['text', 'code', 'inlineCode', 'link'], (node) => {
      const getNestedValue = (key, object) => {
        let keySet = key.split('.');
        function rec(k, o, i) {
          if (i == k.length) return o;
          return Object.keys(o).includes(k[i])
            ? rec(k, o[k[i]], i + 1)
            : undefined;
        }

        return rec(keySet, object, 0);

        // return key.split('.').reduce((obj, i) => obj[i], object);
        // will not work as missing keys will throw eWrror, we need concrete return value || undefined
      };

      let value;
      switch (node.type) {
        case 'link':
          value = node.url;
          break;

        case 'text':
        case 'code':
        case 'inlineCode':
          value = node.value;
          break;
      }
      value = value.replace(/VAR::([A-Z_.0-9]+)/gi, (match, varName) => {
        let prefix = '';
        while (
          varName[varName.length - 1] === '.' ||
          varName[varName.length - 1] === '_'
        ) {
          prefix += varName[varName.length - 1];
          varName = varName.slice(0, -1);
        }
        prefix = prefix.split('').reverse().join('');
        let matchedValue = getNestedValue(varName, options) || match;
        return matchedValue + prefix;
      });

      switch (node.type) {
        case 'link':
          node.url = value;
          break;

        case 'text':
        case 'code':
        case 'inlineCode':
          node.value = value;
          break;
      }
    });
  };
  return transformer;
};
