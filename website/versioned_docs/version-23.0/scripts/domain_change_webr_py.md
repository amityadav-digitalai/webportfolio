---
Summary: The domain_change_webr.py script is used to change the domain name or host
  name of the subscriber in the TeamForge Webhooks-based Event Broker database.
category: ''
id: domain_change_webr_py
keywords:
- webr domain change
lastUpdatedAt: June 14, 2019
product: teamforge
tags:
- ctf_19.1
- upgrade
- scripts
- site_admin_tasks
title: domain_change_webr.py
---


## Usage
Execute this script with a command like this:

```shell
[RUNTIME_DIR]/scripts/domain_change_webr.py [old_domain] [new_domain]
````

:::note
The new domain name must match the value defined for the [PUBLIC_FQDN](../siteconfigtokens#hostpublic_fqdn) token in the `site-options.conf` file.
:::

## Parameters

<table>
	<tr>
		<th>Parameter</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>old_domain</td>
		<td>Old domain name</td>
	</tr>
	<tr>
		<td>new_domain</td>
		<td>New domain name</td>
	</tr>	
	<tr>
		<td>--help</td>
		<td>To view help information for the script.</td>
	</tr>	
</table>


