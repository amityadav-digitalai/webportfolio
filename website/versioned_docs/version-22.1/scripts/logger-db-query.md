---
Summary: Use the logger-db-query script to enable or disable logging for queries.
category: ''
id: logger-db-query
keywords:
- logs
- scripts
lastUpdatedAt: Jul 27, 2018
product: teamforge
tags:
- logs
- scripts
- site_admin_tasks
- ctf_18.2
title: logger-db-query
---

Use the logger-db-query script to enable or disable logging for queries. Once enabled, the database queries along with the query parameters are logged in `/opt/collabnet/teamfoge/log/apps/query.log`.

However, the log level change is persistent and can survive Jboss restart. This means that you have to disable logging after the diagnosis or debug work is complete. Continuous logging can impact the performance.

## Usage
Use the following command to run this script.
```shell
[RUNTIME_DIR]/scripts/logger-db-query [[--enable|-e] | [--disable|-d] | [--help|-h]
````
## Parameters

| Paramater | Description |
|-----------|-------------|
| -e \| --enable | Enable logging. |
| -d \| --disable | Disable logging. |
| -h \| --help | To view help information for the script. |


