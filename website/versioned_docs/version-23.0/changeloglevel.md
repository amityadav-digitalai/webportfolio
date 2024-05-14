---
Summary: Set the logging level appropriately to enable logging in vamessages.log.
category: ''
id: changeloglevel
keywords:
- roles
- rbac
lastUpdatedAt: Mar 2, 2018
product: teamforge
tags:
- site_admin_tasks
- installation
- config_files
title: Change the Logging Level on Your Site
---



1. Edit `$RUNTIME/jboss/bin/jboss-cli.sh` to enable logging in `vamessages.log`.

:::note
You need not restart the site for JBoss to pick up these changes.
:::


2. To change log levels, as a root user, perform the following:

   1. To enable debug logging, run the following command: 

      ```shell
      /subsystem=logging/root-logger=ROOT:change-root-log-level(level=DEBUG)
      ````

   2. To disable debug logging, run the following command: 

      ```shell
      /subsystem=logging/root-logger=ROOT:change-root-log-level(level=INFO)
      ````
3. To change log levels using your LDAP credentials, perform the following:

   1. To enable debug logging, run the following command: 

      ```shell
      /subsystem=logging/logger=com.vasoftware:write-attribute(name="level", value="DEBUG")
      ````

   2. To disable debug logging, run the following command: 

      ```shell
      /subsystem=logging/logger=com.vasoftware:write-attribute(name="level", value="INFO")
      ````

   3. To enable trace logging for LDAP, run the following command: 

      ```shell
      /subsystem=logging/logger=org.jboss.security.auth.spi.LdapExtLoginModule:add(level=TRACE,handlers=["VAFILE"])
      ````

   4. To disable trace logging for LDAP, run the following command: 

      ```shell
      /subsystem=logging/logger=org.jboss.security.auth.spi.LdapExtLoginModule:remove()
      ````

      :::tip
      The LDAP debug output will be very limited unless you add \<module-option name=`throwValidateErrors` value=`true`\>\<\/\>to the entry for the corresponding log-in module.
      :::


<br></br>

* Change in log levels will not need any site restart and these changes will not survive the JBOSS restart.

* Changes made using CLI will survive a restart but not a runtime recreation.

:::note
Changes are immediately saved to `runtime/jboss/standalone/configuration/standalone-full`.xml and the file, `standalone-full.xml` is recreated every time the TeamForge runtime is rebuilt.
:::


 * To retain the configurations after the site restart, edit `$RUNTIME/jboss/standalone/configuration/standalone-full.xml`.

 * To make the configurations survive the recreate runtime, edit `$SITE_DIR/dist/conf-snippets/jboss/standalone-full.xml.d/20-standalone-full.xml.py`.