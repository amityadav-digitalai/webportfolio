---
Summary: The restore-rb-data.py script is used to restore the Review Board application
  data from the backup directory.
category: ''
id: restore-rb-data-py
keywords:
- back up
- restore
lastUpdatedAt: Mar 27, 2018
product: teamforge
tags:
- upgrade
- backup_restore
- review_board
- scripts
title: restore-rb-data.py
---

This script removes the existing Review Board application data present in the system and restores data from the backup directory.

## Usage

```shell
python ./restore-rb-data.py --backupdir={dir}
````

## Options

The following options are available for the `restore-rb-data.py` script:

| Option | Description |
|--------|-------------|
| -b \| --both | Restore both the database and the filesystem. This is the default option. |
| -d \| --database | Restore the database. |
| -f \| --files | Restore the filesystem. |
| -h \| --help | Provides a list of all available options for this script. |

