---
title: TeamForge 23.1 Update 1 Release Notes
category: ''
id: teamforge-23_1-update1
product: teamforge
keywords: 
- release notes
tags: 
- ctf_23.1
- release_notes
last_updated: Mar 07, 2024
summary: Here's a list of few noteworthy issues fixed in Teamforge 23.1 Update 1 and the instructions to apply TeamForge 23.1 Update 1.
---

## Release Information

<table>
  <tr>
    <th>Version</th>
    <th>Released On</th>
  </tr>
  <tr>
    <td><b>GA Version:</b> <br></br>23.1.325</td>
    <td>Dec 29, 2023</td>
  </tr>
  <tr>
    <td><b>Update 1:</b> <br></br> 23.1.355-462</td>
    <td>Mar 25, 2024</td>
  </tr>
</table>

## What's New in TeamForge 23.1 Update 1 Release

<!-- See, https://forge.collab.net/sf/go/artf431989 -->
### Enhanced Log Level Configuration

As a site admin, you can now independently adjust log levels for **APPLICATION SERVER** and **SOAP SERVER** components through the **Configure Logging** page. This enables the Axis logs without restarting JBoss. The **SOAP SERVER** log level adjustment affects only the `axis.log` files, while adjustments to the **APPLICATION SERVER** log level impact both `server.log` and `vamessages.log` files. For more information, see [Configure Your Site’s Log Level](../logfiles#configure-your-sites-log-level).

![Configure Logging](/docs/assets/images/231-u1-soap-server.png)

## Issues Fixed in Teamforge 23.1 Update 1 Release
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
* Fixed an issue in the **Trackers** module that prevented you from changing the artifact **STATUS** and attaching files.
<!-- See, https://forge.collab.net/sf/go/artf431900 -->
* Fixed—The **USER-ROLE MATRIX** window now adjusts to the browser page.
<!-- See, https://forge.collab.net/sf/go/artf432095 -->
* Fixed—The **REPORTED IN RELEASE** field now correctly displays release information in the tracker artifact.
<!-- See, https://forge.collab.net/sf/go/artf432091 -->
* Fixed a vulnerability while accessing the auth manager page.
<!-- See, https://forge.collab.net/sf/go/artf432181 -->
* Fixed a role synchronization issue between TeamForge and Nexus when assigning roles to over 10 users.

## Apply Teamforge 23.1 Update 1

Teamforge 23.1 Update 1 is now available. Apply Teamforge 23.1 Update 1 on your site if you are on Teamforge 23.1.

![](/docs/assets/images/status-success-small.png) TeamForge add-on packages can remain installed when you apply Teamforge 23.1 Update 1. No updates are required. However, you should verify the compatibility of Add-ons applied to your site as some may be more specific to your site.<br></br>
![](/docs/assets/images/status-success-small.png) If you have any questions regarding compatibility or updating a specific add-on, contact [Digital.ai Support](https://support.digital.ai/).

:::important
You must log in as a root user to apply Teamforge 23.1 Update 1.
:::

1. Stop TeamForge.
   :::note
   Stop TeamForge on all the servers in a distributed setup.
   ```linux
   teamforge stop
   ````
2. Skip this step if your site has internet access. This step is to configure Teamforge 23.1 Update 1 installation repository on sites without Internet access.

   a. Contact the [Digital.ai Support](https://support.digital.ai/) to get the auxiliary installer package for Teamforge 23.1 Update 1 disconnected installation and save it in `/tmp`.
      * **Red Hat Enterprise Linux/CentOS 8.6 64 bit RPM package**: CTF-Disconnected-media-23.1.355-462.rhel8.x86_64.rpm
      * **Red Hat Enterprise Linux/CentOS 7.9 64 bit RPM package**: CTF-Disconnected-media-23.1.355-462.rhel7.x86_64.rpm

   b. Back up the old repo file.

      For example:

      ```linux
      mv /etc/yum.repos.d/CTF-Disconnected-media-23.1.325.repo /etc/yum.repos.d/CTF-Disconnected-media-23.1.325.repo.cn_backup
      ````

   c. Unpack the 23.1 Update 1 disconnected installation package.

      ```linux
      rpm -Uvh <package-name>
      ````

   d. Verify your yum configuration files.

      ```linux
      yum list httpd
      yum list apr
      ````

3. Configure your TeamForge installation repository. This step is to configure Teamforge 23.1 Update 1 installation repository on sites with Internet access.

   a. Remove the existing TeamForge repository package.

      ```linux
      yum erase collabnet-teamforge-repo-23.1-0.noarch
      ````

   b. Contact the [Digital.ai Support](https://support.digital.ai/) and download the Teamforge 23.1 Update 1 installation repository package to `/tmp`.

   c. Install the Teamforge 23.1 Update 1 installation repository package.

      ```linux
      yum install -y /tmp/collabnet-teamforge-repo-23.1-0.noarch.rpm
      ````

   d. Refresh your repository cache.

      ```linux
      yum clean all
      ````

4. Install the Teamforge 23.1 Update 1.

   ```linux
   yum install teamforge
   ````

   The above command installs all the TeamForge updates available in the CollabNet yum repository for Teamforge 23.1.

5. Check the `/opt/collabnet/teamforge/var/scm/gerrit/gitroot` directory. If it is empty, remove it manually.

   ```linux
   rm -rf gitroot
   ````

6. Deploy services.

   ```linux
   teamforge provision
   ````

7. :::important
   Do this if and only if you are upgrading from TeamForge 17.1 (or earlier) to 23.1 on a new hardware.
   :::

   Update file permissions on your site's data.

   ```linux 
   teamforge apply-permissions
   ````

   :::note
   This process can take a long time on sites with a lot of data.

8. Restart TeamForge.

   ```linux
   teamforge restart
   ````
