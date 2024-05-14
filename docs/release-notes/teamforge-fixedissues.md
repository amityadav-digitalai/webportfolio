---
Summary: Here's a list of few noteworthy issues fixed in TeamForge 23.1.
category: ''
id: teamforge-fixedissues
keywords:
- release
- notes
- fixed
- issues
- bug
- fixes
lastUpdatedAt: Nov 23, 2023
product: teamforge
tags:
- release_notes
title: What's Fixed in TeamForge 23.1?
---
<!-- See CRI 23.1 fixed issues: https://forge.collab.net/sf/go/srch3576 and choose Release 23.1 planning folder -->
In addition to fixing a few security vulnerabilities, the following issues were also fixed in TeamForge 23.1. 

<!-- See, https://forge.collab.net/sf/go/artf423609 -->
* Fixed—After upgrading to TeamForge release 23.0, HTML editing displayed HTML code instead of text components in the project home.
<!-- See, https://forge.collab.net/sf/go/artf423340 -->
<!-- * Fixed—The `SCRAM-SHA-256` encryption is enabled for password authentication in PostgreSQL. -->
  <!-- Hiding SCRAM-SHA-256 update as it was reverted back in 23.1 Update1. -->
<!-- See, https://forge.collab.net/sf/go/artf423534 -->
* Fixed an issue that caused a provision error during database migration.
<!-- See, https://forge.collab.net/sf/go/artf423339 -->
* Fixed—The Transport Layer Security (TLS) encryption is now supported in TeamForge 23.1, adding a TLS stamp to both email sending and receiving end.
<!-- See, https://forge.collab.net/sf/go/artf423457 and https://forge.collab.net/sf/go/artf423961 -->
* Fixed an issue that led to high CPU utilization when the baseline creation count was increased in the baseline server.
<!-- See, https://forge.collab.net/sf/go/artf423609 and https://forge.collab.net/sf/go/artf423959 -->
* Fixed—After upgrading to TeamForge release 23.0, HTML editing displayed HTML codes instead of text components in the project home.
* The **Documents** module is enhanced to address the following issues:
  <!-- See, https://forge.collab.net/sf/go/artf423738 -->
  * Fixed—The **Last modified by** and **Created by** links on the document description page now takes you to the user details page.
  <!-- See, https://forge.collab.net/sf/go/artf423747 and https://forge.collab.net/sf/go/artf423705, and https://forge.collab.net/sf/go/artf423911-->
  * Fixed—Project members with document edit permission can now download locked documents on documents list and view pages.
  <!-- See, https://forge.collab.net/sf/go/artf423746 and https://forge.collab.net/sf/go/artf423702 -->
  * Fixed—The document tree now displays the document folder name instead of using ellipses when the name contains a large number of characters.
  <!-- See, https://forge.collab.net/sf/go/artf423735 and https://forge.collab.net/sf/go/artf423749 -->
  * Fixed—The web browser context menu now displays **Save link as** option when you right-click the document icon, title, or previous version inside the document folder. 
  <!-- See, https://forge.collab.net/sf/go/artf423722 -->
  * Fixed an issue with the `POST /documentfolders/{docfolderid}/documents` API call that caused the sample payload to fail when creating a document.
  <!-- See,  https://forge.collab.net/sf/go/artf423852 and https://forge.collab.net/sf/go/artf423925 -->
  * Fixed an issue with document downloads due to which the active version of a document was downloaded instead of the latest version.
  <!-- See, https://forge.collab.net/sf/go/artf423814 and https://forge.collab.net/sf/go/artf423927-->
  * Fixed—When you navigate to a nested folder document within a large folder tree on the left navigation bar of the document or planning folder, now points the selected folder instead of resetting to the top.
<!-- See, https://forge.collab.net/sf/go/artf423615 -->
* Fixed—The manual and automation responses for the `GET /foundation/v1/objects` API call now sort the `create` operation first, followed by other `update` operations.
<!-- See, https://forge.collab.net/sf/go/artf423894, https://forge.collab.net/sf/go/artf423957, and https://forge.collab.net/sf/go/artf423958 -->
* Fixed an issue that prevented the new text page component from displaying an image when you copied and pasted an image into it, even if the image name contained special characters.
  
**TeamForge SCM—Bug Fixes**
<!-- See, https://forge.collab.net/sf/go/artf419774 -->
* Fixed—The `GET /servers/{serverId}` and `GET /servers` API calls are now restricted for users without source code admin permission.
<!-- See, https://forge.collab.net/sf/go/artf422486 -->
* Fixed—Assigning roles and users to **Merge via Pull Request** in protected branch settings prevented enabling the **Merge** button for merging feature branch into master.
<!-- See, https://forge.collab.net/sf/go/artf421307 -->
* Fixed an issue that prevented newly created Gerrit custom labels from displaying in the UI and impeding the full functionality of Gerrit.
<!-- See, https://forge.collab.net/sf/go/artf422173 -->
* Fixed—the expansion arrow in the Git submodule page now functions properly when you expand the searched submodule repository.
<!-- See, https://forge.collab.net/sf/go/artf422393 -->
* Fixed—When cloning a Git replica server, the **SSH HOOK FETCH COMMAND** now correctly displays the **cURL** option selected in **Integrations** > **Settings**.