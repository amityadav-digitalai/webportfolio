---
title: TeamForge 23.0 Update 1 Release Notes
category: ''
id: teamforge-23_0-update1
keywords: 
- release notes
product: teamforge
tags:
- ctf_23.0
- release_notes
last_updated: Nov 30, 2023
summary: Here's a list of few noteworthy issues fixed in TeamForge 23.0 Update 1 and the instructions to apply TeamForge 23.0 Update 1.
---

## Release Information

<table>
  <tr>
    <th>Version</th>
    <th>Released On</th>
  </tr>
  <tr>
    <td><b>GA Version:</b> <br></br>23.0.192</td>
    <td>Jun 20, 2023</td>
  </tr>
  <tr>
    <td><b>Update 1:</b> <br></br> 23.0.236-413</td>
    <td>Nov 30, 2023</td>
  </tr>
</table>

## What's New in TeamForge 23.0 Update 1 Release

<!-- See, https://forge.collab.net/sf/go/artf423805 -->
### Enhanced Search to Select Binaries for Baselining

You can now search for specific packages (instead of loading all the packages upfront) using the enhanced binary package search function and select them to be a part of your baseline. This search and select function comes in handy when your project consists of a large number of packages to search from. In addition, this enhances the overall TeamForge performance as you do not have to load all the available packages while you create baselines.

You can locate files or components by entering either the full file path or a partial path in the **Select Packages** component search box, which then filters and displays only the relevant packages in the **Available Packages** area for you to choose from.
![Select Packages component search](/docs/assets/images/230-u1-baseline-binaries.png)

<!-- See, https://forge.collab.net/sf/go/artf423962 -->
### Baseline Service Monitoring
You can now actively monitor baseline services in real-time with monit. Monit performs automated checks every 5 minutes, and in the event of a service failure, it initiates a restart for baseline servers, ensuring the continuous and faultless functionality of baseline services.

<!-- See, https://forge.collab.net/sf/go/artf423914 -->
### Copy URL on Document View Page
You can now copy the document URL to download a document by using the **Copy Url** icon on the respective document view page. This functionality eliminates the need for manual generation of such links.
![](/docs/assets/images/230-u1-document-download-copy-url.png)

<!-- See, https://forge.collab.net/sf/go/artf423913 -->
### New Documents URL Format
The new document URL format now includes only the document ID when you move or rename a document's title or folder.

## Issues Fixed in TeamForge 23.0 Update 1 Release

* The **Documents** module is enhanced to address the following issues:
  <!-- See, https://forge.collab.net/sf/go/artf423738 -->
  * Fixed—The **Last modified by** and **Created by** links on the document description page now takes you to the user details page.
  <!-- See, https://forge.collab.net/sf/go/artf423747 and https://forge.collab.net/sf/go/artf423705, and https://forge.collab.net/sf/go/artf423911-->
  * Fixed—Project members with document edit permission can now download locked documents on documents list and view pages.
  <!-- See, https://forge.collab.net/sf/go/artf423746 and https://forge.collab.net/sf/go/artf423702 -->
  * Fixed—The document tree now displays the document folder name instead of using ellipses when the name contains a large number of characters.
  <!-- See, <!-- See, https://forge.collab.net/sf/go/artf422630 -->
  * Fixed an issue that prevented users from downloading documents when the document name contained special characters.
  <!-- See, https://forge.collab.net/sf/go/artf423972 -->
  * Fixed an issue that prevented advanced search from retrieving the document folder’s details.
  <!-- See, https://forge.collab.net/sf/go/artf423925 -->
  * Fixed an issue with document downloads due to which the active version of a document was downloaded instead of the latest version.
  <!-- See, https://forge.collab.net/sf/go/artf423924 -->
  * Fixed an issue that caused a `permission denied` error in the windows desktop client for documents with **View**, **Edit**, or **Create** role permissions.
  * Fixed the web browser context menu as follows:
    * The web browser context menu now displays **Open link in new tab** and **Save link as** options when you right-click the document folder link. <!-- See, https://forge.collab.net/sf/go/artf422829 and https://forge.collab.net/sf/go/artf423723 -->
    * The web browser context menu now displays **Save link as** option when you right-click the document icon, title, or previous version inside the document folder. <!-- See, https://forge.collab.net/sf/go/artf423735 and https://forge.collab.net/sf/go/artf423749 --> 
  <!-- See, https://forge.collab.net/sf/go/artf423927 -->
  * Fixed—When you navigate to a nested folder document within a large folder tree on the left navigation bar of the document or planning folder, now points the selected folder instead of resetting to the top.
  <!-- See, https://forge.collab.net/sf/go/artf423929 -->
  * Fixed—When you download a document using the old document download URL, it now redirects to the new document URL.
<!-- See, https://forge.collab.net/sf/go/artf423722 -->
* Fixed an issue with the `POST /documentfolders/{docfolderid}/documents` API call that caused the sample payload to fail when creating a document.
<!-- See, https://forge.collab.net/sf/go/artf423972 -->
* Fixed an issue in the **View Report** page that prevented downloading the report images.
<!-- See, https://forge.collab.net/sf/go/artf423957 and https://forge.collab.net/sf/go/artf423958 -->
* Fixed an issue that prevented the new text page component from displaying an image when you copied and pasted an image into it, even if the image name contained special characters.
<!-- See, https://forge.collab.net/sf/go/artf424035 -->
* Fixed an issue that caused an unexpected alert message when adding a text component with HTML content into a project home.
<!-- See, https://forge.collab.net/sf/go/artf423934 -->
* Fixed an issue in the tracker settings that caused a tracker field to remain in **REQUIRED** status even after deleting the workflow-related status in tracker settings.
<!-- See, https://forge.collab.net/sf/go/artf423457 and https://forge.collab.net/sf/go/artf423961 -->
* Fixed an issue that led to high CPU utilization when the baseline creation count was increased in the baseline server.
<!-- See, https://forge.collab.net/sf/go/artf423609 and https://forge.collab.net/sf/go/artf423959 -->
* Fixed—After upgrading to TeamForge release 23.0, HTML editing displayed HTML codes instead of text components in the project home.
<!-- See, https://forge.collab.net/sf/go/artf422654 -->
* The artifact **ASSOCIATIONS** tab now displays the document version of the associated document.
<!-- See, https://forge.collab.net/sf/go/artf423922 -->
* Fixed an issue that prevented newly created Gerrit custom labels from displaying in the UI and impeding the full functionality of Gerrit.

## Apply TeamForge 23.0 Update 1

TeamForge 23.0 Update 1 is now available. Apply Teamforge 23.0 Update 1 on your site if you are on Teamforge 23.0.

![](/docs/assets/images/status-success-small.png) TeamForge add-on packages can remain installed when you apply Teamforge 23.0 Update 1. No updates are required. However, you should verify the compatibility of Add-ons applied to your site as some may be more specific to your site.<br></br>
![](/docs/assets/images/status-success-small.png) If you have any questions regarding compatibility or updating a specific add-on, contact [Digital.ai Support](https://support.digital.ai/).

:::important
You must log in as a root user to apply TeamForge 23.0 Update 1.
:::

1. Stop TeamForge.
   :::note
   Stop TeamForge on all the servers in a distributed setup.
   :::
   ```linux
   teamforge stop
   ````
2. Skip this step if your site has internet access. This step is to configure TeamForge 23.0 Update 1 installation repository on sites without Internet access.

   a. Contact the [Digital.ai Support](https://support.digital.ai/) to get the auxiliary installer package for TeamForge 23.0 Update 1 disconnected installation and save it in `/tmp`.
      * **Red Hat Enterprise Linux/CentOS 8.6 64 bit RPM package**: CTF-Disconnected-media-23.0.236-413.rhel8.x86_64.rpm
      * **Red Hat Enterprise Linux/CentOS 7.9 64 bit RPM package**: CTF-Disconnected-media-23.0.236-413.rhel7.x86_64.rpm

   b. Back up the old repo file.

      For example:

      ```linux
      mv /etc/yum.repos.d/CTF-Disconnected-media-23.0.411.repo /etc/yum.repos.d/CTF-Disconnected-media-23.0.411.repo.cn_backup
      ````

   c. Unpack the 23.0 Update 1 disconnected installation package.

      ```linux
      rpm -Uvh <package-name>
      ````

   d. Verify your yum configuration files.

      ```linux
      yum list httpd
      yum list apr
      ````

3. Configure your TeamForge installation repository. This step is to configure TeamForge 23.0 Update 1 installation repository on sites with Internet access.

   a. Remove the existing TeamForge repository package.

      ```linux
      yum erase collabnet-teamforge-repo-23.0-0.noarch
      ````

   b. Contact the [Digital.ai Support](https://support.digital.ai/) and download the TeamForge 23.0 Update 1 installation repository package to `/tmp`.

   c. Install the Teamforge 23.0 Update 1 installation repository package.

      ```linux
      yum install -y /tmp/collabnet-teamforge-repo-23.0-0.noarch.rpm
      ````

   d. Refresh your repository cache.

      ```linux
      yum clean all
      ````

4. Install the Teamforge 23.0 Update 1.

   ```linux
   yum install teamforge
   ````

   The above command installs all the TeamForge updates available in the CollabNet yum repository for Teamforge 23.0.

5. Check the `/opt/collabnet/teamforge/var/scm/gerrit/gitroot` directory. If it is empty, remove it manually.

   ```linux
   rm -rf gitroot
   ````

6. Deploy services.

   ```linux
   teamforge provision
   ````

7. :::important
   Do this if and only if you are upgrading from TeamForge 17.1 (or earlier) to 23.0 on a new hardware.
   :::

   Update file permissions on your site's data.

   ```linux 
   teamforge apply-permissions
   ````

   :::include note
   This process can take a long time on sites with a lot of data.
   :::

8. Restart TeamForge.

   ```linux
   teamforge restart
   ````
