---
Summary: You can upgrade TeamForge on new hardware with all services on a single server.
category: ''
id: new_hardware_upgrade_single_server
keywords:
- new hardware upgrade
- single server upgrade
lastUpdatedAt: Jul 06, 2021
product: teamforge
tags:
- ctf_21.1
- ctf_21.0
- ctf_20.2
- ctf_20.0
- ctf-19.3
- ctf_19.1
- ctf_19.0
- upgrade
- site_admin_tasks
- backup_restore
title: Upgrade TeamForge on New Hardware with All Services on a Single Server
---

import Siteoptionsconfigupgrade from '@site/src/components/SiteOptionsConfigUpgrade.jsx'
import DosAndDonts from '@site/src/components/DosAndDonts.jsx'
import Onehop from '../_partials/installupgrade/_onehop.md'
import Tflicense211andlater from '../_partials/installupgrade/_teamforge-license-211-and-later.md'
import Cvseolupgrade from '../_partials/installupgrade/_cvseol-upgrade.md'
import Eventqendoflife from '../_partials/installupgrade/_eventqendoflife.md'
import Chmodsubversionbaserepo from '../_partials/installupgrade/_chmodsubversionbaserepo.md'
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
* TeamForge Webhooks-based Event Broker (webr, webr-database)
* Service Monitor (service-monitor)

<DosAndDonts />

<Onehop />

<Tflicense211andlater />

<Cvseolupgrade />

<Eventqendoflife  />

<Chmodsubversionbaserepo />

## Prepare the New TeamForge Application Server (server-01)

1. Install VAR::identifiers.rhel_centos_now and log on as root.

   ![](/docs/assets/images/status-success-small.png) The host must be registered with the Red Hat Network if you are using Red Hat Enterprise Linux.<br></br>
   ![](/docs/assets/images/status-success-small.png) See the [VAR::identifiers.rhel_centos_now Installation Guide](http://docs.redhat.com/docs/en-US/Red_Hat_Enterprise_Linux/7/html/Installation_Guide/index.html) for help.
   
2. Check your networking setup. See [Set up Networking](../setupnetworking) for more information.

3. <Installrepoconfigupgrade />

## Install the TeamForge Services

1. Install TeamForge.
   
   ```shell
   yum install teamforge
   ````

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

## Back up and Restore TeamForge Database, Data Directories and site-options.conf
See [Back up and Restore TeamForge Database, Data Directories and site-options.conf](../upgradepages/backupandrestore#backupteamforge).

## Back up and Restore the Review Board Database and Data Directories
See [Back up and Restore Review Board](../upgradepages/backupandrestore#backuprb).

## Disable OID While Upgrading to TeamForge 22.0 or later

Do this if you are upgrading from TeamForge 21.2 or earlier to TeamForge 22.0 or later. 

TeamForge 22.0 supports PostgreSQL VAR::identifiers.postgres_short
. As a result, you must run the `/opt/collabnet/teamforge/dist/scripts/disable_oid_pg_upgrade13.py` script to disable the object identifiers (OIDs) before provisioning TeamForge services.

```shell
/opt/collabnet/teamforge/dist/scripts/disable_oid_pg_upgrade13.py
```` 

## Import the SSL Certs to the Java Keystore
<!-- [artf417891] Doc changes needed for upgrade CTF on new hardware to support OS centos/rhel8 -->
Do this on the TeamForge Application Server (server-01). 

1. Locate the Java keystore. 
   
   This is `PATH_TO_JAVA/jre/lib/security/cacerts`. For example, this may be `/usr/local/j2sdk1.4.2_10/jre/lib/security/cacerts`.
2. Locate the Java keytool utility.

   This is `PATH_TO_JAVA/bin/keytool` For example, `/usr/local/j2sdk1.4.2_10/bin/keytool`.
3. Import the certificate into the keystore.
   
   ```shell
   PATH_TO_JAVA/bin/keytool -import -keystore PATH_TO_JAVA/jre/lib/security/cacerts -file <server>.crt -alias <server>
   ````
   :::note
   Any value is accepted for server in -alias \<server\>.
   :::

## Configure the New TeamForge Application Server (server-01)
Log on to the TeamForge Application Server (server-01) and set up the `site-options.conf` file.

1. Copy the `site-options.conf` file to the TeamForge installer directory.
   ```shell
   cp /tmp/site-options.conf /opt/collabnet/teamforge/etc/
   ````
2. Set up your site's master configuration file.
   :::important
   See [Site Options Change Log](../upgradepages/siteoptionschangelog) for a list of site option changes. While upgrading to a latest TeamForge release, make sure that obsolete site option tokens, if any, are removed from the `site-options.conf` file of the TeamForge version you are upgrading to.
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

## Generate the License Key
As you are upgrading on new hardware, contact [Digital.ai Support](https://support.digital.ai), generate the license key for the new server (IP address) and use it to replace `/opt/collabnet/teamforge/var/etc/sflicense.txt`.


If you have the TeamForge database and datamart on two separate ports on the same server, see [Create a Single Cluster for Both Database and Datamart](../upgradepages/movedbdmintoonepginstance).

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
<!-- 1. % include installupgrade/cvssyncpermissions.html % -->
1. <Verify_installation_upgrade />
2. Remove the backup files, if any, after the TeamForge site is up and running as expected. Remove the repository and the file system backup from the `/tmp/backup_dir` directory.

<Postupgradetasks />

[^1]: TeamForge VAR::identifiers.teamforge supports Review Board VAR::identifiers.review_board_os76 on VAR::identifiers.rhel_centos_now and Review Board VAR::identifiers.review_board_os610 on VAR::identifiers.rhel_centos_past.
[^2]: It's highly recommended that you install/upgrade the [TeamForge Baseline](../BaselinePages/baseline-overview) services on a separate server as the baselining process can consume considerable CPU and database resources. For more information, see [Upgrade TeamForge on New Hardware in a Distributed Multi-host Setup](../upgradepages/new_hardware_upgrade_multi_host).

