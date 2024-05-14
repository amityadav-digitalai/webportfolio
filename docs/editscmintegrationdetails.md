---
Summary: You can move or reconfigure a source control server without having to reintegrate
  the server into TeamForge.
category: ''
id: editscmintegrationdetails
keywords:
- site admin scm tasks
- scm
- source control
lastUpdatedAt: Aug 10, 2018
product: teamforge
tags:
- site_admin_tasks
- installation
- upgrade
- integration
- source_code
- scm
- git_gerrit
title: Edit SCM Integration Details
---


:::tip
If you edit or lose the permissions on your SCM server, use the **Synchronize Permissions** button on the **SCM Integrations** page to recreate the correct permissions on your SCM server from TeamForge.
:::
1. Click **Admin** in the TeamForge navigation bar.
2. Click **Integrations** from the **Projects** menu.
3. On the **SCM INTEGRATIONS** tab, click the name of the SCM integration you want to edit.
4. On the **Edit Integration** page, make the changes you need and click **Save**.
   
:::note
An option has been added in TeamForge 18.2 (and later) to prevent creation of new repositories on selected SCM servers, thus enforcing the repositories to be created on servers with enough space.
:::

![](/docs/assets/images/SCM-freeze_scm_server.png)

:::note
An option has been added in TeamForge 18.2 (and later) to enforce project names to be added as prefix to new repositories created on a specific SCM server. This allows different projects to have repositories with the same name.
:::

![](/docs/assets/images/SCM-repo_prefix.png)
