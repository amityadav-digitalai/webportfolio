import fs from 'fs-extra';
import path from 'path';
import logger from '@docusaurus/logger';

export async function cliConstantVersionCommand(versions, options, context) {
  const {path: constantsPath} = options;
  const {siteDir} = context;
  if (versions.length > 1) {
    logger.warn(
      `multiple new versions found, creating multiple files with current constants snapshot  !!`,
    );
  }

  versions.forEach(async (version) => {
    const newVersionedConstantFilePath = path.resolve(
      siteDir,
      constantsPath,
      `version-${version}-constants.json`,
    );
    const srcFile = path.resolve(siteDir, 'constants.json');
    await Promise.all([
      await fs.copyFile(srcFile, newVersionedConstantFilePath),
    ]);
    logger.success(`new Version ${version} constants file created !!`);
  });
}
