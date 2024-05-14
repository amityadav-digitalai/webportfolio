---
Summary: Here's a list of few noteworthy issues fixed in TeamForge 22.0.
category: ''
id: teamforge-fixedissues
keywords:
- release
- notes
- fixed
- issues
- bug
- fixes
lastUpdatedAt: Apr 03, 2022
product: teamforge
tags:
- release_notes
title: What's Fixed in TeamForge 22.0?
---


<!-- See CRI 22.0 List: artf420157  -->
<!-- artf419367 -->
In addition to fixing a few security vulnerabilities, the following issues were also fixed in TeamForge 22.0. 

* Fixed an issue with Document version comment formatting due to which, line breaks, if used in the comment, were ignored. 
* The DevOps category has been removed from the TeamForge Reports module. (The Release pipeline DevOps report was not supported, but the Reports module was showing this report in the DevOps category.)
* Fixed an issue with Documents—uploading any new version of a document sets the status of the new version to DRAFT as expected. 
* Fixed an issue that prevented artifact status change audit entries from being logged.
* Fixed an issue with the password reset link—in password expiration notification emails—that caused a TeamForge system error when clicking it.  
* Added the _Sort by Name_ feature to the **Project Admin > User Membership** page.
* Fixed an issue with TeamForge—Gerrit 3.x integration due to which the Teamforge roles were not accessible from the Gerrit UI. Unlike the old GWT UI, the new PolyGerrit UI does not include the `project` parameter in the REST API query to suggest a group, which is now fixed. 
* Fixed the Log4j dependent vulnerabilities.
* Fixed a form validation issue that prevented the confirmation pop up (to save unsaved changes, if any, in the page) when the user tries to leave the page. 
* Fixed the issue—Unable to create the **Artifact Open/Close Chart (Multiple Trackers)**.
* Fixed an issue with the Tracker Table report's export function that was erroneously exporting all the artifacts in the tracker. 
* Fixed the issue—Tracker artifact's **Estimated/Remaining Effort** fields were accepting real value and rounds them off to integer. 
* Fixed an issue with the Reports project page component, which is broken when you add the report to the project page and save the page before the report data is fully loaded.
* Fixed an issue with the notification emails sent for artifact comment edits—that showed the avatar of the user that last modified the artifact—instead of the actual user's avatar who edits the comment.
* Fixed an issue with the artifact Description field's Markdown editor that rendered the page unresponsive if you format the second line of the description as the heading while leaving the first line empty.
* Fixed an issue that prevented non-admin users from creating reports on sites with large number of (4000+ projects and trackers) projects and trackers. 
* Fixed an issue with SOAP API calls (made via custom add-on asynchronously), due to which the database transactions were not rolled back in case of exceptions during the API call.
* Fixed the issue—The review comments for an older patchset in TeamForge diff view are not visible for repo category 'pull_request'.
* Fixed the multi-host upgrade `binary` service migration issue. 
* Fixed a cartesian query for the None filter, which pulled around 20M records, and caused a site-down situation due to OOME.
* Fixed the issue due to which the Baselines attributes, workflow, and settings, found in a project template, were found to be missing in projects created from the project template.
* Fixed the Open for SCM issue—the Open for SCM tracker status setting, if configured in the source project that was used to create a project template, is retained on all the projects that are created using the project template.
* Fixed an issue with a query due to which there were artifact count discrepancies between the Tracker Saved Search and the same Saved Search when added as a component to a project page.
* Fixed a RBAC issue with Tracker Mass Update due to which users assigned to roles created for editing specific trackers (tracker-edit permission on select trackers) are not listed during Tracker Mass Update. 
* Fixed a form validation issue with the Create Artifact page to highlight the mandatory flex fields with red asterisk if users fail to update the mandatory flex fields.
* Fixed a webhook trigger issue that prevented updates to artifacts with pre or post submit webhooks configured. 
* Fixed an issue due to which the artifact update information (particular field updates) was not shown in the artifact's Status/Comments section.
* Fixed the broken Reload icon on the List Projects page.
* Fixed an issue with the tracker import function that caused an infinite loop when you import artifacts with duplicate fields (columns) from a CSV file.
* Fixed an issue with viewing an SVN repository directory if the directory name starts with the "#" character.
* Fixed—Tracker export malfunctions (exports only a partial list of matching artifacts) when you include values from a multi-select flex field for filtering tracker artifacts.
* Fixed an issue with the Artifacts List view page, wherein the Description field shows raw HTML tags in case HTML tags were used in the actual actual artifact description.  
