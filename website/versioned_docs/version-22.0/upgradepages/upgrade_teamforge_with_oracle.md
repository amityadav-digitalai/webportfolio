---
Summary: Distributed setup with TeamForge, Oracle Database (including Datamart) and
  EventQ installed on separate servers.
category: ''
id: upgrade_teamforge_with_oracle
keywords:
- multi
- multihost
- multi-host
- distributed upgrade
- oracle
lastUpdatedAt: Jul 06, 2021
product: teamforge
tags:
- ctf_21.1
- ctf_20.2
- ctf_20.0
- ctf_19.3
- installation
title: Upgrade TeamForge on the Same Hardware with Oracle Database
---

import DosAndDonts from '@site/src/components/DosAndDonts.jsx'
import Onehop from '../_partials/installupgrade/_onehop.md'
import Tflicense211andlater from '../_partials/installupgrade/_teamforge-license-211-and-later.md'
import Cvseolupgrade from '../_partials/installupgrade/_cvseol-upgrade.md'
import Eventqendoflife from '../_partials/installupgrade/_eventqendoflife.md'
import Chmodsubversionbaserepo from '../_partials/installupgrade/_chmodsubversionbaserepo.md'
import Stopteamforgeonallserversdistributed from '../_partials/installupgrade/_stop_teamforge_on_all_servers_distributed.md'
import Yumupgrade from '../_partials/installupgrade/_yum_upgrade.md'
import Installrepoconfigupgrade from '@site/src/components/InstallRepoConfigUpgrade.jsx'
import Siteoptionsconfigoracle from '@site/src/components/SiteOptionsConfigOracle.jsx'
import Deployserviceswithnote from '../_partials/installupgrade/_deploy_services_with_note.md'
import Verify_installation_upgrade from '../_partials/installupgrade/_verify_installation_upgrade.md'
import Postupgradetasksoracle from '../_partials/installupgrade/_postupgradetasks-oracle.md'


![](/docs/assets/images/status-success-small.png) In this setup, TeamForge, Oracle database and other services are distributed across three servers, server-01 through server-03 as illustrated in the following table.<br></br> 
![](/docs/assets/images/status-success-small.png) You can install TeamForge on both VAR::identifiers.rhel_centos_now and VAR::identifiers.rhel_centos_past. In this distributed setup, all the following services are installed on VAR::identifiers.rhel_centos_now servers.

| server-01                    | server-02                 | 
| TeamForge Application Server | Oracle Database Server    | 
|------------------------------|---------------------------|
| ctfcore  | ctfcore-database |
| mail     | ctfcore-datamart |
| etl      | |
| search   |  |
| codesearch | |
| gerrit | |
| gerrit-database | |
| subversion | |
| reviewboard[^1] | |
| reviewboard-database | |
| reviewboard-adapter[^2] | |
| binary | |
| binary-database | |
| cliserver | |
| service-monitor | |


:::important
TeamForge Baselines feature is not supported in TeamForge setup with Oracle database.
:::

<DosAndDonts />

<Onehop />

<Tflicense211andlater />

<Cvseolupgrade />

<Eventqendoflife  />

<Chmodsubversionbaserepo />

## Back up Your Oracle Database

* See [Oracle Database Backup and Recovery User's Guide](https://docs.oracle.com/database/121/BRADV/toc.htm)
* See [Oracle Database Backup and Recovery FAQ](http://www.orafaq.com/wiki/Oracle_database_Backup_and_Recovery_FAQ)

## Uninstall Custom Event Handlers, Hot Fixes and Add-ons
Log on to the TeamForge Application Server.

1. SOAP 50 is no longer supported. Back up all your custom event handlers and remove all the event handler JAR files before starting your TeamForge upgrade process.
   1. Go to **My Workspace** > **Admin**.
   2. Click **System Tools** from the **Projects** menu.
   3. Click **Customizations**.
   4. Select the custom event handler and click **Delete**.
      :::tip
      Post upgrade, you can add custom event handlers again from the backup while making sure that you don't have SOAP50 (deprecated) library used.
      :::
2. Uninstall hotfixes and add-ons, if any, installed on your site.

## yum upgrade
1. <Stopteamforgeonallserversdistributed />
2. <Yumupgrade />

:::note
Run `yum upgrade` on all the servers.
:::

## Configure the TeamForge Installation Repository

1. <Installrepoconfigupgrade />

## Upgrade the TeamForge Services

1. Upgrade the TeamForge and Review Board application services on the TeamForge Application Server (server-01).

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

## Back up the TeamForge Data Directories
On sites running TeamForge 16.7 or earlier versions:

1. Back up the following data directories.
   :::tip
   In a distributed setup, you must backup specific directories such as `/svnroot` and `/cvsroot` from the server that hosts those SCM services.
   :::

   :::note
   CVS is no longer supported by TeamForge 20.2 (and later). Backing up and restoring the `/cvsroot` is recommended, but optional though.
   :::
   
   | Directory | Contents |
   |-----------|----------|
   | /opt/collabnet/teamforge/var | User-created data, such as artifact attachments |
   | /opt/collabnet/reviewboard | Review Board data |
   | /svnroot | Subversion source code repositories |
   | /sf-svnroot | Subversion repository for branding data |
   | /cvsroot | CVS source code repositories (required only if you have CVS) |
   | /gitroot | Git source code repositories |

   ```shell
   cp -Rpf /svnroot /sf-svnroot /cvsroot /gitroot /opt/collabnet/teamforge/var /opt/collabnet/reviewboard /tmp/backup_dir
   ````
2. Back up the `/opt/collabnet/gerrit` directory if you have Git integration.
   :::tip
   Do this on the server that hosts the TeamForge-Git integration services.
:  ::
   ```shell
   mkdir /tmp/backup_dir/gerrit
   cp -Rpfv /gitroot /tmp/backup_dir
   cp -Rpfv /opt/collabnet/gerrit/ /tmp/backup_dir/gerrit
   ````
<!-- 3. Back up the EventQ YAML files and directories if you have EventQ installed.
   :::tip
   Do this on the server that hosts TeamForge EventQ services.
   :::
   ```shell
   cp -Rpfv /opt/collabnet/eventq/config/*.yml /opt/collabnet/mongodb /opt/collabnet/rabbitmq /tmp/backup_dir
   ```` -->

On sites running TeamForge 16.10 or later versions:

1. Back up the `/opt/collabnet/teamforge/var` directory.
   :::tip
   Do this on both the TeamForge Application and Database servers in case you have them running on two separate servers.
   :::
   ```shell
   mkdir -p /tmp/backup_dir
   cp -Rpfv /opt/collabnet/teamforge/var /tmp/backup_dir
   ````

2. Back up the `/opt/collabnet/gerrit` directory if you have Git integration.
   :::tip
   Do this on the server that hosts the TeamForge-Git integration services.
   :::
   ```shell
   mkdir /tmp/backup_dir/gerrit
   cp -Rpfv /opt/collabnet/gerrit/ /tmp/backup_dir/gerrit
   ````

## Back up and Restore Review Board Database and Data Directories
See [Back up and Restore Review Board Database and Data Directories](../upgradepages/backupandrestore#backuprb)

## Set up the site-options.conf File and Provision Services
1. Log on to the TeamForge Application Server (server-01), set up the `site-options.conf` file, and provision the services.
   ```shell
   vi /opt/collabnet/teamforge/etc/site-options.conf
   ````

   ### host:SERVICES Token
   ```conf
   server-01:SERVICES=ctfcore mail etl service-monitor search subversion codesearch cliserver gerrit gerrit-database  binary binary-database reviewboard reviewboard-database reviewboard-adapter cliserver
   server-02:SERVICES=ctfcore-database ctfcore-datamart
   ````
 
   ### host:PUBLIC_FQDN Token
   ```conf
   server-01:PUBLIC_FQDN=my.app.domain.com
   ````

   ### Configure the Oracle Database Tokens
   <!--#oraclesiteoptiontokens-->
   Configure the Oracle database name, usernames and passwords as configured on the Oracle Database Server.
   * Database type is `oracle` (`DATABASE_TYPE=oracle`)
   * Database service name is the host name of the Oracle Database Server (for example, `DATABASE_SERVICE_NAME=cu349.maa.collab.net`)
   * Reports database service name is the host name of the server where the datamart is (for example, `REPORTS_DATABASE_SERVICE_NAME=cu349.maa.collab.net`)

   ```conf
      DATABASE_TYPE=oracle

      # Adjust usernames/passwords to match what has been configured on the database server.
      DATABASE_USERNAME=ctfuser
      DATABASE_PASSWORD=ctfpwd
      DATABASE_READ_ONLY_USER=ctfrouser
      DATABASE_READ_ONLY_PASSWORD=ctfropwd
      DATABASE_NAME=orcl
      DATABASE_SERVICE_NAME=
   ​
      # Adjust usernames/passwords to match what has been configured on the database server.
      REPORTS_DATABASE_USERNAME=ctfrptuser
      REPORTS_DATABASE_PASSWORD=ctfrptpwd
      REPORTS_DATABASE_NAME=orcl
      REPORTS_DATABASE_READ_ONLY_USER=ctfrptrouser
      REPORTS_DATABASE_READ_ONLY_PASSWORD=ctfrptropwd
      REPORTS_DATABASE_SERVICE_NAME=
   ````

   Save the `site-options.conf` file.
   
   For further customization of your site configuration (SSL settings, password policy settings, PostgreSQL settings, LDAP settings and so on): <Siteoptionsconfigoracle />

2. <Deployserviceswithnote />

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

## Update the Webhook Events and Create New Webhooks

<!-- Artifact artf393556 : WebR migration documentation for Oracle -->
While TeamForge 19.2 (and earlier) offered simple webhooks support, TeamForge 19.3 (and later) offer pre-submit and post-submit webhooks. New webhook events have been added and webhook event names have been updated as well. 

If you are upgrading from TeamForge 19.2 (or earlier) to TeamForge 19.3 (or later), you must truncate the `webhook` and `webhook_event` tables on the Oracle database server, insert the new webhook events into the `webhook_event` table and create new webhooks. 

1. Note down the list of webhooks you have before truncating the `webhooks` table. You may take a screenshot of the webhook configuration just in case. 
2. Run the following queries to back up the `webhook` and `webhook_event` TeamForge tables. 
   ```shell
   create table webhookbackup as select * from webhook;
   create table webhookeventsbackup as select * from webhook_event;
   ````
3. Truncate the `webhook` and `webhook_event` TeamForge tables.
   ```shell
   truncate table webhook;
   truncate table webhook_event;
   ````
4. Insert the new TeamForge webhook events into the `webhook_event` table. Run the following queries one-by-one in order on the Oracle database server. 
   ```shell
   insert  into  webhook_event  (surrogate_id,webhook_surrogate_id,event_type,  event_type_name)  select  webhook_event_key_seq.nextval,0,'Teamforge.Artifact.Create','TOPIC'    from  dual  where  Not  exists  (select  1  from  webhook_event  where  event_type='Teamforge.Artifact.Create');

   insert  into  webhook_event  (surrogate_id,webhook_surrogate_id,event_type,  event_type_name)    select  webhook_event_key_seq.nextval,0,'Teamforge.Artifact.Update','TOPIC'  from  dual  where  Not  exists  (select  1  from  webhook_event  where  event_type='Teamforge.Artifact.Update');

   insert  into  webhook_event  (surrogate_id,webhook_surrogate_id,event_type,  event_type_name) select  webhook_event_key_seq.nextval,0,'Teamforge.Artifact.Move','TOPIC'  from  dual  where  Not  exists  (select  1  from  webhook_event  where  event_type='Teamforge.Artifact.Move');
   
   insert  into  webhook_event  (surrogate_id,webhook_surrogate_id,event_type,  event_type_name) select  webhook_event_key_seq.nextval,0,'Teamforge.Artifact.Clone','TOPIC'    from  dual  where  Not  exists  (select  1  from  webhook_event  where  event_type='Teamforge.Artifact.Clone');
   
   insert  into  webhook_event  (surrogate_id,webhook_surrogate_id,event_type,  event_type_name) select  webhook_event_key_seq.nextval,0,'Teamforge.Artifact.Delete','TOPIC'    from  dual  where  Not  exists  (select  1  from  webhook_event  where  event_type='Teamforge.Artifact.Delete');

   insert  into  webhook_event  (surrogate_id,webhook_surrogate_id,event_type,  event_type_name) select  webhook_event_key_seq.nextval,0,'Teamforge.Artifact.Create.Presubmit','SYNC'   from  dual  where  Not  exists  (select  1  from  webhook_event   where      event_type='Teamforge.Artifact.Create.Presubmit');

   insert  into  webhook_event  (surrogate_id,webhook_surrogate_id,event_type,  event_type_name) select  webhook_event_key_seq.nextval,0,'Teamforge.Artifact.Update.Presubmit','SYNC'   from  dual  where  Not  exists  (select  1  from  webhook_event  where  event_type='Teamforge.Artifact.Update.Presubmit');

   insert  into  webhook_event  (surrogate_id,webhook_surrogate_id,event_type,  event_type_name) select  webhook_event_key_seq.nextval,0,'Teamforge.Artifact.Move.Presubmit','SYNC'  from  dual  where  Not  exists  (select  1  from  webhook_event   where  event_type='Teamforge.Artifact.Move.Presubmit');

   insert  into  webhook_event  (surrogate_id,webhook_surrogate_id,event_type,  event_type_name) select  webhook_event_key_seq.nextval,0,'Teamforge.Artifact.Clone.Presubmit','SYNC'  from  dual  where  Not  exists  (select  1  from  webhook_event   where  event_type='Teamforge.Artifact.Clone.Presubmit');

   insert  into  webhook_event  (surrogate_id,webhook_surrogate_id,event_type,  event_type_name) select  webhook_event_key_seq.nextval,0,'Teamforge.Artifact.Delete.Presubmit','SYNC'  from  dual  where  Not  exists  (select  1  from  webhook_event  where  event_type='Teamforge.Artifact.Delete.Presubmit');

   ````
5. Run the following query to verify the events inserted into the `webhook_event` table. 
   ```shell
   select event_type,  event_type_name from webhook_event;
   ````

   The output lists the events:

   ![Webhook events in TeamForge](/docs/assets/images/webhookevents.png)

## Verify TeamForge Upgrade

* <Verify_installation_upgrade />

<Postupgradetasksoracle />

[^1]: TeamForge VAR::identifiers.teamforge supports Review Board VAR::identifiers.review_board on VAR::identifiers.rhel_centos_now and Review Board 2.5.6.1 on VAR::identifiers.rhel_centos_past.
[^2]: `reviewboard-adapter` must always be installed on the TeamForge Application Server.
