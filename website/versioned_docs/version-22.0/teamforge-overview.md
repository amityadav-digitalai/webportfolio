---
id: teamforge-overview
title: TeamForge 22.0 Overview
product: 
  - teamforge
category:
  - Get started
subject:
  - Product overview
tags: 
  - release notes
last_updated: Apr 8, 2022
summary: TeamForge 22.0 has a lot of new features and enhancements. Here's a list of a few release-defining new features in TeamForge 22.0.
---

##### Release Information

* **Released on**: Apr 8, 2022
* **GA Version**: 22.0.288-559

## Webhooks for Artifact Dependency Add/Remove Events (TeamForge—Agility Integration)

With TeamForge 22.0, you can now create the following pre-submit and post-submit webhooks for add and remove artifact dependency events.

**Presubmit**

* Teamforge.Artifact.AddDependency.Presubmit
* Teamforge.Artifact.RemoveDependency.Presubmit

**Postsubmit**

* Teamforge.Artifact.AddDependency
* Teamforge.Artifact.RemoveDependency

Though these webhooks are created for anybody (any tool) that is interested in dependency add or remove events in TeamForge, these webhooks come in handy when you want to integrate TeamForge with Agility using Agility Connect.

## 508 Compliance
TeamForge _Trackers_, _New Documents_, and _Baselines_ modules are now [Section 508 compliant](https://508-compliance.org/).
## TeamForge—Nexus Integration

**Support for Nexus 3.37**—TeamForge 22.0 supports integration with Nexus 3.37. For more information, see [Install or Upgrade the TeamForge—Nexus Integration Plugin][installnexusplugin].

## Enhanced Date-picker Field
The date-picker field, used in TeamForge UIs, has been enhanced to let you pick the year and month with ease. Click the year and use the left and right arrows to select the desired year with ease.

![Enhanced Date-picker field](/docs/assets/images/22.0-date-picker-01.png)

## Git Integration 22.0.2-3.3.10

TeamForge 22.0 supports integration with Git 3.3.10.

## Install / Upgrade

TeamForge 22.0 library upgrades
 * VAR::identifiers.rhel_centos_now
 * Nexus VAR::identifiers.nexus3
 * Elastic Search VAR::identifiers.elasticsearch
 * PostgreSQL VAR::identifiers.postgres_short
 * PostgreSQL JDBC Driver VAR::identifiers.postgres_JDBC_driver
 * Oracle VAR::identifiers.oracle_server

### Upgrade Considerations—Disable OID While Upgrading to TeamForge 22.0

* TeamForge 22.0 supports PostgreSQL VAR::identifiers.postgres_short. As a result, you must run the `/opt/collabnet/teamforge/dist/scripts/disable_oid_pg_upgrade13.py` script to disable the object identifiers (OIDs) before provisioning TeamForge services. 
* For more information, see TeamForge upgrade instructions.

### Upgrade Considerations—Delete Existing Elastic Search Indexes While Upgrading to TeamForge 22.0

* TeamForge 22.0 uses Elastic Search 7.16.3 to address the Log4j dependent vulnerabilities. 
* As a result, you must delete the existing Elastic Search indexes as they might not be compatible with Elastic Search 7.16.3. The Elastic Search service would fail in this case. 
* Use the `/opt/collabnet/teamforge/runtime/scripts/delete_es_nodes.py` script to delete the existing indexes. You must restart the Elastic Search service after deleting the old indexes. For more information, see TeamForge upgrade instructions.
* While the existing `ELASTICSEARCH_JAVA_OPTS` site-options token is still supported to configure the JAVA_OPTS values, the following tokens have been added to configure the minimum and maximum heap size for Elastic Search.
  * ELASTICSEARCH_MIN_HEAP_SIZE=-Xms2g
  * ELASTICSEARCH_MAX_HEAP_SIZE=-Xmx2g
* In other words:
  * In TeamForge 21.2 and earlier, you would have configured: 
    * ELASTICSEARCH_JAVA_OPTS=-Xms2g -Xmx2g -Dlog4j2.formatMsgNoLookups=true. 
  * In TeamForge 22.0 and later, you must configure:
    * ELASTICSEARCH_MIN_HEAP_SIZE=-Xms2g
    * ELASTICSEARCH_MAX_HEAP_SIZE=-Xmx2g
    * ELASTICSEARCH_JAVA_OPTS=-Dlog4j2.formatMsgNoLookups=true
