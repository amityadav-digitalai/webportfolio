---
id: teamforge-overview
title: TeamForge 23.0 Overview
product: 
  - teamforge
category:
  - Get started
subject:
  - Product overview
tags: 
  - release notes
last_updated: Dec 07, 2022
summary: TeamForge 23.0 has a lot of new features and enhancements. Here's a list of a few release-defining new features in TeamForge 23.0.
---

##### Release Information

<table>
  <tr>
    <th>Version</th>
    <th>Released On</th>
  </tr>
  <tr>
    <td><b>GA Version:</b> <br></br>23.0.192</td>
    <td>Jun 20, 2023</td>
  </tr>
  <tr>
    <td><b>Update 1:</b> <br></br> 23.0.236-413</td>
    <td>Nov 30, 2023</td>
  </tr>
  <tr>
    <td><b>Update 2:</b> <br></br> 23.0.255-467</td>
    <td>Feb 05, 2024</td>
  </tr>
</table>

## TeamForge—Nexus Integration

**Support for Nexus VAR::identifiers.nexus3**—TeamForge 23.0 supports integration with Nexus VAR::identifiers.nexus3. Nexus VAR::identifiers.nexus3 supports new capabilities, performance improvements, and fixes to some of the existing defects and security vulnerabilities. For more information, see [Nexus Repository 3.49.0 Release Notes](https://help.sonatype.com/repomanager3/product-information/release-notes/2023-release-notes/sonatype-nexus-repository-3.49.0-release-notes).

**Upgrade TeamForge—Nexus Integration Plugin**—TeamForge 23.0 now supports Nexus 3 integration plugin version VAR::identifiers.nexus3-plugin-version. For more information, see [Install or Upgrade the TeamForge—Nexus Integration Plugin](./IntegrationPages/installnexusplugin).

## TeamForge Baselines with Nexus Pro

TeamForge 23.0 baseline supports Nexus Repository Pro (Enterprise Edition). For more information, see [Nexus Repository Pro (Enterprise Edition)](https://www.sonatype.com/products/repository-oss-vs-pro-features)

<!-- See, https://forge.collab.net/sf/go/artf422210 -->
## TeamForge Integration with Digital.ai Platform Identity Service

**TeamForge SSO using Digital.ai Platform Identity Service**— TeamForge 23.0 can integrate with the Identity Service Provider within Digital.ai platform for single sign-on (SSO). For more information, see [TeamForge SSO using Digital.ai Platform Identity Service](./teamforge-integrating-with-identity-service#teamforgedaisaml).

**TeamForge SSO using Third-party Identity Provider (IDP) via Digital.ai Platform Identity Service**—TeamForge 23.0 supports SAML-compliant external IDPs via the Digital.ai Identity Service that owns and maintains a directory of user credentials and an authentication mechanism for single sign-on. For more information, see [TeamForge SSO using Third-party Identity Provider (IDP) via Digital.ai Platform Identity Service](./teamforge-integrating-with-identity-service.html#teamforgedaiidp).

<!-- See, https://forge.collab.net/sf/go/artf422097 -->
## EventQ Report Modules

In the TeamForge 23.0, following EventQ related report modules are deprecated:
  * Activity over time
  * Build activity by project
  * Latest builds with test results
  * Volume of Events
  * Weekly event trend

<!-- See, https://forge.collab.net/sf/go/artf422595 -->
## Support for new Tags in Datamart

TeamForge 23.0 supports **tag_dimension** and **tag_artifact_dimension** tables in all the TeamForge Datamart based reports that let you fetch a report from Datamart using filters based on tag dimension or tag associated with an artifact.

<!-- See, https://forge.collab.net/sf/go/artf422327 -->
## Support for Micro Focus Application Lifecycle Management

TeamForge 23.0 supports integration with Micro Focus ALM version 16.0 using the CollabNet Connector Framework (CCF) adaptor that synchronizes Micro Focus ALM defects and requirements with TeamForge artifacts.

## TeamForge SCM—Enterprise Version Control

TeamForge—Git Integration 23.0.3-3.4.8.

For more information about vanilla Gerrit version 3.4, see [Gerrit 3.4.x Release Notes](https://www.gerritcodereview.com/3.4.html).

<!-- See, https://forge.collab.net/sf/go/artf422686 -->
### Search by Repository Name across SCM Servers and Projects

TeamForge 23.0 adds support for **Repository Name** in the searchable object types, which lets you search the repositories by partial or full name across the SCM servers and projects. For more information, see [Jump to ID / Advanced Search](./search-keyword).

![](/docs/assets/images/repository-name-1.png)


![](/docs/assets/images/repository-name-2.png)

## Install / Upgrade

TeamForge 23.0 supports:

* VAR::identifiers.rhel_centos_now and VAR::identifiers.rhel_centos_past.
<!-- Eryk Confirmed theNimbus JOSE+JWT and PostgreSQL JDBC Driver upgrades are specific to 23.0 -->
* TeamForge 23.0 java library version 9.31 for nimbus Javascript Object Signing and Encryption (JOSE) and JSON Web Token (JWT).
* PostgreSQL JDBC Driver version VAR::identifiers.postgres_JDBC_driver
* Tomcat version VAR::identifiers.tomcat
* Jenkins version VAR::identifiers.jenkins
* Apache HTTPD Server version:
  * 1.10.2 for RHEL/CentOS 7.9
  * 1.10.6 for RHEL 8.6