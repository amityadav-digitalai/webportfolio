---
Summary: To assist in the administration of the TeamForge site, a person must have
  a site administrator user account with a corresponding role on that site.
category: ''
id: createadditionalsiteadministrators
keywords:
- site admin tasks
- additional administrators
lastUpdatedAt: Mar 1, 2018
product: teamforge
tags:
- site_admin_tasks
- role_based_access_control
title: Create Additional Site Administrators
---

TeamForge administrators can create suitable site-wide roles and delegate site administration responsibilities.  
:::note
You can choose site administration permissions through site-wide roles.
:::

 1. Go to **My Workspace > Admin**
 2. Click **Roles** from the **Projects** menu.
 3. Click **Create**.
 4. On the _Site-Wide Role_ tab, write a name and description for the role. The role name is case-sensitive.
 5. To prevent inheritance of the role into private projects, select the **Prevent Access** option.
    :::note
    Selecting the option to prevent role inheritance does not affect access to public and gated projects. On selecting **Prevent access**, the user may not be allowed to project-permissions related tasks in private projects.
    :::
 6. Click **Create**. The restricted site administrator role is created. The **Edit Site-wide Role Permissions** page appears.
    :::note
    You can select the permission for site administration tools as well as for applications available across all projects.
    :::
 7. Select the appropriate site administration and/or project permissions liste on the _Role Permissions_ tab to match the responsibility assigned to a user with that role.
    :::tip
    You may not want to risk delegating the task of deleting projects, users, groups, roles or categories.
    :::
    :::note
    If you are creating a site-wide role that has Project Tracker's \"Configure - Site\" permission, you must also assign the \"Role - View\" permission.
    :::
    :::note
    To manage artifact types globally, users must have project administrator permissions in a site-wide role.
    :::
    The role is created. You can assign it to site members at any time.

