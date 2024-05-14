---
Summary: You can upgrade TeamForge on the same hardware with all services on a single
  server.
category: ''
id: same_hardware_upgrade_single_server
keywords:
- same hardware upgrade
- inplace upgrade
lastUpdatedAt: Jul 06, 2021
product: teamforge
tags:
- ctf_21.1
- ctf_20.2
- ctf_20.0
- ctf_19.3
- ctf_19.0
- upgrade
- site_admin_tasks
title: Upgrade TeamForge on Same Hardware with All Services on a Single Server
---

import DosAndDonts from '@site/src/components/DosAndDonts.jsx'
import Siteoptionsconfigupgrade from '@site/src/components/SiteOptionsConfigUpgrade.jsx'
import Stopteamforge from '../_partials/installupgrade/_stop_teamforge.md'
import Onehop from '../_partials/installupgrade/_onehop.md'
import Tflicense211andlater from '../_partials/installupgrade/_teamforge-license-211-and-later.md'
import Cvseolupgrade from '../_partials/installupgrade/_cvseol-upgrade.md'
import Eventqendoflife from '../_partials/installupgrade/_eventqendoflife.md'
import Chmodsubversionbaserepo from '../_partials/installupgrade/_chmodsubversionbaserepo.md'
import Yumupgrade from '../_partials/installupgrade/_yum_upgrade.md'
import Installrepoconfigupgrade from '@site/src/components/InstallRepoConfigUpgrade.jsx'
import Openjdk from '../_partials/installupgrade/_openjdk.md'
import Deployserviceswithnote from '../_partials/installupgrade/_deploy_services_with_note.md'
import Verify_installation_upgrade from '../_partials/installupgrade/_verify_installation_upgrade.md'
import Postupgradetasks from '../_partials/installupgrade/_postupgradetasks.md'

In this [single server setup](../installpages/plan_your_installation_upgrade#singleordistributed), the following [TeamForge services](../installpages/plan_your_installation_upgrade#teamforgeservices) run on the TeamForge Application Server (server-01).

* TeamForge Application Server (ctfcore)
* Database Server (ctfcore-database and ctfcore-datamart)
* Codesearch Server (codesearch)
* Mail Server (mail)
* ETL Server (etl)
* Git Integration Server (gerrit and gerrit-database)
* SCM Integration Server (subversion)
* Search Server (search).
* TeamForge CLI Server (cliserver)
* Review Board (reviewboard, reviewboard-database, reviewboard-adapter)[^1]
* CLI Server (cliserver)
* TeamForge Baseline (baseline, baseline-database, baseline-post-install)[^2]
* TeamForge Webhooks-based Event Broker (webr webr-database)
* Service Monitor (service-monitor)

<!-- Installation Dos and Don'ts -->

<DosAndDonts />

<!-- % unless site.output == "pdf)
## Dos and Don'ts
<div markdown="1" class="panel panel-default">
<div class="panel-body" markdown="1">
% include installupgrade/install_dos_and_donts.html %
</div>
</div>
% endunless %

% unless site.output == "web)
<h2>Dos and Don'ts</h2>
Before you begin, see [Installation Dos and Don'ts][for_pdf_installdosdonts].
% endunless % -->

<!-- % include installupgrade/onehop.html % -->

<Onehop />

<!-- Installation Dos and Don'ts -->

<Tflicense211andlater />

<Cvseolupgrade />

<Eventqendoflife  />

<Chmodsubversionbaserepo />

<!-- % include installupgrade/teamforge-license-211-and-later.html % -->

<!-- % include installupgrade/cvseol-upgrade.html % -->

<!-- % include installupgrade/eventqendoflife.html %

% include installupgrade/chmodsubversionbaserepo.html % -->

<!-- % capture cap1 % -->
![](/docs/assets/images/review-baseline.png) The following instructions are valid for both VAR::identifiers.rhel_centos_past/VAR::identifiers.rhel_centos_now platforms. Specific steps, if applicable only for a particular RHEL/CentOS platform, are called out explicitly.<br></br>
![](/docs/assets/images/review-baseline.png) No backup is required for same hardware upgrades. However, you can create a backup as a precaution. See [Back up and Restore TeamForge Database, Data Directories and site-options.conf](../upgradepages/backupandrestore).
<!-- % endcapture %
% include callout.html type="primary" content=cap1 % -->

## Uninstall Custom Event Handlers, Hot Fixes, Add-ons and Review Board
1. Log on to the TeamForge Application Server (server-01).
2. SOAP 50 is no longer supported. Back up all your custom event handlers and remove all the event handler JAR files before starting your TeamForge upgrade process.
   1. Go to **My Workspace** > **Admin**.
   2. Click **System Tools** from the **Projects** menu.
   3. Click **Customizations**.
   4. Select the custom event handler and click **Delete**.
      % include tip.html content="Post upgrade, you can add custom event handlers again from the backup while making sure that you don't have SOAP50 (deprecated) library used." %
3. Uninstall hotfixes and add-ons, if any, installed on your site.

## yum upgrade

1. <Stopteamforge />

2. <Yumupgrade />
   
<!-- 3. % include installupgrade/stop_teamforge.html %
4. % include installupgrade/yum_upgrade.html % -->

## Configure the TeamForge Installation Repository

1. <Installrepoconfigupgrade />

<!-- % unless site.output == "pdf" %
1. % include installupgrade/installrepoconfig_upgrade.html %
% endunless %
% unless site.output == "web" %
1. [Configure the TeamForge installation repository][for_pdf_installrepoconfig_upgrade].
% endunless % -->

## Upgrade the TeamForge Services

1. Install the TeamForge services.
   
   ```shell
   yum install teamforge
   ````
<!-- see, https://forge.collab.net/sf/go/artf424155
   If you are installing TeamForge VAR::identifiers.teamforge on VAR::identifiers.rhel_centos_past, contact the [Digital.ai Support](https://support.digital.ai/) to get the `python-modules-sources-el7.zip` file and unzip it to `/opt/collabnet/teamforge/service/reviewboard/resources/SOURCES/python-modules-sources`.
      ```shell
      unzip python-modules-sources-el7.zip -d /opt/collabnet/teamforge/service/reviewboard/resources/SOURCES/python-modules-sources
      ````
   If you are installing TeamForge VAR::identifiers.teamforge on VAR::identifiers.rhel_centos_now, contact the [Digital.ai Support](https://support.digital.ai/) to get the `python-modules-sources-el8.zip` file and unzip it to `/opt/collabnet/teamforge/service/reviewboard/resources/SOURCES/python-modules-sources`.
      ```shell
      unzip python-modules-sources-el8.zip -d /opt/collabnet/teamforge/service/reviewboard/resources/SOURCES/python-modules-sources
      ````
-->

   Install Monit.

   :::important
   If you haven't already installed the latest version of the Monit application, download it [here](https://dl.fedoraproject.org/pub/epel/7/x86_64/Packages/m/monit-5.30.0-1.el7.x86_64.rpm).
   :::

   1. Download Monit for


      * RHEL 8.x from the EPEL repository.

        ```
        wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
        rpm -ivh epel-release-latest-8.noarch.rpm
        ```

      * RHEL/CentOS 7.x from the EPEL repository.

        ```
        wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
        rpm -ivh epel-release-latest-7.noarch.rpm
        ```

    2. Install Monit.

        ```
        yum install monit
        ```
   
2. Install the Baseline services.
   ```shell
   yum install teamforge-baseline
   ````

## Disable OID While Upgrading to TeamForge 22.0 or later

Do this if you are upgrading from TeamForge 21.2 or earlier to TeamForge 22.0 or later. 

TeamForge 22.0 supports PostgreSQL VAR::identifiers.postgres_short. As a result, you must run the `/opt/collabnet/teamforge/dist/scripts/disable_oid_pg_upgrade13.py` script to disable the object identifiers (OIDs) before provisioning TeamForge services.

```shell
/opt/collabnet/teamforge/dist/scripts/disable_oid_pg_upgrade13.py
````   

## Set up the site-options.conf File
1. Set up the `site-options.conf` file.
   :::important
   See [Site Options Change Log](../release-notes/siteoptionschangelog) for a list of site option changes. While upgrading to a latest TeamForge release, make sure that obsolete site option tokens, if any, are removed from the `site-options.conf` file of the TeamForge version you are upgrading to.
   :::
   ```shell
   vi /opt/collabnet/teamforge/etc/site-options.conf
   ````

   ### host:SERVICES Token
   ```shell
   server-01:SERVICES = ctfcore ctfcore-database ctfcore-datamart service-monitor mail etl search codesearch subversion cliserver gerrit gerrit-database binary binary-database reviewboard reviewboard-database reviewboard-adapter baseline baseline-database baseline-post-install webr webr-database
   ````

   ### host:PUBLIC_FQDN Token
   ```shell
   server-01:PUBLIC_FQDN = my.app.domain.com
   ````

   Save the `site-options.conf` file.

   For further customization of your site configuration (SSL settings, password policy settings, PostgreSQL settings, LDAP settings and so on): <Siteoptionsconfigupgrade />

## Provision Services

 <Openjdk />

1. <Deployserviceswithnote />

### Delete Existing Elastic Search Indexes While Upgrading to TeamForge 22.0 or later

TeamForge 22.0 uses Elastic Search 7.16.3 to address the Log4j dependent vulnerabilities. As a result, you must delete the existing Elastic Search indexes as they might not be compatible with Elastic Search 7.16.3. The Elastic Search service would fail in this case. Use the `/opt/collabnet/teamforge/runtime/scripts/delete_es_nodes.py` script to delete the existing indexes. You must restart the Elastic Search service after deleting the old indexes. For more information, see TeamForge upgrade instructions.

While the existing `ELASTICSEARCH_JAVA_OPTS` token is still supported to configure the JAVA_OPTS values, the following tokens have been added to configure the minimum and maximum heap size for Elastic Search.
* ELASTICSEARCH_MIN_HEAP_SIZE=-Xms2g
* ELASTICSEARCH_MAX_HEAP_SIZE=-Xmx2g

In other words, in TeamForge 21.2 and earlier, you just had to configure `ELASTICSEARCH_JAVA_OPTS=-Xms2g -Xmx2g -Dlog4j2.formatMsgNoLookups=true`. 

Whereas, in TeamForge 22.0 and later, you must configure:
* ELASTICSEARCH_MIN_HEAP_SIZE=-Xms2g
* ELASTICSEARCH_MAX_HEAP_SIZE=-Xmx2g
* ELASTICSEARCH_JAVA_OPTS=-Dlog4j2.formatMsgNoLookups=true

## Finishing Tasks

 <Verify_installation_upgrade />

 <Postupgradetasks />

[^1]: TeamForge VAR::identifiers.teamforge supports Review Board VAR::identifiers.review_board_os76 on VAR::identifiers.rhel_centos_now and Review Board VAR::identifiers.review_board_os610 on VAR::identifiers.rhel_centos_past.
[^2]: It's highly recommended that you install/upgrade the [TeamForge Baseline](../BaselinePages/baseline-overview) services on a separate server as the baselining process can consume considerable CPU and database resources. For more information, see [Upgrade TeamForge on Same Hardware in a Distributed Multi-host Setup](../upgradepages/same_hardware_upgrade_multi_host).