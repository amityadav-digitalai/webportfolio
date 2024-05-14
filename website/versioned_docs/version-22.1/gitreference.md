---
Summary: This topic discusses the mappings between TeamForge and Gerrit, Gerrit access
  rights, directory structure, connectivity, logs and configuration properties, and
  differences compared to vanilla Gerrit.
category: ''
id: gitreference
keywords:
- git
- gerrit
lastUpdatedAt: Feb 11, 2020
product: teamforge
tags:
- git_gerrit
- integration
- scm
- code_review
- role_based_access_control
title: TeamForge-Git Integration Reference
---

## Git Integration Blog Posts

You can read the [CollabNet blog posts on Git integration](http://blogs.collab.net/git) and follow the latest developments in the Digital.ai TeamForge-Git integration space.

Here's a list of few useful blog posts:
* [Bulletproof, Military Grade Security – Visualizing the Access Control Mechanisms of Your SCM Solution](http://blogs.collab.net/subversion/visualizing-teamforges-source-code-access-control-mechanism#.VRz9aPmUdPM)
* [You shall not pass – Control your code quality gates with a wizard – Part I](http://blogs.collab.net/teamforge/you-shall-not-pass-control-your-code-quality-gates-with-a-wizard-part-i)
* [You shall not pass – Control your code quality gates with a wizard – Part II](http://blogs.collab.net/teamforge/you-shall-not-pass-control-your-code-quality-gates-with-a-wizard-part-ii)
* [Migrating from Subversion to Git: What Your PCI-DSS Guy Will Not Tell You, Part I](http://blogs.collab.net/subversion/migrating-from-subversion-to-git-what-your-pci-dss-guy-will-not-tell-you)
* [Migrating from Subversion to Git: What Your PCI-DSS Guy Will Not Tell You, Part II](http://blogs.collab.net/subversion/unexpected-pitfalls-of-cicd-automation-what-your-pci-dss-guy-will-not-tell-you-part-2)
* [Seamlessly navigate between TeamForge projects and related Gerrit reviews](http://blogs.collab.net/teamforge/top-3-git-features-coming-with-teamforge-8-0#seamless)
* [TeamForge Git /Gerrit Integration with Jenkins CI](http://blogs.collab.net/teamforge/teamforge-git-gerrit-integration-with-jenkins-ci)
* [CollabNet Gerrit Notifications – For all who miss the good ol’ git push notifications](http://blogs.collab.net/teamforge/collabnet-gerrit-notifications-for-all-who-miss-the-good-ol-git-push-notifications)
* [TeamForge Just Got Even Better with Git Pull Request Feature!](http://blogs.collab.net/news/teamforge-just-got-even-better-with-git-pull-request-feature)
* [Gerrit Rebranding – The missing Guide to a customized Look & Feel](http://blogs.collab.net/teamforge/gerrit-rebranding-what-if-collabnets-theme-was-orange-yellowish)
* [Easy guide to mappings between Gerrit Access Control and TeamForge Source Code Permissions](http://blogs.collab.net/teamforge/easy-guide-to-mappings-between-gerrit-access-control-and-teamforge-source-code-permissions)


## Mappings Between TeamForge and Gerrit {#tfgerritmapping}
These tables shows how objects and relationships are mapped between TeamForge and Gerrit.

| TeamForge Object | Gerrit Object |
| ---------------- | ------------- |
| TeamForge project | Project |
| SCM repository in TeamForge project (containing project roles with SCM permissions) | Project |
| Project Role | Group |
| User Group | Group |
| User | User |
| Site-wide role (TeamForge 8.0 and later) | Group |

| TeamForge Relationship                         | Gerrit Relationship |
| ---------------------------------------------- | ------------------- |
| Git repository is part of a TeamForge project. | Gerrit project corresponding to the Git repository inherits from the Gerrit project corresponding to the TeamForge project (`TeamForge-Projects/<TeamForge project id>`). |
| TeamForge project \<child> has a parent TeamForge project \<parent>.  | Gerrit project \<child> inherits from the Gerrit project \<parent>. |
| TeamForge project top is a top-level project.	| Gerrit project \<top> inherits from Gerrit project. TeamForge-Projects which in turn inherits from All-Projects. |
| User has a TeamForge Project Role. | User is part of the Group which corresponds to the TeamForge Project Role. |
| User is part of a User Group that is assigned a Project Role. | User is part of a Group (which corresponds to a TeamForge Project Role). |
| User is part of a User Group. | User is part of a Group (which corresponds to a TeamForge User Group). |
| Project Role is assigned an SCM permission (such as Admin, Delete and View, View and Commit, View Only, None). | Corresponding group is assigned Gerrit access rights matching the assigned TeamForge SCM permissions. Those access rights are determined by the code review policy of the corresponding TeamForge repository. |
| Site-wide role is assigned an SCM permission. (TeamForge 8.0 and later only). | Corresponding Gerrit groups are assigned Gerrit access rights matching the assigned TeamForge SCM permissions. Those access rights are determined by the code review policy of the TeamForge repository and hence may vary between repositories. |
| Guests, All Site Users, All Logged in Users, All Non-Restricted Users or Project Members have SCM permissions associated using TeamForge’s Default Access Permissions (TeamForge 8.0 and later only). | Corresponding Gerrit groups are assigned Gerrit access rights matching the assigned TeamForge SCM permissions. Those access rights are determined by the code review policy of the TeamForge repository and hence may vary between repositories. |
| User is a site admin in TeamForge. | User is part of Gerrit groups.<br></br>TeamForge: Site Admins.<br></br>TeamForge: Site-wide Project Admin Access.<br></br>Private Project - Site-wide Admin Access.<br></br>Public Project - Site-wide Admin Access.<br></br>Gated Project - Site-wide Admin Access.<br></br>Site admins have OWN and READ permissions for all Gerrit projects and the rights granted by the SCM Admin permission (depends on the code review policy of the Git repository in question). |
| User is a project admin in TeamForge. | User is part of Gerrit group.<br></br>TeamForge: Project Admin for \<TF project id>, which has OWN and READ permissions for all Git repositories of the corresponding TeamForge project. |
| User is non restricted in TeamForge (TeamForge 8.0 and later only). | User belongs to Gerrit group.<br></br>TeamForge: Non-restricted Users. |
| User is a member of a TeamForge project (TeamForge 8.0 and later only). | User belongs to Gerrit group.<br></br>TeamForge: Direct Project Member of \<TF project id>.  |
| User is member of a user group associated to a TeamForge project role (TeamForge 8.0 and later only). | User belongs to Gerrit group.<br></br>TeamForge: Project Member of \<TF project id>. |
| User has a site-wide role that has SCM permissions or a site-wide project admin permissions (TeamForge 8.0 and later only). | User is part of Gerrit group.<br></br>TeamForge : Site-wide Role: \<name of TeamForge Site-wide role><br></br>and<br></br>- depending on the prevent inheritance to private projects flag, SCM permissions and project admin permissions -<br></br>TeamForge - Site-wide Project Admin Access<br></br>Public Project - Site-wide Admin Access<br></br>Gated Project - Site-wide Admin Access<br></br>Private Project - Site-wide Admin Access<br></br>Public Project - Site-wide Delete Access<br></br>Gated Project - Site-wide Delete Access<br></br>Private Project - Site-wide Delete Access<br></br>Public Project - Site-wide Commit Access<br></br>Gated Project - Site-wide Commit Access<br></br>Private Project - Site-wide Commit Access<br></br>Public Project - Site-wide View Access<br></br>Gated Project - Site-wide View Access<br></br>Private Project - Site-wide View Access |
| User has a TeamForge account. | User belongs to the Gerrit group.<br></br>Registered Users. |
| User is not logged into TeamForge yet. | User belongs to the Gerrit group.<br></br>Anonymous Users.<br></br>(as all logged in users do too). |

## Access Rights in Gerrit

The Git integration maps Gerrit access rights to TeamForge Role Based Access Control (RBAC) permissions.

The mappings file `TeamForgeGerritMappings.xml` is located in the `refs/meta/config` branch of `TF-Projects` project. 

#### How to view/access the `TeamForgeGerritMappings.xml` file?

1. Log on to TeamForge as a Site Administrator.

2. Select **My Workspace > More > Git \<hostname\>**.

   :::note
`hostname` refers to the server where your Git integration is hosted.
:::

   ![](/docs/assets/images/git-host.png)

3. Select **Projects > List**.

   ![](/docs/assets/images/git-projects-list.png)

4. Select **TF-Projects** from the list of projects.

   ![](/docs/assets/images/git-tf-projects.png)

5. Select the **Branches** tab.

   ![](/docs/assets/images/git-project-branch.png)

6. Click **Browse** against the `refs/meta/config` branch name.

   ![](/docs/assets/images/git-browse-branch.png)

   The `TeamForgeGerritMappings.xml` file can be found here.

   ![](/docs/assets/images/teamforgegerritmappings-file.png)

The following table shows how TeamForge RBAC permissions are now mapped to Gerrit access rights by default.

<table width="100%">
<tr>
<th>Code Review Policy</th>
<th>TeamForge Permission Cluster</th>
<th>Gerrit Access Right</th>
</tr>
<tr>
<td rowspan="24">No Review</td>
<td>SCM None</td>
<td>-</td>
</tr>
<tr>
<td>SCM View Only</td>
<td>Read</td>
</tr>
<tr>
<td rowspan="5">SCM Commit/View</td>
<td>Read</td>
</tr>
<tr>
<td>Push</td>
</tr>
<tr>
<td>Create Reference</td>
</tr>
<tr>
<td>Push Annotated Tag (refs/tags/*)</td>
</tr>
<tr>
<td>Push Signed Tag (refs/tags/*)</td>
</tr>
<tr>
<td rowspan="7">SCM Delete/View</td>
<td>Read</td>
</tr>
<tr>
<td>Push (forcePush)</td>
</tr>
<tr>
<td>Create Reference</td>
</tr>
<tr>
<td>Forge Author Identity</td>
</tr>
<tr>
<td>Forge Committer Identity</td>
</tr>
<tr>
<td>Push Annotated Tag (refs/tags/*)</td>
</tr>
<tr>
<td>Push Signed Tag (refs/tags/*)</td>
</tr>
<tr>
<td rowspan="10">SCM Admin</td>
<td>Read</td>
</tr>
<tr>
<td>Push (forcePush)</td>
</tr>
<tr>
<td>Create Reference</td>
</tr>
<tr>
<td>Forge Author Identity</td>
</tr>
<tr>
<td>Forge Committer Identity</td>
</tr>
<tr>
<td>Forge Server Identity</td>
</tr>
<tr>
<td>Owner</td>
</tr>
<tr>
<td>Abandon</td>
</tr>
<tr>
<td>Push Annotated Tag (refs/tags/*)</td>
</tr>
<tr>
<td>Push Signed Tag (refs/tags/*)</td>
</tr>
<tr>
<td rowspan="52">Optional Review</td>
<td>SCM None</td>
<td>-</td>
</tr>
<tr>
<td rowspan="6">SCM View Only</td>
<td>Read</td>
</tr>
<tr>
<td>View Drafts</td>
</tr>
<tr>
<td>Publish Drafts</td>
</tr>
<tr>
<td>Code Review  -1,1</td>
</tr>
<tr>
<td>Push (refs/for/refs/*)</td>
</tr>
<tr>
<td>Rebase(refs/for/refs/*)</td>
</tr>
<tr>
<td rowspan="11">SCM Commit/View</td>
<td>Read</td>
</tr>
<tr>
<td>View Drafts</td>
</tr>
<tr>
<td>Publish Drafts</td>
</tr>
<tr>
<td>Code Review  -2,2</td>
</tr>
<tr>
<td>Verify -1,1</td>
</tr>
<tr>
<td>Submit</td>
</tr>
<tr>
<td>Push</td>
</tr>
<tr>
<td>Create Reference</td>
</tr>
<tr>
<td>Rebase (refs/for/refs/*)</td>
</tr>
<tr>
<td>Push Annotated  Tag(refs/tags/*)</td>
</tr>
<tr>
<td>Push Signed Tag (refs/tags/*)</td>
</tr>
<tr>
<td rowspan="15">SCM Delete/View</td>
<td>Read</td>
</tr>
<tr>
<td>View Drafts</td>
</tr>
<tr>
<td>Publish Drafts</td>
</tr>
<tr>
<td>Code Review  -2,2</td>
</tr>
<tr>
<td>Verify  -1,1</td>
</tr>
<tr>
<td>Submit</td>
</tr>
<tr>
<td>Push (forcePush)</td>
</tr>
<tr>
<td>Create Reference</td>
</tr>
<tr>
<td>Rebase (refs/for/refs/*)</td>
</tr>
<tr>
<td>Create References</td>
</tr>
<tr>
<td>Push Signed Tag (refs/tags/*)</td>
</tr>
<tr>
<td>Push Annotated Tag (refs/tags/*)</td>
</tr>
<tr>
<td>Push Merges(refs/for/refs/*)</td>
</tr>
<tr>
<td>Forge Author Identity</td>
</tr>
<tr>
<td>Forge Committer Identity</td>
</tr>
<tr>
<td rowspan="19">SCM Admin</td>
<td>Read</td>
</tr>
<tr>
<td>View Drafts</td>
</tr>
<tr>
<td>Publish Drafts</td>
</tr>
<tr>
<td>Delete Drafts</td>
</tr>
<tr>
<td>Code Review  -2,2</td>
</tr>
<tr>
<td>Verify  -1,1</td>
</tr>
<tr>
<td>Submit</td>
</tr>
<tr>
<td>Push (forcePush)</td>
</tr>
<tr>
<td>Create Reference</td>
</tr>
<tr>
<td>Owner</td>
</tr>
<tr>
<td>Abandon</td>
</tr>
<tr>
<td>Rebase (refs/for/refs/*)</td>
</tr>
<tr>
<td>Create References</td>
</tr>
<tr>
<td>Push Signed Tag (refs/tags/*)</td>
</tr>
<tr>
<td>Push Annotated Tag (refs/tags/*)</td>
</tr>
<tr>
<td>Push Merges(refs/for/refs/*)</td>
</tr>
<tr>
<td>Forge Author Identity</td>
</tr>
<tr>
<td>Forge Committer Identity</td>
</tr>
<tr>
<td>Forge Server Identity</td>
</tr>
<tr>
<td rowspan="42">Mandatory Review</td>
<td>SCM None</td>
<td>-</td>
</tr>
<tr>
<td rowspan="6">SCM View Only</td>
<td>Read</td>
</tr>
<tr>
<td>View Drafts</td>
</tr>
<tr>
<td>Publish Drafts</td>
</tr>
<tr>
<td>Code Review  -2,2</td>
</tr>
<tr>
<td>Push (refs/for/refs/*)</td>
</tr>
<tr>
<td>Rebase (refs/for/refs/*)</td>
</tr>
<tr>
<td rowspan="8">SCM Commit/View</td>
<td>Read</td>
</tr>
<tr>
<td>View Drafts</td>
</tr>
<tr>
<td>Publish Drafts</td>
</tr>
<tr>
<td>Code Review  -2,2</td>
</tr>
<tr>
<td>Verify -1,1</td>
</tr>
<tr>
<td>Submit</td>
</tr>
<tr>
<td>Push(refs/for/refs/*)</td>
</tr>
<tr>
<td>Rebase (refs/for/refs/*)</td>
</tr>
<tr>
<td rowspan="8">SCM Delete/View</td>
<td>Read</td>
</tr>
<tr>
<td>View Drafts</td>
</tr>
<tr>
<td>Publish Drafts</td>
</tr>
<tr>
<td>Code Review  -2,2</td>
</tr>
<tr>
<td>Verify -1,1</td>
</tr>
<tr>
<td>Submit</td>
</tr>
<tr>
<td>Push(refs/for/refs/*)</td>
</tr>
<tr>
<td>Rebase (refs/for/refs/*)</td>
</tr>
<tr>
<td rowspan="19">SCM Admin</td>
<td>Read</td>
</tr>
<tr>
<td>View Drafts</td>
</tr>
<tr>
<td>Publish Drafts</td>
</tr>
<tr>
<td>Delete Drafts</td>
</tr>
<tr>
<td>Code Review  -2,2</td>
</tr>
<tr>
<td>Verify  -1,1</td>
</tr>
<tr>
<td>Submit</td>
</tr>
<tr>
<td>Push (forcePush)</td>
</tr>
<tr>
<td>Create Reference</td>
</tr>
<tr>
<td>Owner</td>
</tr>
<tr>
<td>Abandon</td>
</tr>
<tr>
<td>Rebase (refs/for/refs/*)</td>
</tr>
<tr>
<td>Push Annotated  Tag(refs/tags/*)</td>
</tr>
<tr>
<td>Push Signed Tag (refs/tags/*)</td>
</tr>
<tr>
<td>Create References</td>
</tr>
<tr>
<td>Push Merges(refs/for/refs/*)</td>
</tr>
<tr>
<td>Forge Author Identity</td>
</tr>
<tr>
<td>Forge Committer Identity</td>
</tr>
<tr>
<td>Forge Server Identity</td>
</tr>
</table>

To make changes to the mappings, modify the `TeamForgeGerritMappings.xml` file in the `refs/meta/config` branch of `TF-Projects` project on the server where your Git integration is hosted. For instance, if you want to add a user-defined category to your repository, first you need to add the user-defined category to the `TeamForgeGerritMappings.xml` file. For instructions, see [Create a User-defined Repository Category][codereviewpolicy.html#adduserdefinedrepocat]. 

:::note
Make sure that the resulting XML structure complies with this schema: https://forge.collab.net/gerrit/static/TeamForgeGerritMappings-8.0.0.xsd.
:::


## Gerrit Configuration Options
Gerrit provides many configuration options. In addition, CollabNet Gerrit plugins also have configuration options.

For more information on Gerrit's configuration options, see [Gerrit Code Review - Configuration](https://gerrit-documentation.storage.googleapis.com/Documentation/2.10/config-gerrit.html). 

In addition, see [Gerrit Performance Cheat Sheet](https://docs.collab.net/teamforge203/pdf/Gerrit-Performance-Tuning-Cheat-Sheet.pdf) to know more about tuning Gerrit for optimal performance.

CollabNet Gerrit plugins have these configuration options:

### Section.teamforge

| Options                                   | Description                                                                                                                                                                                  |
|-------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `teamforge.cache-path`                   | Location where Gerrit and CollabNet Gerrit plugin store caches. By default, this is at `/opt/collabnet/gerrit/cache`. We advise that it not be changed.                                      |
| `teamforge.cache-ttl`                    | Time-to-live for Gerrit caches in seconds. The default value is 300.                                                                                                                        |
| `teamforge.apiPort`                      | Port over which TeamForge communicates with the Git integration. The default value is 9081.                                                                                                 |
| `teamforge.refreshTimeOut`               | Interval in seconds after which the Git integration synchronizes with TeamForge. The default value is 3600.                                                                                  |
| `teamforge.jumboPushThreshold`           | The number of commits in one Git push beyond which the Git integration creates only a single commit object in TeamForge. The default value is 30.                                            |
| `teamforge.externalSystemId`             | ID of the TeamForge external integration system. The value of this property is set by the post-installation script when the Git integration is first installed.                             |
| `teamforge.url`                          | Host URL of the TeamForge site with which Git is integrated. The value of this property is set by the post-installation script when the Git integration is first installed.             |
| `teamforge.allowPushIfTeamForgeConnectionIsDown` | TeamForge commit objects are validated prior to creation. When the value of this property is `false` and connection to TeamForge is down, validation fails. When the value of this property is `true`, validation and creation of commit objects are postponed until the connection to TeamForge is restored. The default value is `false`. |
| `teamforge.parallelRemoteCallLimit`      | TeamForge is able to handle a certain number of parallel connections. This parameter was introduced in order to avoid TeamForge "is out of service" issues. The default value is 9.         |
| `teamforge.maxRemoteCallRetry`           | This parameter was introduced in order to specify the number of retry attempts for calls to TeamForge before connection failure is returned. The default value is 3.                         |
| `teamforge.credentialsCache`             | When the value of this property is set to true, users' credentials are cached for the `teamforge.credentialsCacheTimeOut` amount of time and used to authorize actions in case of TeamForge connection outage. The default value is `true`. |
| `teamforge.credentialsCacheTimeOut`      | Interval (in Seconds) after which the credentials cache expires. The default value is 3600.                                                                                                 |
| `teamforge.reconnectInterval`            | When the "TeamForge connection is down" state is detected, and the number of seconds exceeds the value of this parameter, attempts to restore connection are performed periodically. The default value is 30. |
| `teamforge.repositoryroot`               | Location where all Git repositories are stored physically. The default value is set to the value of the Gerrit configuration property `gerrit.basePath`, which is set to `/gitroot` by default. |
| `teamforge.maxFilesListedInTFCommitObject` | Restricts the number of entries in the SCM files list view for a particular TeamForge commit object. This is especially useful for repository initial commit objects as they could contain a thousand entries that get processed by TeamForge. The default value is 250. |
| `teamforge.notificationMaxSize`          | Number of bytes in notification message that will be sent out by git-multimail--part of the [notification plugin](http://blogs.collab.net/teamforge/collabnet-gerrit-notifications-for-all-who-miss-the-good-ol-git-push-notifications). If message is larger than specified limit, it will be truncated. The default value is 25000. |
| `teamforge.notificationMaxPythonExecutors` | Number of Python processes used to create [git-multimail notification](http://blogs.collab.net/teamforge/collabnet-gerrit-notifications-for-all-who-miss-the-good-ol-git-push-notifications). Each process will create one notification at a time. The default value is 2. |
| `teamforge.syncTeamForgeProjectHierarchy` | Turns the [Project Hierarchy](http://blogs.collab.net/teamforge/introducing-teamforge-project-scope-into-gerrit-welcome-to-cross-repo-dashboards-and-advanced-rbac) feature on. New Gerrit installs will have this value set to true, existing ones to false. |
| `teamforge.supportSiteWideRoles`         | Enables TeamForgesite-wide role support. New Gerrit installs will have this value set to `true`, existing ones to `false`. This feature requires at least TeamForge 8.0 (will be ignored before). |
| `teamforge.supportDefaultAccessPermissions` | Enables TeamForge Default Access Permission support. New Gerrit installs will have this value set to `true`, existing ones to `false`. This feature requires at least TeamForge 8.0 (will be ignored before). |
| `teamforge.commitProcessingTimeOut`      | Maximum time allocated to process each Git commit to create a TeamForge commit object. If processing takes longer, processing of this commit is canceled, no corresponding TeamForge commit object will be created and the next commit will be processed. The default time is 15 min. |
| `teamforge.createTFProjectLinkedApps`    | If enabled creates Project linked application with target to Gerrit Dashboard for that TeamForge project given project contains at least one Git repository. This feature requires at least TeamForge 8.0 (will be ignored before). The default value is true. |
| `teamforge.teamForgeMenuHeader`          | Specifies the name of the menu that contains the links back to TeamForge user's Workspace and repositories list for a given TeamForge project. The default value is TeamForge.                |
| `teamforge.ensureStreamEventsForRegisteredUsers` | If set to true, the `RegisteredUsers` group will have the StreamEvents global capability assigned during Gerrit startup. The default value is true.                                                    |
| `teamforge.ensureAdminRightsForSiteAdmins` | If set to `true`, the `TF: Site Admins` group will have `Administrate Server` global capability assigned during Gerrit startup. The default value is `true`.                                  |


### Replication Configuration

This feature requires TeamForge 8.1 or later. These options are ignored if you have TeamForge 8.0 or earlier.

<table width="100%">
<tr>
<th>Options</th>
<th>Description</th>
</tr>
<tr>
<td>teamforge.replicationMode</td>
<td>Sets the server mode (replication master or slave) of the Git integration server. This property is set by the TeamForge installer depending on the value specified in the site-options.conf file's GERRIT_REPLICATION_MODE token. Therefore, this property should not be edited manually within the gerrit.config file. The default value set by the TeamForge installer is master.</td>
</tr>
</table>

### Replication Master Configuration

<table width="100%">
<tr>
<th>Options</th>
<th>Description</th>
</tr>
<tr>
<td>plugin.teamforge-replication.replicationDelay</td>
<td>The delay (in seconds) between a push to the source repository and the actual replication attempt to the replica server. If further push activities happen between this delay, those will be bundled into the same replication attempt, avoiding bursts of replication attempts in case of repository mass updates. The default value is 15s and should not be set below 3s.</td>
</tr>
<tr>
<td>plugin.teamforge-replication.threads</td>
<td>The number of threads that are used to push changes for each replica server. The default value is 4.</td>
</tr>
<tr>
<td>plugin.teamforge-replication.replicationRetry</td>
<td>The maximum wait time before the next replication attempt is performed (upon previous connection failure). It is increased progressively (after each failure per mirror) starting with 1m to the power of 2 and up to the parameter value. For example, if the value is 5m, replication will be reattempted (considering that connection failure still occurs) after 1m then after 2m then after 4m and then after 5m and further attempts will be performed at 5m intervals. The default is 5m.</td>
</tr>
<tr>
<td>plugin.teamforge-replication.sshConnectionTimeout</td>
<td>The timeout duration for establishing SSH connections during a replication attempt or when an SSH command is performed. This prevents the SSH queue from being blocked while waiting to connect to a mirror that is not responding. The default value is 15s.</td>
</tr>
<tr>
<td>plugin.teamforge-replication.sshCommandTimeout</td>
<td>The timeout duration for replication SSH command execution (for example, project creation, HEAD change, and so on), after which the command fails. This prevents the SSH queue from being blocked while waiting to connect to a mirror that is not responding. The default is 30s.</td>
</tr>
<tr>
<td>plugin.teamforge-replication.pushTimeout</td>
<td>The timeout duration for a replication push (push time after SSH connection is established), after which the push fails. This prevents the SSH queue from being blocked while waiting to connect to a mirror that is not responding. The default is 30s.</td>
</tr>
</table>

### Replication Mirror Configuration

<table width="100%">
<tr>
<th>Options</th>
<th>Description</th>
</tr>
<tr>
<td>plugin.teamforge-slave.replicaId</td>
<td>The replica ID of the replication slave created in TeamForge if GERRIT_REPLICATION_MODE is set as slave. This property is set automatically by Gerrit upon start up and hence should not be edited manually.</td>
</tr>
<tr>
<td>plugin.teamforge-slave.allowGroup</td>
<td>The group or groups that are allowed to push directly to the replication mirror. By default, only Administrator groups can do this.</td>
</tr>
</table>

## Log Files

From TeamForge 18.1, Gerrit's internal log rotation and compression feature is disabled as it is handled automatically by the TeamForge runtime environment.


## Appendix

* [History Protection FAQs](./FAQPages/gitgerrit-faqs)
* [History Protection Slide Deck](./pptsdocs/History_rewrite.pptx)
* [Git reflog vs History Protection](./pptsdocs/Git_reflog_vs_History%20Protect.docx)
* [Gerrit Performance Cheat Sheet](./downloads/Gerrit-Performance-Tuning-Cheat-Sheet.pdf)
