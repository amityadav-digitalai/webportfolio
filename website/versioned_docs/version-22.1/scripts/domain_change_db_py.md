---
Summary: The domain_change_db.py script handles all the steps required to change the
  domain name in the site database. It does not change anything in the file system.
category: ''
id: domain_change_db_py
keywords:
- domain change
lastUpdatedAt: June 14, 2019
product: teamforge
tags:
- upgrade
- scripts
- site_admin_tasks
title: domain_change_db.py
---

Changing the domain through any other mechanism may cause problems.

## Usage
Execute this script with a command like this:

```shell
[RUNTIME_DIR]/domain_change_db.py [--debug] [--dir] --old={domain_name} --new={domain_name}
````

:::note
The new domain name must match the value defined for the [PUBLIC_FQDN](../siteconfigtokens#hostpublic_fqdn) token in the `site-options.conf` file.
:::

## Parameters

| Parameter    | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| --help       | Show command help information                                                                                 |
| --debug      | Include debugging information                                                                                  |
| --old        | Old domain                                                                                                    |
| --new        | New domain                                                                                                    |
| --dir        | Run domain change in this directory only. <br></br>You must specify the full path. Use this feature to do a subset of the data directory. This instructs the script to do a recurse in the specified directory looking for the old `domain_name` and replacing it with the new `domain_name`. <br></br> **Note**: Without this option, only HTML, text, and VM files are modified. |
| --threadlimit| Defines the maximum number of simultaneous threads that can be invoked by this program. The default value is 50.|



