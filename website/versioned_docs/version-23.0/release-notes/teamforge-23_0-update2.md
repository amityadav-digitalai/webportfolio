---
title: TeamForge 23.0 Update 2 Release Notes
category: ''
id: teamforge-23_0-update2
keywords: 
- release notes
product: teamforge
tags:
- ctf_23.0
- release_notes
last_updated: Jan 24, 2024
summary: Here's a list of few noteworthy issues fixed in TeamForge 23.0 Update 1 and the instructions to apply TeamForge 23.0 Update 2.
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
  <tr>
    <td><b>Update 2:</b> <br></br> 23.0.255-467</td>
    <td>Feb 05, 2024</td>
  </tr>
</table>

## Issues Fixed in TeamForge 23.0 Update 2 Release
* The **Documents** module is enhanced to address the following issues:
   <!-- See, https://forge.collab.net/sf/go/artf424235 -->
   * Fixed—When creating or editing a document, you can now upload a file with the `.eml` extension under the **Document Type** section.
   <!-- See, https://forge.collab.net/sf/go/artf431822 -->
   * Fixed—The document review page now lists open reviews at the top followed by closed reviews, all organized alphabetically by name.
   <!-- See, https://forge.collab.net/sf/go/artf431878 -->
   * Fixed an issue in document review where a review created for a specific version was being duplicated across various review versions.
   <!-- See, https://forge.collab.net/sf/go/artf431820 -->
   * Fixed—The **Document Link** in the old document review pop-up window now displays the corresponding document version, instead of the latest one.
   <!-- See, https://forge.collab.net/sf/go/artf431829 -->
   * Fixed—The document versions summary table now correctly displays the review completion date and timestamp.
   <!-- See, https://forge.collab.net/sf/go/artf431821 -->
   * Fixed—The document summary page no longer duplicates the required reviewer in the **REVIEWERS** column.
<!-- See, https://forge.collab.net/sf/go/artf424288 -->
*  Fixed an issue in the **Trackers** module that prevented you from changing the artifact **STATUS** and attaching files.
<!-- See, https://forge.collab.net/sf/go/artf431900 -->
*  Fixed—The **USER-ROLE MATRIX** window now adjusts to the browser page.

## Apply TeamForge 23.0 Update 2

TeamForge 23.0 Update 2 is now available. Apply TeamForge 23.0 Update 2 on your site if you are on TeamForge 23.0.

![](/docs/assets/images/status-success-small.png) TeamForge add-on packages can remain installed when you apply TeamForge 23.0 Update 2. No updates are required. However, you should verify the compatibility of Add-ons applied to your site as some may be more specific to your site.<br></br>
![](/docs/assets/images/status-success-small.png) If you have any questions regarding compatibility or updating a specific add-on, contact [Digital.ai Support](https://support.digital.ai/).

:::important
You must log in as a root user to apply TeamForge 23.0 Update 2.
:::

1. Stop TeamForge.
   :::note
   Stop TeamForge on all the servers in a distributed setup.
   :::
   ```linux
   teamforge stop
   ````
2. Skip this step if your site has internet access. This step is to configure TeamForge 23.0 Update 2 installation repository on sites without Internet access.

   a. Contact the [Digital.ai Support](https://support.digital.ai/) to get the auxiliary installer package for TeamForge 23.0 Update 2 disconnected installation and save it in `/tmp`.
      * **Red Hat Enterprise Linux/CentOS 8.6 64 bit RPM package**: CTF-Disconnected-media-23.0.255-467.rhel8.x86_64.rpm
      * **Red Hat Enterprise Linux/CentOS 7.9 64 bit RPM package**: CTF-Disconnected-media-23.0.255-467.rhel7.x86_64.rpm

   b. Back up the old repo file.

      For example:

      ```linux
      mv /etc/yum.repos.d/CTF-Disconnected-media-23.0.411.repo /etc/yum.repos.d/CTF-Disconnected-media-23.0.411.repo.cn_backup
      ````

   c. Unpack the 23.0 Update 2 disconnected installation package.

      ```linux
      rpm -Uvh <package-name>
      ````

   d. Verify your yum configuration files.

      ```linux
      yum list httpd
      yum list apr
      ````

3. Configure your TeamForge installation repository. This step is to configure TeamForge 23.0 Update 2 installation repository on sites with Internet access.

   a. Remove the existing TeamForge repository package.

      ```linux
      yum erase collabnet-teamforge-repo-23.0-0.noarch
      ````

   b. Contact the [Digital.ai Support](https://support.digital.ai/) and download the TeamForge 23.0 Update 2 installation repository package to `/tmp`.

   c. Install the Teamforge 23.0 Update 2 installation repository package.

      ```linux
      yum install -y /tmp/collabnet-teamforge-repo-23.0-0.noarch.rpm
      ````

   d. Refresh your repository cache.

      ```linux
      yum clean all
      ````

4. Install the TeamForge 23.0 Update 2.

   ```linux
   yum install teamforge
   ````

   The above command installs all the TeamForge updates available in the CollabNet yum repository for TeamForge 23.0.

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

   :::note
   This process can take a long time on sites with a lot of data.
   :::

8. Restart TeamForge.

   ```linux
   teamforge restart
   ````
