---
Summary: Here's a list of few noteworthy issues fixed in TeamForge 23.0.
category: ''
id: teamforge-fixedissues
keywords:
- release
- notes
- fixed
- issues
- bug
- fixes
lastUpdatedAt: Jun 23, 2023
product: teamforge
tags:
- release_notes
title: What's Fixed in TeamForge 23.0?
---
<!-- See CRI 23.0 List: https://forge.collab.net/sf/go/artf422209  -->

In addition to fixing a few security vulnerabilities, the following issues were also fixed in TeamForge 23.0. 

<!-- See, https://forge.collab.net/sf/go/artf422220 -->
* Refactored the **Item Lock Manager** to automatically remove locks on artifacts after five minutes.
<!-- See, https://forge.collab.net/sf/go/artf422222 -->
* Fixed—user can now add or update any ECDSA SSH public key for SSH authentication within **User Settings**.
<!-- See, https://forge.collab.net/sf/go/artf422116 -->
* Fixed issues that caused project imports using Simbel to fail.
<!-- See, https://forge.collab.net/sf/go/artf422630 -->
* Fixed an issue that prevented users from downloading documents that had special characters in Document Title.
<!-- See, https://forge.collab.net/sf/go/artf422103 -->
* Field value validations are now enforced on trackers containing custom drop-down fields with parent-child relationship.
<!-- See, https://forge.collab.net/sf/go/artf422713 -->
* Fixed—Binaries API in Baselines module now return list of binaries based on the filter provided.
<!-- See, https://forge.collab.net/sf/go/artf422030 -->
* Fixed—while adding a comment with underscore in a Wiki page, the system does not automatically convert the text to hyperlink.
<!-- See, https://forge.collab.net/sf/go/artf422487 -->
* Fixed—user can now successfully access a linked application when SSO is turned off.
<!-- See, https://forge.collab.net/sf/go/artf422579 -->
* The Review Board list view is now responsive.
<!-- See, https://forge.collab.net/sf/go/artf421832 -->
* Fixed—the TrackerIncremental job has been modified to display the correct data for **Average Age** and **Distribution** reports.
<!-- See, https://forge.collab.net/sf/go/artf422623 -->
* Planning Folder summary view now displays the correct number of open artifact in the root folder.
<!-- See, https://forge.collab.net/sf/go/artf422654 -->
* Document Version is now appended to the document ID when a user associates a TeamForge object via the **Documents** module.

**TeamForge SCM—Bug Fixes**

<!-- https://forge.collab.net/sf/go/artf422390 -->
* Upgraded Postgres SQL driver to version 42.2.27 to prevent the JDBC driver related vulnerabilities.
<!-- https://forge.collab.net/sf/go/artf422018 -->
* Fixed an XSS vulnerability in **My Workspace** when commit comment contained an **XSS** tag.
<!-- https://forge.collab.net/sf/go/artf422505 -->
* Improved performance of repository creation.
<!-- https://forge.collab.net/sf/go/artf421667 -->
* Improved performance of Gerrit code review widget in **My Workspace**.
<!-- https://forge.collab.net/sf/go/artf421748 -->
* Fixed an issue that prevented fetching the artifact id while creating a new pull request.
<!-- https://forge.collab.net/sf/go/artf421256 -->
* Fixed an issue in code browser: the `Resolved` checkbox is not displayed for nested review comments.