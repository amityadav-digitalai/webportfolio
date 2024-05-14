---
Summary: Each project can have one or more source code repositories. Before you can
  create a source code repository, a site administrator must first add one or more
  SCM servers to the Digital.ai TeamForge environment.
category: ''
id: createasourcecoderepository
keywords:
- create
- source code
- repository
lastUpdatedAt: Jul 10, 2020
product: teamforge
tags:
- ctf_20.2
- ctf_20.0
- project_admin_tasks
- project_member_tasks
- source_code
- git_gerrit
- scm
- ctf_19.2
title: Create a Source Code Repository
---


1. Click **Source Code** in the project navigation bar.

2. In the list of the project repositories, click **Add**.

3. On the **Create** tab, choose the server on which you want to create the repository.

   :::note
   The menu contains all of the SCM servers that the Digital.ai TeamForge administrators have added to the Digital.ai TeamForge environment.
   :::

   ![The Create repo tab](/docs/assets/images/20.0-scm-settingstoggle.png)  

   **Configure Advanced Repository Settings During Repository Creation**<br></br>
   The repository **Create** tab lets you create repositories by simply giving the repo a name and selecting the destination server. However, a **Settings** toggle button ia also available, which if selected, shows you all the advanced repository settings—thereby letting you configure the advanced repository settings at the time of repository creation itself.<br></br>
   This toggle button is not selected by default. 
   ![The new Settings toggle button](/docs/assets/images/20.0-scm-settingstoggle.png)
   ![The Create repository tab with the Settings toggle button selected](/docs/assets/images/20.0-scm-settingstoggle01.png)

4. Select the **Settings** toggle button. 

5. Enter a name, display name, and description for the repository. If you plan to use an SCM server that requires approval for new repositories, use the **Description** field to provide your reason for asking to create this repository.

6. **This field is enabled only if you've chosen a Git server**. Choose a code review policy option from the **REPOSITORY CATEGORY** drop-down list. For more information on Gerrit code review policies, see [Control Your Code Review Policy](./codereviewpolicy).

   :::note
   From TeamForge 19.2, the review rules can only be configured from the **Settings > Policies** tab of the repository, after the repository has been created.
   :::

7. **This field is enabled only if you've chosen a Git server**. **PROTECT HISTORY** check box is selected by default. You can disable it, if required. For more information on history protection, see [History Protection](./historyprotect).

8. **This field is enabled only if you've chosen a Git server**. Choose values from **GIT LFS ENABLED** and **MAX LFS OBJECT SIZE** drop-down lists. For more information, see [Set up LFS](./setuplfs).

9. If you want each code commit to be associated with an artifact (or a task or some other work item) necessarily, select **Required on commit** option next to the **Association** field.

  :::note
  A new rule has been added for enhanced commit governance. This rule enforces that the artifact and the commit must be in the same TeamForge project.
  :::
  ![](/docs/assets/images/SCM-same_project_association.png)

10. For security reasons, you may want to restrict email notifications to the essential information. If so, select **Hide Details in Monitoring Messages**.

11. To index the content of the repository and to make the repository content available in search results, select **Repository content will be available in search results**.

12. Click **Create Repository**.

Your request for a new repository is submitted. You will receive an email notification when your repository is created or if your request for a new repository is denied.

* If the SCM server that you chose does not require approval for new repositories, the repository is created.
* If the SCM server that you chose requires approval for new repositories, a Digital.ai TeamForge administrator must approve your repository before it is created.

<!-- :::note
For information about implications of TeamForge EventQ integration on SCM commits and associations, see [SCM Commits in TeamForge with EventQ Integration][eventq_overview.html#scmcommitsinTFeventqintegration].
::: -->


#### Related Links

* [Import a Git Repository into TeamForge](./import-git-repo)
* [Gerrit Code Review Policies](./codereviewpolicy)
* [History Protection](./historyprotect)
* [Set up LFS](./setuplfs)
