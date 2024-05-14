---
Summary: The following noteworthy issues, including any workarounds we may have, are
  known to exist in the TeamForge 23.0 release. These issues would be resolved in
  an upcoming release.
category: ''
id: teamforge-known
keywords:
- known
- issues
- late
- breaking
- workaround
- work
- around
lastUpdatedAt: May 09, 2023
product: teamforge
tags:
- release_notes
title: Known Issues in TeamForge 23.0
---

<!-- See, https://forge.collab.net/sf/go/artf421277 -->
* Gerrit link fails to display the user credentials page on the browser when accessed without logging in. It shows a `404 Not found error` message instead.
<!-- See, https://forge.collab.net/sf/go/artf422393 -->
* While cloning a git replica server, the **SSH HOOK FETCH** command shows the **SCP** option, despite **cURL** being selected in the **Integrations** > **Settings** page.
<!-- See, https://forge.collab.net/sf/go/artf422045 -->
* The deprecated code review URL fails to show the `permission denied error` message. It shows a blank page instead. 
<!-- See, https://forge.collab.net/sf/go/artf422466 -->
* The error message in the `PUT /3/repos/{repo_key}/files/{file_path}` API's response for invalid payload validation is not meaningful.
<!-- See, https://forge.collab.net/sf/go/artf422850 -->
* Auto assignment of category value to a pre-existing artifact does not work in **PLAN**, **TASK**, and **KANBAN** boards.
