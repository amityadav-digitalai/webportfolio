---
Summary: Include custom object IDs in your commit messages and have them automatically
  converted to hyperlinks. This is possible if you set up custom object ID mapping
  for the repository.
category: ''
id: linkifycustomobjectids
keywords:
- internal code browser
lastUpdatedAt: Jun 27, 2018
product: teamforge
tags:
- project admin_tasks
- project_member_tasks
- source_code
- git_gerrit
- scm
- internal_code_browser
- ctf_18.2
title: Linkify Custom Object IDs in Code Browser
---


Custom object ID mapping is a process in which you define a combination of regular expression and link URL that is used to dynamically create hyperlinks of custom object IDs used in commit messages. For example, you can define a custom object ID mapping to automatically linkify objects of an external application.


1. Log on to TeamForge and select a project from the **My Workspace** menu.

2. Click **SOURCE CODE** from the **Project Home** menu.

3. Select a repository and select the **SETTINGS** tab.

4. Select the **Policies** tab.

5. Type the regular expression and link URL in the **CUSTOM OBJECT ID MAPPING** field and click **Add**.

6. Repeat step 5 to add more such custom object ID mapping, if required.

   Here's an example of the custom object ID mapping defined for JIRA tickets.

   ![](/docs/assets/images/1711-custom-objectid-links.png)

:::note
From TeamForge 18.2 release, you can define the custom object ID mapping to automatically linkify the Digital.ai VersionOne work item with its work item ID (if it is added in your code commit messages).
:::

![](/docs/assets/images/18-2-custom-object-ids-lifecycle.png)
![](/docs/assets/images/lifecycle-workitem-link.png)

