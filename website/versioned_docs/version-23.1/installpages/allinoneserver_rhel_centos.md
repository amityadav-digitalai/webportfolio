---
Summary: The easiest way to install TeamForge is to install it on a single server,
  dedicated to TeamForge taking the default configuration settings.
category: ''
id: allinoneserver_rhel_centos
keywords:
- dedicated installation
- single server setup
lastUpdatedAt: Aug 6, 2020
product: teamforge
tags:
- ctf_23.0
- ctf_20.2
- ctf_20.0
- ctf_19.3
- ctf_19.1
- ctf_19.0
- installation
title: Install All Services on a Single RHEL/CentOS Server
---

import DosAndDonts from '@site/src/components/DosAndDonts.jsx'
import Installrepoconfig from '@site/src/components/InstallRepoConfig.jsx'
import Siteoptionsconfig from '@site/src/components/SiteOptionsConfig.jsx'
import Deployserviceswithnote from '../_partials/installupgrade/_deploy_services_with_note.md'
import Verifyinstallation from '../_partials/installupgrade/_verify_installation.md'
import Postinstallationtasks from '../_partials/installupgrade/_postinstalltasks.md'

<DosAndDonts />

<!-- Installation Dos and Don'ts -->

<!-- % unless site.output == "pdf" %
## Dos and Don'ts
<div markdown="1" class="panel panel-default">
<div class="panel-body" markdown="1">
% include installupgrade/install_dos_and_donts.html %
</div>
</div>
% endunless %

% unless site.output == "web" %
<h2>Dos and Don'ts</h2>
Before you begin, see [Installation Dos and Don'ts][for_pdf_installdosdonts].
% endunless % -->

<!-- Installation Dos and Don'ts -->

<!-- Installation Setup  -->

## Single Server Setup

You can install TeamForge on both VAR::identifiers.rhel_centos_now and VAR::identifiers.rhel_centos_past. In this [single server setup](../installpages/plan_your_installation_upgrade#singleordistributed), all the following [TeamForge services](../installpages/plan_your_installation_upgrade#teamforgeservices) are installed on a single RHEL/CentOS server.

### TeamForge Application Server (server-01)

* TeamForge Application Server (ctfcore)
* Database Server (ctfcore-database and ctfcore-datamart)
* Mail Server (mail)
* Code Search Server (codesearch)
* ETL Server (etl)
* Git Integration Server (gerrit and gerrit-database)
* Review Board (reviewboard, reviewboard-database and reviewboard-adapter)[^1]
* Binary (binary and binary-database)
* SCM Integration Server (subversion)
* Search Server (search).
* CLI Server (cliserver)
* TeamForge Baseline (baseline, baseline-database, baseline-post-install)[^2]
* TeamForge Webhooks-based Event Broker (webr webr-database)
* Service Monitor (service-monitor)

<!-- Installation Setup  -->

<!-- Installation Steps -->

## Do This Step by Step on the TeamForge Application Server (server-01)

1. Install VAR::identifiers.rhel_centos_now or VAR::identifiers.rhel_centos_past and log on as root.<br></br>
   ![](/docs/assets/images/status-success-small.png) The host must be registered with the Red Hat Network if you are using Red Hat Enterprise Linux.<br></br>
   ![](/docs/assets/images/status-success-small.png) See the [VAR::identifiers.rhel_centos_now Installation Guide](http://docs.redhat.com/docs/en-US/Red_Hat_Enterprise_Linux/7/html/Installation_Guide/index.html) or [RHEL VAR::identifiers.rhel_centos_past Installation Guide](http://docs.redhat.com/docs/en-US/Red_Hat_Enterprise_Linux/6/html/Installation_Guide/index.html) for help.<br></br>
   ![](/docs/assets/images/status-success-small.png) Delete the python-crypto package if you are installing TeamForge on VAR::identifiers.rhel_centos_past. <br></br>
      `yum erase python-crypto`
   
2. Check your networking setup. See [Set up Networking](../setupnetworking) for more information.

3. <Installrepoconfig />

4. Install the TeamForge application packages.
   
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

   Install the Baseline packages.
   ```shell
   yum install teamforge-baseline
   ````   
   
<!-- % unless site.output == "pdf" % -->
5. Set up your site's master configuration file.
   ```shell
   vi /opt/collabnet/teamforge/etc/site-options.conf
   ````
   ### host:SERVICES Token
   ```shell
   server-01:SERVICES=ctfcore ctfcore-database service-monitor search mail codesearch etl ctfcore-datamart subversion gerrit gerrit-database binary binary-database reviewboard reviewboard-database reviewboard-adapter cliserver baseline baseline-database baseline-post-install webr webr-database
   ````
   :::note 
   You may remove the identifiers of components you do not want. For example, remove `baseline baseline-database baseline-post-install` if you are not planning to install the TeamForge Baseline tool. See [TeamForge services](plan_your_installation_upgrade.html#teamforgeservices) for more information.
   :::

   ### host:PUBLIC_FQDN Token
   ```shell
   server-01:PUBLIC_FQDN=my.app.domain.com
   ````

   Save the `site-options.conf` file. 

   For further customization of your site configuration (SSL settings, password policy settings, PostgreSQL settings, LDAP settings and so on): <Siteoptionsconfig />

<!-- % endunless %

% unless site.output == "web" % -->
6. Set up your site's master configuration file.
   ```shell
   vi /opt/collabnet/teamforge/etc/site-options.conf
   ````
   ### host:SERVICES Token
   ```shell
   server-01:SERVICES=ctfcore ctfcore-database service-monitor search mail codesearch etl ctfcore-datamart subversion gerrit gerrit-database binary binary-database reviewboard reviewboard-database reviewboard-adapter cliserver baseline baseline-database baseline-post-install webr webr-database
   ````
   :::note
   You may remove the identifiers of components you do not want. For example, remove `baseline baseline-database baseline-post-install webr webr-database` if you are not planning to install the TeamForge Baseline and Webhooks-based Event Broker tools. See [TeamForge services](plan_your_installation_upgrade.html#teamforgeservices) for more information.
   :::

   ### host:PUBLIC_FQDN Token
   ```shell
   server-01:PUBLIC_FQDN=my.app.domain.com
   ````

   Save the `site-options.conf` file. 

   For further customization of your site configuration (SSL settings, password policy settings, PostgreSQL settings, LDAP settings and so on): <Siteoptionsconfig />.

1. <Deployserviceswithnote />

2. <Verifyinstallation />

<Postinstallationtasks />

<!-- Installation Steps -->

[^1]: TeamForge VAR::identifiers.teamforge supports Review Board VAR::identifiers.review_board_os76 on VAR::identifiers.rhel_centos_now and Review Board VAR::identifiers.review_board_os610 on VAR::identifiers.rhel_centos_past . 
[^2]: It's highly recommended that you install the [TeamForge Baseline](../BaselinePages/baseline-overview) services on a separate server as the baselining process can consume considerable CPU and database resources. For more information, see [Install TeamForge in a Distributed Setup](../installpages/distributed_install_rhel_centos).

