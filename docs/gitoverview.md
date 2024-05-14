---
Summary: TeamForge supports integration with Git, a distributed version control tool
  powered by Gerrit.
category: ''
id: gitoverview
keywords:
- git
- gerrit
- integration
lastUpdatedAt: Jul 13, 2020
product: teamforge
tags:
- ctf_20.2
- git_gerrit
- integration
- source_code
- code_review
title: TeamForge-Git Integration
---


Although Git is the world’s leading distributed version control system, the enterprise has been slow and tentative in its adoption. Concerned with security breaches, compliance violations and lack of governance, many organizations have chosen to take a "wait and see" approach. With TeamForge, Git is ready for the enterprise. TeamForge lets you realize all the benefits of Git while ensuring the security, governance and manageability your business demands. With TeamForge, you can even manage Git and Subversion together, within each individual project.

Gerrit is an open source code review system designed to work with Git. Gerrit supports various access control mechanisms. The TeamForge Git integration uses Gerrit as a vehicle to bring TeamForge project roles and permissions into Git.

![](/docs/assets/images/teamforge-git-overview.png)


## Install or Upgrade TeamForge-Git Integration

You can install Git on the TeamForge Application Server or on a separate server dedicated for SCM. For more information about installing and upgrading Git, see TeamForge install and upgrade instructions.

## Git Integration Blog Posts
You can also read the [CollabNet blog posts on Git](http://blogs.collab.net/git) and follow the latest developments in the Digital.ai TeamForge-Git integration space.

## Add Git as a Linked Application

Once you have installed Git, you can add Git as a linked application on your TeamForge site.

![](/docs/assets/images/status-success-small.png) In TeamForge 7.2 and later versions, installing Git for the first time creates a site-wide linked application automatically.<br></br>
<!-- ![](/docs/assets/images/status-success-small.png) In TeamForge 8.0 and later versions, in addition to a site-wide linked application, a project-wide linked application is also created for projects in TeamForge that have at least one CVS repository.<br><br> -->
![](/docs/assets/images/status-success-small.png) However, this behavior can be controlled by the `teamforge.createTFProjectLinkedApps` Gerrit config (`gerrit.config`) property.

1. Set up the URL `http://<TEAMFORGEHOSTNAME>/gerrit/sso/`.
   :::note
   The `/` at the end of the URL matters. Make sure you have it.
   :::
1. For instructions on setting up a site-wide linked application in TeamForge, see [Create a Site-wide Linked Application](./externalapplications#linkedapps).
   
   Here's an example for Git:
   
   ![](/docs/assets/images/gerrit-linkedapp-80.png)
   
   A link for Git is added to the More menu in your TeamForge navigation bar.

   ![](/docs/assets/images/gerrit-linkedapp-80-1.png)

   Clicking **Git** displays the Git console in the main TeamForge window.

## Illustrations on TeamForge-Gerrit Communication

The following illustrations help you understand the communication flow between TeamForge and Gerrit in a single host and distributed environments.

### TeamForge and Git/Gerrit on a Single Host

![](/docs/assets/images/tfgerritcomm01.png)

### TeamForge and Git/Gerrit in a Distributed Two-server Setup

![](/docs/assets/images/tfgerritcomm02.png)

### TeamForge, Git/Gerrit and Replica Server in a Three-server Distributed Setup

![](/docs/assets/images/tfgerritcomm03.png)
