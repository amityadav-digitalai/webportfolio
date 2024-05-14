---
Summary: You can enable caching for TeamForge Baselines in case you have a large number
  of binary (Nexus) repositories. Caching Nexus repositories enables fast loading
  of Nexus repositories when you try to create or modify the binary filter criteria
  for baselines or baseline definitions.
category: ''
id: binary-repo-caching
keywords:
- binary
- repositories
- caching
lastUpdatedAt: Jun 22, 2020
product: teamforge
tags:
- baseline
- ctf_20.2
- site_admin_tasks
- binaries
title: Enable Caching for Baselines
---
<!-- "Enable Caching for Baselines" topic is suppressed because of https://forge.collab.net/sf/go/artf424148 -->

import ProvisionService from '../_partials/installupgrade/_deploy_services_without_note.md'

Loading a large number of Nexus repositories while creating baslines or baseline definitions can last for longer durations—typically slowing down the entire process itself. 

By enabling caching for Baselines (which is disabled by default) and setting up webhooks for the Nexus repositories, you can quickly load the list of Nexus repositories available to filter when you create or modify baselines or baseline definitions.

1. Run the following [adhoc database query](../siteadmin-adhocquery) in TeamForge's WEBR data store to get the webhook endpoint URL for Nexus and keep it handy for later use.
   ```sql
   select 'https://{DomainName}/inbox/v4/Nexus.Repo.Updates/' || publisher_id from publisherv4 where publisher_name='Nexus';
   ````
<!-- see https://forge.collab.net/sf/go/artf424148    -->
<!-- 2. Enable caching for baselines by setting the [BASELINE_CACHE_ENABLED](../siteoptiontokens#BASELINE_CACHE_ENABLED) `site-options.conf` token.
   ```shell
   BASELINE_CACHE_ENABLED=true
   ```` -->
2. <ProvisionService />

3. Set up webhooks one-by-one for every Nexus repository that is linked to TeamForge.
   1. Log on to the Nexus server. 
   2. Go to **Server Administration and Configurations > System > Capabilities**. 
   3. Click **Create Capability**. 
   4. Select the **Webhook Repository** capability type. 
   5. Select the repository you want. 
   6. Select the `Asset` and `Component` event types. 
   7. Copy and paste the webhook endpoint URL for Nexus (see Step 1) in the `URL` field and click **Create Capability**. 

This concludes the process of enabling caching for Baselines and setting up the webhooks for Nexus repositories. 
