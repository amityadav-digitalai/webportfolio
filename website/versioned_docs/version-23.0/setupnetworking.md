---
Summary: After installing the operating system, prepare the networking connections
  and configuration for your TeamForge site.
category: ''
id: setupnetworking
keywords:
- networking setup
lastUpdatedAt: Mar 13, 2017
product: teamforge
tags:
- installation
- upgrade
- getting_started
title: Set up Networking for TeamForge
---


:::note 
You must have root access to all the hosts you will be setting up for your site.
:::

1. Use the `NetworkManager` to list the DNS servers you want to use for resolving Internet addresses.
2. Open the appropriate ports, and close all other ports. See [Port Requirements](./installpages/requirements.html#portreq).
3. Use the hostname command to verify that the machine name is resolvable on the network.
   ```shell
   hostname
   bigbox.supervillain.org
   ````
4. Use the `nslookup` command to verify that your hostname maps to the right IP address.
   ```shell
   nslookup bigbox.supervillain.org
   Server: 204.16.107.137
   Address: 204.16.107.137#53
   ````
   :::tip 
   If there is any doubt about what the system's real IP address is, use the /sbin/ifconfig command.
   :::
5. If you are installing behind a proxy, specify your proxy settings.
   ```shell
   export http_proxy=http://<PROXY_USERNAME>:<PROXY_PASSWD>@<PROXY_HOST>:<PROXY_PORT>
   export no_proxy=localhost,127.0.0.0/8,<hostname>
   ````
6. Use a tool such as **Nessus** to scan your server for potential vulnerabilities. See [Port Requirements][requirements.html#portreq] for detailed security recommendations.
