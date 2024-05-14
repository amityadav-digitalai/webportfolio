---
Summary: It is recommended to change the scmviewer password after installing TeamForge.
category: ''
id: changethescmviewerpassword
keywords:
- site admin scm tasks
- scm
- source control
lastUpdatedAt: May 27, 2019
product: teamforge
tags:
- site_admin_tasks
- installation
- upgrade
- integration
- source_code
- scm
- git_gerrit
title: Change the scmviewer Password
---

import ProvisionService from './_partials/installupgrade/_deploy_services_without_note.md'

import Stopteamforge178andlater from './_partials/installupgrade/_stop_teamforge_178andLater.md'

Follow these steps to change the scmviewer password:
1. <Stopteamforge178andlater />
2. Create an encrypted password using the [password_util.sh](./scripts/passwordutil).
   ```shell
   /opt/collabnet/teamforge/runtime/scripts/password_util.sh -encrypt '<new_password_text>'
   ````
3. Set the encrypted password to the [SCM_USER_ENCRYPTED_PASSWORD](siteoptiontokens#SCM_USER_ENCRYPTED_PASSWORD) token in the `/opt/collabnet/teamforge/etc/site-options.conf` file. 
4. <ProvisionService />

