// import path from 'path';
import {findNewVersion} from './version';
import {cliConstantVersionCommand} from './cli';

export default async function syncConstants(context, options) {
  return {
    name: 'sync-constants',
    extendCli(cli) {
      cli
        .command('sync-constants')
        .description('Sync your constants with versioned json objects.')
        .action(async () => {
          const newVersions = await findNewVersion(
            context.siteDir,
            options.path,
          );
          await cliConstantVersionCommand(newVersions, options, context);
        });
    },
  };
}
