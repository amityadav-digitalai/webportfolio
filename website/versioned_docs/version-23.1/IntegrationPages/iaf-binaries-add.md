---
Summary: When TeamForge Site Administrator has made the Binaries application available,
  Project Administrators can add it as one of their project tools.
category: ''
id: iaf-binaries-add
keywords:
- add
- binaries
- repositories
- nexus
lastUpdatedAt: Jul 31, 2020
product: teamforge
tags:
- installation
- project_admin_tasks
- binaries
- integration
- projects
title: Add Binaries to TeamForge Projects
---


We'll assume you have Project Admin rights in the project.

1. Click **Project Admin** from the **Project Home** menu.
2. Click **Tools** to see the list of integrated applications available in the site.
3. Click **Add Tool**.
4. Select **Binaries** from the list of tools displayed.
   :::note
   Make sure you select the **Binaries** base application (for which the deployment property `BaseApp` is set to `true`) and not any Nexus server that you may have.
   :::
5. Click **Save**.
   ![](/docs/assets/images/202-add-binary-to-projects.PNG)

   If a **Binaries** button appears along with the prefix as a tooltip when you mouse over the button, your job is done.

   ![](/docs/assets/images/202-add-binary-to-projects-02.PNG)

