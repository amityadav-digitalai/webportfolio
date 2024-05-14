---
Summary: The password_util.sh script is used to get the encrypted or decrypted password
  value for the user scmviewer.
category: ''
id: passwordutil
keywords:
- scripts
lastUpdatedAt: Feb 27, 2018
product: teamforge
tags:
- scripts
- scm
- site_admin_tasks
title: password_util.sh
---


**Usage**
* To encrypt:
  ```shell
  sudo /opt/collabnet/teamforge/runtime/scripts/password_util.sh -encrypt 'teamforge'
  ````
  
  ```shell
  [root@xx scripts]# ./password_util.sh -encrypt 'teamforge'
  Input String:teamforge
  Encrypted password:VBxJJvzbXb5tNx2SxR26egA==
  ````
* To decrypt:
  ```shell
  sudo /opt/collabnet/teamforge/runtime/scripts/password_util.sh -decrypt 'VBxJJvzbXb5tNx2SxR26egA=='
  ````

  ```shell
  [root@xx scripts]# ./password_util.sh -decrypt 'VBxJJvzbXb5tNx2SxR26egA=='
  Input String:VBxJJvzbXb5tNx2SxR26egA==
  Decrypted password:teamforge
  ````

