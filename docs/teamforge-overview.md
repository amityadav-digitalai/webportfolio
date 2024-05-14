---
id: teamforge-overview
title: TeamForge 24.0 Overview
product: 
  - teamforge
category:
  - Get started
subject:
  - Product overview
tags: 
  - release notes
last_updated: Mar 25, 2024
summary: TeamForge 24.0 has a lot of new features and enhancements. Here's a list of a few release-defining new features in TeamForge 24.0.
---

##### Release Information

* **Released on**: TBD
* **GA Version**: TBD

## TeamForge—Nexus Integration <!-- (https://forge.collab.net/sf/go/artf422805) -->

**Support for Nexus VAR::identifiers.nexus3**—TeamForge 24.0 supports integration with Nexus VAR::identifiers.nexus3. Nexus VAR::identifiers.nexus3 supports new capabilities, performance improvements, and fixes to some of the existing defects and security vulnerabilities. For more information, see [Nexus Repository 3.61.0 Release Notes](https://help.sonatype.com/repomanager3/product-information/release-notes/2023-release-notes/sonatype-nexus-repository-3.61.0-release-notes).

**Upgrade TeamForge—Nexus Integration Plugin**—TeamForge 24.0 now supports Nexus 3 integration plugin version VAR::identifiers.nexus3-plugin-version. For more information, see [Install or Upgrade the TeamForge—Nexus Integration Plugin](./IntegrationPages/installnexusplugin).

## JIRA Integration Plugin Installation <!-- (https://forge.collab.net/sf/go/artf423719) -->

With TeamForge 24.0, you no longer need to search for the latest TeamForge-JIRA integration plugin in the **Atlassian Marketplace**. Instead, you must contact [Digital.ai Support](https://support.digital.ai/) to obtain the latest **TeamForge-JIRA adapter jar** file for installing the TeamForge-JIRA integration plugin. For more information, see [Install the JIRA Integration Plugin](./WEBRPages/teamforge-jira-integration#installjiraintegrationplugin).

## Configure Repository Categories according to Your Needs <!-- (https://forge.collab.net/sf/go/artf421164) -->

You now have the flexibility to configure the default repository categories that are available for selection at the repository level. This can be configured for each external system. This enhancement helps you to choose the default repository category that best aligns with your preferences at the repository level.

As a site administrator, you have the following capabilities:<br></br>
![](/docs/assets/images/status-success-small.png) Choose repository categories defined in the Gerrit mapping file and make them available for selection at the repository level.<br></br>
![](/docs/assets/images/status-success-small.png) Create a default repository category that is rendered in bold font and positioned as the topmost category in the **REPOSITORY CATEGORY** dropdown list.<br></br>
![](/docs/assets/images/status-success-small.png) It is possible to hide a repository category without removing it from the Gerrit mapping file.<br></br>
![](/docs/assets/images/status-success-small.png) If a repo category is categorized as **Selected**, Gerrit rejects any attempts to delete such repositories from `TeamForgeGerritMappings.xml`.

:::note
You cannot remove a repository category that is currently in use by any other repository. This is because removing such a category would break the configuration of all repositories that use it
:::

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