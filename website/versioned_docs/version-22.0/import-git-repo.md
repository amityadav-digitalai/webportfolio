---
Summary: External public Git repositories can now be imported into TeamForge from
  the Code Browser UI.
category: ''
id: import-git-repo
keywords:
- import git repository
- add git repository
lastUpdatedAt: Jan 25, 2020
product: teamforge
tags:
- ctf_20.0
- ctf_19.2
- project_admin_tasks
- project_member_tasks
- source_code
- git_gerrit
- scm
title: Import External Git Repositories into TeamForge from the Code Browser UI
---


The new repository import feature lets you import an external, public Git repository into TeamForge using the Code Browser UI. 

:::note
This functionality was already available outside the UI, with CLI-based import (see [How can I import an existing Git repository into Gerrit?](./FAQPages/gitgerrit-faqs#howtoimportgitrepo)).
:::

To import an external Git repository into TeamForge:

1. Select **Source Code** from the **Project Home** menu.

2. In the list of the project repositories, click **Add**.

3. Select the **Import** tab.

   ![](/docs/assets/images/import-gitrepo-tab.png)

   **Configure Advanced Repository Settings During Repository Creation/Import**<br></br>
   The repository **Import** tab lets you import repositories by simply giving the repo a name and selecting the destination server. However, a **Settings** toggle button ia also available, which if selected, shows you all the advanced repository settings—thereby letting you configure the advanced repository settings at the time of repository import itself.<br></br>

   This toggle button is not selected by default.

   ![The Import repository tab with the Settings toggle button selected](/docs/assets/images/20.0-scm-settingstoggle02.png)

4. Type the external public Git repository;s URL in the **IMPORT URL** field. 

   For example, if you want to import a repository named \"testwebhook\" from GitHub, simply type, `https://github.com/mkamaraj/testwebhook`. 

5. Type the username and password (to access the Git repository on the server where it resides). These are optional fields. 

6. Type a name, display name, and description for the repository. If you plan to use an SCM server that requires approval for new repositories, use the **Description** field to provide your reason for asking to create this repository.

7. Choose a code review policy from the **REPOSITORY CATEGORY** drop-down list. For more information on Gerrit code review policies, see [Control Your Code Review Policy](./codereviewpolicy).

8. The **PROTECT HISTORY** check box is selected by default. You can disable it, if required. For more information, see [History Protection](./historyprotect).

9. Choose values from the **GIT LFS ENABLED** and **MAX LFS OBJECT SIZE** drop-down lists. For more information, see [Set up LFS](./setuplfs).

10. If you want each code commit to be associated with an artifact, select the **Required on commit** check box next to the **Association** field.

    :::note
    One of the commit governance rules mandates that the artifact and the commit must be on the same TeamForge project.
    :::
    
    ![](/docs/assets/images/SCM-same_project_association.png)

11. For security reasons, you may want to restrict email notifications to the essential information. If so, select **Hide Details in Monitoring Messages**.

12. To index the repository and to make the repository searchable, select the **Repository content will be available in search results** check box.

13. Click **Import Repository**.

An email notification is sent to you, after successful import. Once the repository is imported, it gets added to the list of repositories. 


#### Related Links

* [Create a Source Code Repository](./createasourcecoderepository)
* [Gerrit Code Review Policies](./codereviewpolicy)
* [History Protection](./historyprotect)
* [Set up LFS](./setuplfs)


