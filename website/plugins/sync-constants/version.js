import path from 'path';
import fs from 'fs-extra';

import {VERSIONS_JSON_FILE} from './constants';
import logger from '@docusaurus/logger';

/** `community` => `[siteDir]/community_versions.json` */
export function getVersionsFilePath(siteDir) {
  return path.join(siteDir, VERSIONS_JSON_FILE);
}

/**
 * Reads the plugin's respective `versions.json` file, and returns its content.
 *
 * @throws Throws if validation fails, i.e. `versions.json` doesn't contain an
 * array of valid version names.
 */
export async function readVersionsFile(siteDir) {
  const versionsFilePath = getVersionsFilePath(siteDir);
  const check = await fs.pathExists(versionsFilePath);
  if (check) {
    const content = await fs.readJSON(versionsFilePath);
    return content;
  }
  return null;
}

/**
 * Reads the `versions.json` file, and returns an ordered list of version names.
 *
 * - If `disableVersioning` is turned on, it will return `["current"]` (requires
 * `includeCurrentVersion` to be true);
 * - If `includeCurrentVersion` is turned on, "current" will be inserted at the
 * beginning, if not already there.
 *
 * You need to use {@link filterVersions} after this.
 *
 * @throws Throws an error if `disableVersioning: true` but `versions.json`
 * doesn't exist (i.e. site is not versioned)
 * @throws Throws an error if versions list is empty (empty `versions.json` or
 * `disableVersioning` is true, and not including current version)
 */
export async function readVersionNames(siteDir) {
  const versions = await readVersionsFile(siteDir);
  return versions;
}

/**
 * Reads the `versions.json` file, and returns an ordered list of version names.
 * whose versioned constant file is not present.
 */
export async function findNewVersion(siteDir, fpath) {
  const fullPath = path.normalize(path.join(siteDir, fpath));
  const check = await fs.pathExists(fullPath);
  if (!check) {
    await fs.mkdir(fullPath);
    logger.warn(`${fullPath} not found, folder created !!`);
  } else {
    logger.info(`${fullPath} present`);
  }
  const allVersion = await readVersionNames(siteDir);
  const constantsFileNames = await fs.readdir(fullPath);

  const constantsVersion = constantsFileNames.reduce((acc, item) => {
    acc.push(item.substring(8).replace('-constants.json', ''));
    return acc;
  }, []);
  return allVersion.filter((x) => !constantsVersion.includes(x));
}
