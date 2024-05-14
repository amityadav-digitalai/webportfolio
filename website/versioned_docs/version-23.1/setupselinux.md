---
Summary: If SELinux is active on the server that runs your TeamForge site, configure
  it to allow the services that TeamForge requires.
category: ''
id: setupselinux
keywords:
- selinux
- SELinux
- security policies
- permissive
- disabled
- enabled
lastUpdatedAt: Jul 17, 2020
product: teamforge
tags:
- ctf_20.2
- installation
- upgrade
- selinux
- security
title: Set up SELinux
---

import ProvisionService from './_partials/installupgrade/_deploy_services_without_note.md'
import Stopteamforgeonallserversdistributed from './_partials/installupgrade/_stop_teamforge_on_all_servers_distributed.md'
import Restart_teamforge from './_partials/installupgrade/_restart_teamforge.md'

<!-- % capture setupselinux % -->
![](/docs/assets/images/status-success-small.png) In case of same hardware upgrade using RHEL, it is recommended to upgrade the OS to VAR::identifiers.rhel_centos_now.<br></br>
![](/docs/assets/images/status-success-small.png) Log on as root or use a root shell while setting up SELinux.
<!-- % endcapture %
% include callout.html type="primary" content=setupselinux % -->

## TeamForge SELinux Policies

TeamForge implements SELinux policies for most of its services such as JBoss, Apache, ETL, Tomcat and so on. However, you can use these instructions to revert these policies (not recommended) if required.

Here's a list of SELinux modules that are implemented (use the `semodule -l|grep tf_` command to see the list of TeamForge SELinux modules):

* tf_apache
* tf_branding
* tf_daemon-base
* tf_etl
* tf_integration-base
* tf_jboss
* tf_phoenix
* tf_postgresql
* tf_runtime-base
* tf_subversion
* tf_tomcat
<!-- * tf_cvs -->

While you can revert these policies, you can contact [Digital.ai Support](https://support.digital.ai) to get help in fixing the issue with TeamForge SELinux policies.

* To Revert the TeamForge SELinux Policies:
  ```shell
  /opt/collabnet/teamforge/runtime/scripts/fix_data_selinux_permissions.sh
  ````
* If JBoss is using agents such as takipi, run the following command to apply selinux context for the takipi agent:
  ```shell
  semanage fcontext --add -t tf_jboss_rw_t '/opt/takipi(/.*)?'
  restorecon -R /opt/takipi
  ````

## Do This If SELinux Is `disabled`
Verify SELinux mode using `getenforce` command. Do this if you have SELinux running in `disabled` mode.

1. <Stopteamforgeonallserversdistributed />
   <!-- % include installupgrade/stop_teamforge_on_all_servers_distributed.html % -->
2. Edit the file `/etc/sysconfig/selinux` and set `SELINUX=enforcing`.
3. Turn off TeamForge startup on boot.
   ```shell
   chkconfig collabnet off
   ````
4. Reboot the server and verify if SELInux is set to `enforcing` mode.
   ```shell
   getenforce
   ````
5. Turn on TeamForge startup on boot.
   ```shell
   chkconfig collabnet on
   ````
6. Apply TeamForge SELinux policies.
   ````shell
   teamforge apply-selinux
   ````
7. <ProvisionService />
   <!-- % include installupgrade/deploy_services_without_note.html % -->

## Do This If SELinux Is `permissive`
Verify SELinux mode using `getenforce` command. Do this if you have SELinux running in `permissive` mode.

1. Set SELinux to run in `enforcing` mode again.
   ```shell
   setenforce 1
   ````

2. <Restart_teamforge />
   <!-- % include installupgrade/restart_teamforge.html % -->