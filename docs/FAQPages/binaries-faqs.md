---
Summary: This section provides solutions to common issues with TeamForge-Binary integrations.
category: ''
id: binaries-faqs
keywords:
- FAQ
- frequently asked questions
- binary
- ssl
lastUpdatedAt: Dec 11, 2019
product: teamforge
tags:
- ctf_20.0
- ctf_19.0
- faq
- binaries
title: FAQs on Binaries
---


## The TeamForge-Binary integration is down after enabling SSL. What should I do?

TeamForge-Binary integration is found to be down soon after enabling SSL on sites which initially had SSL disabled. You must update the base URL, go URL and end point URLs stored in Postgres to access your Binary servers.

Run the following query with the psql-wrapper script (/opt/collabnet/teamforge/runtime/scripts/psql-wrapper) to update the base URL, go URL and end point URLs.

```shell
update integrated_application set base_url='https://<url>', go_url='https://<url>', end_point='https://<url>' where name='Binaries';
````

:::note
In the above query, replace \<url\> with valid base URL, go URL and end point URL for your site. The URLs must use https as illustrated above.
:::


## Binary initialization fails at the end of provision. Why? 

If SOAP services are not completely up and running during service startup, binary initialization fails at the end of provision. As a workaround, reinitialize binary with this command:
 
```shell
teamforge reinitialize -s binary
````



