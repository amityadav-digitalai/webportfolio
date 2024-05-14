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
lastUpdatedAt: Dec 20, 2023
product: teamforge
tags:
- release_notes
title: Known Issues in TeamForge 23.1
---

<!-- See, https://forge.collab.net/sf/go/artf423728 -->
* While filtering by **Assigned To** or **Created By** in **PLANNING FOLDERS** view, there is no indication of the applied filter. Additionally, when searching for the filtered user, the checkbox is not selected.
<!-- See, https://forge.collab.net/sf/go/artf424190 and https://forge.collab.net/sf/go/artf424195-->
* The **Auto Assign By Category** feature is not working in the **PLAN** and **TASK** boards. For more information, see [Auto Assign Tracker Artifacts](../trackers-creatingatracker#autoassigntrackerartifacts).
<!-- See, https://forge.collab.net/sf/go/artf424205 -->
* When you reset the **ESTIMATED EFFORT**, **REMAINING EFFORT**, or **ACTUAL EFFORT** values to 0 on the **PLAN** board, it triggers a `Needs to be a positive integer.` error.
<!-- See, https://forge.collab.net/sf/go/artf424198 -->
* When you create a job in the Jenkins server with special characters, the TeamForge association is not created between the artifact and the job.
<!-- See, https://forge.collab.net/sf/go/artf423518 -->
* While configuring the **Artifacts** widget in **My Workspace**, clicking the **Reset** button does not remove the previously selected project. Additionally, the project search function fails to display results for the entered keyword alone.
<!-- See, https://forge.collab.net/sf/go/artf424189 -->
* When you edit the artifact **GROUP** or **CUSTOMER** field values in the **PLAN** board view, the changes are not saved.
<!-- See, https://forge.collab.net/sf/go/artf424234 -->
* The Gerrit UI on the replica is showing incorrect data, with some changes missing and usernames not displaying properly. This issue only affects the replica UI and is visible only to site admin, as normal users are redirected to the master Gerrit UI. Apart from this UI issue, the replica UI functions perfectly.

