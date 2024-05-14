---
Summary: When you purchase a TeamForge license, you get the right to assign licenses
  to a specified number of users.
category: ''
id: teamforgelicense
keywords:
- license
- license types
- ALM
- SCM
- Version Control
- Collaboration
- Trackers
- license key
- license info
lastUpdatedAt: Jun 11, 2021
product: teamforge
tags:
- ctf_21.1
- ctf_20.0
- getting_started
- site_admin_tasks
- license
- ctf_18.2
title: TeamForge License
---

## TeamForge License Framework {#licenseframework}
The TeamForge license framework has been revamped in TeamForge 21.1. 

TeamForge's license model consists of the following license types:
* ALM
* ALM Essentials
* SCM

Here's the list of changes to the TeamForge license model.

* The `Version Control`, `Collaboration`, and `Trackers` license types are no longer available in TeamForge 21.1 and later
* The `ALM` and `Baselines` license types are bundled together and are being offered as the new `ALM` license

When you migrate from TeamForge 21.0 or earlier to TeamForge 21.1 or later:
* Existing ALM licenses are migrated to the new ALM license (with Baselines)
* All other license types such as Baselines, Version Control, Tracker, and Collaboration are deleted

<!-- % include callout.html type="primary" content=" -->
While TeamForge supports more selective tool options with these new license changes, there's no impact on customers, both new and existing, that require all the tools that TeamForge supports.

In addition to the tools offering, the Reporting framework is also controlled by the licenses you have. Meaning, you can view and generate reports based on the license types assigned to you. For example, you must have SCM license to view or generate SCM activity reports. Check with your Digital.ai representative if you aren't sure how many licenses or what kind of licenses you want/have.

The following table lists the license types and the tools that go with them (refer to the `Tools Availability Matrix` section at the end of this topic for a complete list of tools and functions).

| Features/Tools                                          | SCM                 | ALM Essentials      | ALM                 |
|---------------------------------------------------------|---------------------|---------------------|---------------------|
| Source Code Management (SVN/GIT)                        | ![](/docs/assets/images/status-success-small.png) | ![](/docs/assets/images/status-success-small.png) | ![](/docs/assets/images/status-success-small.png) |
| File Releases                                          | ![](/docs/assets/images/status-success-small.png) | ![](/docs/assets/images/status-success-small.png) | ![](/docs/assets/images/status-success-small.png) |
| Discussions                                            | ![](/docs/assets/images/status-success-small.png) | ![](/docs/assets/images/status-success-small.png) | ![](/docs/assets/images/status-success-small.png) |
| Integrations (Jira, Jenkins, MicroFocus ALM, Nexus, ReviewBoard, TestLink) | ![](/docs/assets/images/status-success-small.png) | ![](/docs/assets/images/status-success-small.png) | ![](/docs/assets/images/status-success-small.png) |
| CollabNet Desktops                                     | ![](/docs/assets/images/status-success-small.png) | ![](/docs/assets/images/status-success-small.png) | ![](/docs/assets/images/status-success-small.png) |
| LDAP/SAML support                                      | ![](/docs/assets/images/status-success-small.png) | ![](/docs/assets/images/status-success-small.png) | ![](/docs/assets/images/status-success-small.png) |
| Trackers                                               |                     | ![](/docs/assets/images/status-success-small.png) | ![](/docs/assets/images/status-success-small.png) |
| Documents                                              |                     | ![](/docs/assets/images/status-success-small.png) | ![](/docs/assets/images/status-success-small.png) |
| Wiki                                                   |                     |                     | ![](/docs/assets/images/status-success-small.png) |
| Baselines                                              |                     |                     | ![](/docs/assets/images/status-success-small.png) |
| Reports                                                | SCM Commits report  | Activity, Agile, and Table reports | Distribution and Trend reports |
| 24x7 Support                                           | Premium             | Premium             | Premium             |


  <!-- <tr>
    <td>   <br>Add-Ons (Authentication Manager, Undelete tool, Forklift)   </td>
    <td>   <br>   </td>
    <td>   <br>   </td>
    <td>   <br>![](/docs/assets/images/status-success-small.png)   </td>
  </tr> -->

* Your license key contains a few important numbers:
  * The number of users eligible to use specific licenses such as `ALM`, `ALM Essentials`, and `SCM`.
  * The IP address of the machine that your site runs on.

    For example, if your organization has 80 users who will use only the source code management features, 100 users who will use TeamForge ALM Essentials features, and 100 users who need the TeamForge ALM features, your license key string may look like this:
    ````
    ALM_ESSENTIALS=100:ALM_PRO=100:SCM=80:12312023:supervillaininc:144.16.116.25.:302D02150080D7853DB3E5C6F67EABC65BD3AC17D4D35CB3Z00214141D70455B18583BF0A5000CA56B34817ADF8DBFI32353A6E657492617369633A38372E3139342E3136102E31322E
    ````
* Your license key only works for the IP address (or range of addresses) of the hardware that your Digital.ai TeamForge is running on, as specified in your order form. If your site uses a separate server for its database or source code repositories, make sure your license key reflects the IP addresses of all the necessary servers. If any of these addresses change, ask your Digital.ai representative to generate a new key.
* When you create a user account, you can assign the user with available licenses.
* You can purchase a TeamForge license for as many years as you want. The validity period is encoded into your license when it is generated by your Digital.ai representative.
* How many users your site can support depends on the type of license. Check with your Digital.ai representative if you aren't sure what kind of licenses you have.
* Your license key is attached to the IP address of the server where your site runs. You can get a license key for a single IP address or for a range of IP addresses.
* Your service year starts the first time you log into your site, or the first time you create or edit any item on your site, such as a tracker artifact or a document. Whichever of these events comes first starts the clock.
* The expiration date of your license is shown on the License Info page. (Go to **My Workspace > Admin** and select **Projects > License Info**).
* When your service year expires, you can still see the project data on your site, but you cannot make any changes to it. However, you can still carry out some critical maintenance functions for your site:
  * Enter a new license key.
  * Disable or delete users.
  * Change user passwords.
  * Get forgotten user passwords.
* Except <a href="#" data-toggle="tooltip" data-original-title="Deleted users are removed from all projects. All assigned items are removed from the user. Deleted users do not count against your TeamForge license count">deleted users</a>, all  other users in TeamForge such as <a href="#" data-toggle="tooltip" data-original-title="Active users have full use of TeamForge, subject to RBAC permissions">active users</a>, <a href="#" data-toggle="tooltip" data-original-title="Users who are granted access to the requested account, but have not yet confirmed their email addresses">pending users</a>, <a href="#" data-toggle="tooltip" data-original-title="Users who cannot log into TeamForge and do not receive email notifications, but still remain the members of projects and selection lists">disabled users</a>, and <a href="#" data-toggle="tooltip" data-original-title="Expired users cannot log into TeamForge, but can use the forgot password link to create a new password">expired users</a> continue to consume licenses.

### Tools Availability Matrix {#toolsavailabilitymatrix}

| Tools                                     | SCM                                          | ALM Essentials                              | ALM                                         |
|-------------------------------------------|----------------------------------------------|---------------------------------------------|---------------------------------------------|
| File Releases                             | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Access Controls                           | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Project Work Spaces                       | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| User Management                           | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Flexible Process and Toolchain Templates  | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Reusable Dashboards                       | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Categories and Groups                     | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Cross Project Visibility                  | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Cross Project Search                      | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Site-wide Administration                  | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Custom Branding and Custom Integrations   | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Security Architecture                     | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Onsite and Hosted Provisioning            | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Git/SVN Repository Management and Replication | ![Success](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Code Review                               | ![Success](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Build Automation                          | ![Success](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Binary Repository Management              | ![Success](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Wiki and Discussion Forums                | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| SVN Auto Updates                          | ![Success](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| SVN Repository Backup and Monitoring      | ![Success](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Agile Task and Planning Boards            | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Trackers                                  | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Test Management                           | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Cross Project Reporting and Dashboards    | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Document Management                       | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Baselines                                 | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Reports                                   | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) |
| Activity Reports                          | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) |
| SCM Commits (Datamart)                    | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Artifact Closed (Datamart)                | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Artifact Created (Datamart)               | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Agile Reports                             | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) |
| Burn Down Chart (Datamart)                | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Committed vs Done vs Missed (Datamart)    | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Cumulative Flowchart (Datamart)           | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Release Burn Up Chart (Datamart)          | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Table Reports                             | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) |
| Tracker (Operational DB)                  | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Distribution Reports                      | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) |
| Artifact Distribution Chart (Multiple Trackers) (Datamart) | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Artifact Distribution Chart (SingleTracker) (Datamart) | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Average Size by Area/Group (Operational DB) | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Status Distribution by Area/Group (Operational DB) | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Total Size by Area/Group (Operational DB) | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Total Size by Tracker Type (Operational DB) | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Trend Reports                             | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) |
| Artifact Open/Close (Datamart)            | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |
| Average Age Report (Datamart)             | ![Empty](/docs/assets/images/status-success-small.png) | ![Empty](/docs/assets/images/status-success-small.png) | ![Success](/docs/assets/images/status-success-small.png) |

## Teamforge Application Lifecycle Management Edition Feature Matrix

Digital.ai TeamForge is an end-to-end enterprise application development, collaboration, and delivery platform that ensures governance, compliance, and code security standards are maintained, whether teams are using waterfall, agile, or hybrid software development methodologies. Digital.ai TeamForge helps application development teams gain visibility into their processes and workflows so they can find bottlenecks and areas for automation, helping them create higher quality applications at speed.

![](/docs/assets/images/alm-feature-matrix-1.png)
![](/docs/assets/images/alm-feature-matrix-2.png)

For additional information about Support go to https://digital.ai/support-and-maintenance.

Additionally, hosted TeamForge customers have access to SSO, get dedicated instance and storage volumes, offsite data replication, encryption at rest, IP Whitelisting, 14-day data retention, and 24/7 system/storage/performance/network monitoring.

## Supply Your TeamForge License Key via Teamforge User Interface {#supplylicenseui}

Your license key enables you to use Digital.ai TeamForge for the period of your contract.

Your license key will only work for the IP address of the machine that your Digital.ai TeamForge is running on, as specified in your order form.

<!-- % include callout.html type="primary" content=" -->
These steps are for installing your license key via the web interface. If you prefer, you can install it as a text file instead. See [Supply your TeamForge License Key as a Text File](./teamforgelicense#supplylicensetextfile).

1. Locate the confirmation email you received from your Digital.ai representative when you purchased your contract.
2. Log into your site as a Site Administrator.
   :::note 
   A Site Administrator is different from the root user on the server that runs your TeamForge site.
   :::
3. Click **Admin > License Info**.
   
   If you have entered a license before, the IP address and current licensed number of users on your site are listed on the License Key page. Verify that the IP address is the same as the one you entered in your order form.
4. Click **Enter License Key**.
5. Copy your new license key from the confirmation email and paste it into the Enter License Key field. 

   A license key string looks like this:
   ````
   ALM_ESSENTIALS=100:ALM_PRO=100:SCM=80:12312023:supervillaininc:144.16.116.25.:302D02150080D7853DB3E5C6F67EABC65BD3AC17D4D35CB3Z00214141D70455B18583BF0A5000CA56B34817ADF8DBFI32353A6E657492617369633A38372E3139342E3136102E31322E
   ````

   :::important 
   Save this license key in case you need to reinstall Digital.ai TeamForge.
   :::
6. Click **Save**.
7. Verify that the new value for Licensed Number of Users matches the total number of licensed users in your contract.

## Supply Your TeamForge License Key as a Text File {#supplylicensetextfile}
Your license key enables you to use Digital.ai TeamForge for the period of your contract.

Your license key will only work for the IP address of the machine that your Digital.ai TeamForge is running on.

:::warning
If you are upgrading from a site with a limited number of users to an enterprise-scale site, you must install your license key before starting Digital.ai TeamForge. Otherwise, your site could be rendered inoperable.
:::

1. Locate the confirmation email you received from your Digital.ai representative when you purchased your contract.
2. Create a text file and copy-paste your license key from the confirmation email into it.
   
   For example, if your organization has 80 users who will use only the source code management features, 100 users who will use TeamForge ALM Essentials features, and 100 users who need the TeamForge ALM features, your license key string may look like this:
   ````
   ALM_ESSENTIALS=100:ALM_PRO=100:SCM=80:12312023:supervillaininc:144.16.116.25.:302D02150080D7853DB3E5C6F67EABC65BD3AC17D4D35CB3Z00214141D70455B18583BF0A5000CA56B34817ADF8DBFI32353A6E657492617369633A38372E3139342E3136102E31322E
   ````
   :::note
   Save this license key in case you need to reinstall Digital.ai TeamForge.
   :::
3. Save the text file as `/opt/collabnet/teamforge/var/etc/sflicense.txt`
   :::tip 
   Save your license key somewhere remote too, in case you need to reinstall Digital.ai TeamForge and your `sflicense.txt` file is not accessible.
   :::
4. Make the license file usable by the application.
   ```shell
   chmod 0664 /opt/collabnet/teamforge/var/etc/sflicense.txt
   chown <APP_USER>:<APP_GROUP> /opt/collabnet/teamforge/var/etc/sflicense.txt
   ````
   Change the values of `<APP_USER>` and `<APP_GROUP>` with the values of `APP_USER` and `APP_GROUP` tokens respectively from the `/opt/collabnet/teamforge/runtime/conf/runtime-options.conf` file.


## View License Information
You can obtain a summary of the license information from the **License Info** page.

The **License Info** page provides you with all the basic information about the licenses you purchased for your TeamForge site. This includes details such as the number of TeamForge licenses you had obtained, how many you have used, expiration date and so on.

1. Go to **My Workspace > Admin**.
2. Select **LICENSE INFO** from the **Projects** menu.
