---
Summary: The db.py script can be used to dump and restore a PostgreSQL database.
category: ''
id: db_py
keywords:
- back up
- restore
lastUpdatedAt: Mar 14, 2018
product: teamforge
tags:
- upgrade
- backup_restore
- scripts
- site_admin_tasks
- postgres
title: db.py
---

This script can be used only for the PostgreSQL service. Don't run this script on a remote database. Execute the script only when the database is up and running.

## Usage
Run this script as follows:

```shell
./db.py --action=<action> --path=<destination directory>
````

## Options
Mandatory options:

| Option | Description |
|--------|--------|
| -a \| -\-action | Action to be performed. You can pass either `dump` or `restore` as an option. |
| -f \| -\-path | Path where the database backup file will be created. Must be a directory owned by the postgresql user (usually `/var/lib/pgsql/VAR::identifiers.postgres_short /`). Can be a new directory. |


Other options:

| Option | Description |
|--------|--------|
| -t \| -\-type | Specifies the type of database (`ctf` or `reporting`). |
| -h \| -\-help | Print this usage message and exit. |

