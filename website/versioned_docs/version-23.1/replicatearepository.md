---
Summary: When a Subversion Edge replica has been successfully registered with a TeamForge
  SCM integration server, it is available to project administrators in projects using
  that server to house repositories. To replicate a Subversion repository, you need
  to add it to a replica server.
category: ''
id: replicatearepository
keywords:
- replicate
- source code
- repository
lastUpdatedAt: Feb 14, 2019
product: teamforge
tags:
- project admin_tasks
- project_member_tasks
- source_code
- subversion
- git_gerrit
- scm
title: Replicate a Subversion Repository
---


Before you can replicate a Subversion repository, an administrator must first add one or more replica servers. This involves converting a Subversion Edge server, and then approving the replica in TeamForge.

1. Click **SOURCE CODE** from the **Project Home** menu.

2. In the list of project repositories, select the one you want to replicate and click **Settings**.

3. Select the **Replicas** tab. The available replica servers are listed here. 
   
   Here's an example:

   ![](/docs/assets/images/editrepo1.png)

   If you don't see any available replica server listed here, it may be because none were created for this Subversion server, or there are pending replicas which haven't yet been approved by a TeamForge administrator.

 3. From the list of Available Replica Servers, click **Add** of one or more Replica Servers to have the server(s) replicate the selected repository.

 4. Click **Save**. Now the replica server is the hosting server for the repository.

    ![](/docs/assets/images/replicatesvnrepo.png) <br></br>
    Push a commit and verify if it's replicated on the Replica Servers.


#### Related Links
* [Replicate a Git Repository](./setupgitreplica#replicategitrepo)


