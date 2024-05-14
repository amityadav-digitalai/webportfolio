---
Summary: Webhooks can be configured both at a project level or for select repositories.
  Once set up, SCM events such as commit and merge are published to the Webhooks for
  other applications to consume.
category: ''
id: webhooksforprojects
keywords:
- webhooks for projects
lastUpdatedAt: Mar 19, 2018
product: teamforge
tags:
- project_admin_tasks
- webhooks
- projects
title: Set up Webhooks for Projects
---


Keep the Webhook URL (of the application that consumes TeamForge SCM event information) handy before you proceed with setting up Webhooks in TeamForge. You can set up Webhooks for Git and Subversion repositories.


## Create a Webhook

 1. Log on to TeamForge and select a project from the **My Workspace** menu.

 2. Click **SOURCE CODE** from the **Project Home** menu.

 3. Select **WEBHOOKS** tab.

    ![](/docs/assets/images/1711-webhooks01.png)

 4. Select a repository type from the drop-down list (Git or Subversion) for which you want to create a Webhook.

 5. Select an event type from the drop-down list.

 6. Type the Webhook URL.

 7. Click **Add**.

    You have successfully created a Webhook for all the repositories in the project of a particular SCM tool such as Git and Subversion.

 8. Repeat steps 4 through 7 to add more webhooks, if required.

#### Related Links

* [Set up Webhooks for Tracker Artifacts](./webhooksfortrackerartifacts.md)
* [Set up Webhooks for Repositories](./webhooksforrepositories.md)

