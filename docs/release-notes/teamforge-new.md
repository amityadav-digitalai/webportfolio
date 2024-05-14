---
Summary: TeamForge 24.0 has a lot of new features and enhancements. Here's a list
  of a few release-defining new features in TeamForge 24.0.
category: ''
id: teamforge-new
keywords:
- release notes
lastUpdatedAt: Dec 29, 2023
product: teamforge
tags:
- release_notes
title: What's New in TeamForge 24.0?
---

## Release Information

* **Released on**: TBD
* **GA Version**: TBD

## TeamForge—Nexus Integration <!-- (https://forge.collab.net/sf/go/artf422805) -->

**Support for Nexus VAR::identifiers.nexus3**—TeamForge 24.0 supports integration with Nexus VAR::identifiers.nexus3. Nexus VAR::identifiers.nexus3 supports new capabilities, performance improvements, and fixes to some of the existing defects and security vulnerabilities. For more information, see [Nexus Repository 3.61.0 Release Notes](https://help.sonatype.com/repomanager3/product-information/release-notes/2023-release-notes/sonatype-nexus-repository-3.61.0-release-notes).

**Upgrade TeamForge—Nexus Integration Plugin**—TeamForge 24.0 now supports Nexus 3 integration plugin version VAR::identifiers.nexus3-plugin-version. For more information, see [Install or Upgrade the TeamForge—Nexus Integration Plugin](./IntegrationPages/installnexusplugin).

## JIRA Integration Plugin Installation <!-- (https://forge.collab.net/sf/go/artf423719) -->

With TeamForge 24.0, you no longer need to search for the latest TeamForge-JIRA integration plugin in the **Atlassian Marketplace**. Instead, you must contact [Digital.ai Support](https://support.digital.ai/) to obtain the latest **TeamForge-JIRA adapter jar** file for installing the TeamForge-JIRA integration plugin. For more information, see [Install the JIRA Integration Plugin](./WEBRPages/teamforge-jira-integration#installjiraintegrationplugin).


## Tracker List View UI Enhancements <!-- (https://forge.collab.net/sf/go/artf422809) -->

The TeamForge Tracker interface now incorporates a revamped UI LIST view, aimed at enhancing user experience across all pages while offering ample space for graphical summaries. This update simplifies status checks and reduces visual strain.

Key capabilities of the new Tracker UI include:

##### Enhanced Screen Layouts for Efficiency
Effective screen layouts maximized the data presentation and usability by employing adequate white space. This facilitates accommodating extensive data and controls, minimizing the number of clicks needed to access required information.

##### Streamlining Artifact Management
Facilitate quick editing of artifact details directly from listing and board views. This eliminates the need to navigate to detailed edit pages for frequent updates such as altering assignees, priorities, or adding comments.

##### Custom Field Visibility in Planning Folder View
Provide the capability to view and filter custom-defined fields of Trackers in the Planning Folder view, enhancing organization and accessibility.

##### Consistent Card Configuration Across Boards
Ensure consistency and configurability of cards within Plan, Task, and Kanban boards, optimizing user experience across various board views.

##### Enhanced Filtering Options
Expand filtering capabilities within board views, empowering users to efficiently manage and manipulate displayed data.

##### Streamlining Workflow Transition
Offer an option to display only mandatory tracker fields for the next workflow transition, simplifying user interactions and reducing errors.

##### Graphical Representation Improvements
Enhance existing graphs and charts within Tracker, Planning Folder, and Teams summary views to improve data visualization and interpretation.

##### Flexible Card Display Options
Introduce two card display options—Detailed and Minimal—within board views. Detailed cards feature extended title display, tags, and customizable field values, enhancing user preference flexibility.

##### Simplifying Mandatory Field Identification
Facilitate the identification of mandatory fields for the next transition by offering an option to display only such fields, minimizing user effort and errors.

##### Improved Comment Visibility
Allow users to view comments within the "Comments" section directly from the artifact detail view, enhancing communication and collaboration.

##### Enhanced Association Dialog Design
Redesign the dialog for adding and removing associations and dependencies, incorporating improved search capabilities for enhanced usability.

##### Informative Hover Functionality
Display relevant information when users hover over TeamForge objects within Trackers, including associations, dependencies, and referenced TF Objects within the Comments section.

##### Access to Artifact Attachments
Provide links to artifact attachments directly within the list view, improving accessibility and efficiency.

![](/docs/assets/images/23.0-scm-repo-categories.png)

## TeamForge SCM—Enterprise Version Control <!-- (https://forge.collab.net/sf/go/artf423482) -->

TeamForge—Git Integration 24.0.4-3.5.6.

For more information about vanilla Gerrit version 3.5, see [Gerrit 3.5.x Release Notes](https://www.gerritcodereview.com/3.5.html).

## Install / Upgrade

TeamForge 24.0 supports:
* TeamForge JIRA Integration version: VAR::identifiers.jira <!-- (https://forge.collab.net/sf/go/artf423719, and artf422456) -->
* PostgreSQL version VAR::identifiers.postgres_long
* PostgreSQL JDBC Driver version VAR::identifiers.postgres_JDBC_driver
* VAR::identifiers.rhel_centos_now
* Enhanced Jenkins integration plugin version VAR::identifiers.jenkins_integration_plugin.