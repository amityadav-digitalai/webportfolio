---
Summary: Set the interval at which you want yourTeamForge site's data extracted to
  the datamart from which reports are generated.
category: ''
id: reports-schedule
keywords:
- extract data for reporting
- extract report data
lastUpdatedAt: Mar 16, 2018
product: teamforge
tags:
- installation
- upgrade
- reports
- site_admin_tasks
- datamart
- etl
title: Schedule Data Extraction for Reporting
---


Each extract-transform-load (ETL) job consists of extracting the data from the production database, transforming it to support reporting, and loading it into the datamart.

By default, this is done every night at 2:30 a.m., by the host's local clock.


 1. Open the `site-options.conf` file, the master configuration file that controls your TeamForge site.

    ```shell
    vi /opt/collabnet/teamforge/etc/site-options.conf
    ````

    :::note
    `vi` is an example. Any *nix text editor will work.
    :::

 2. Set the _ETL_JOB_TRIGGER_TIME_ variable to the interval at which you want ETL jobs to run. For example, a value of `0 0/15 * * * ?` will run an ETL job every 15 minutes.


 3. Review the variables you have changed, then save the `site-options.conf` file.

