---
Summary: Here are some examples to cover the basic AngularJS customization use cases.
category: ''
id: teamforgeangularjscustomizationexamples
keywords:
- teamforge
- extend
- angularjs
- customize
- customization
- example
lastUpdatedAt: Mar 5, 2019
product: teamforge
tags:
- ctf_20.1
- extend_teamforge
- customize
- site_admin_tasks
title: AngularJS Customization Examples
---



## Introduction

Here you can find examples that use JavaScript/AngularJS, CSS, and images to customize the UI.

The examples provide the location of the jar file that you can download and alter it to your specific use case. Also, you can use the jar file **as-is** in your test/stage TeamForge instance to see it in action.

You can disable the customization by disabling the custom event handler.

:::note
The example customization jars discussed in here are intended for illustrative purposes only.
:::

## Basics

Before you begin:
 1. Identify the URL of the page that you want to customize.
    * If the URL starts with `<host>/ctf/...`, then you need the `ctf` module.
    * If the URL starts with `<host>/sf/...`, then you need the `saturn` module.
 2. For JSP pages, as you are targetting a specific page for customization, make sure you put the safety net around your js customization code.
 
    ```javascript
     var ctfModule = angular.module('saturn');

     ctfModule.run(['browserService', 'customizationService', 
       function (browserService, customizationService){

         if (browserService.getLocationContainsAction('STRING_WITH_PART_OF_THE_URL_WE_WANT_TO_CUSTOMIZE')) {
      
           // Your actual customization code goes here

         }

     }])
    ````
 
## Customization Example—Customize Images
This example illustrates how to replace an image and a small bit of CSS (to do the replacement). 

[Download](./downloads/ex01-image-customization.jar) the customization JAR file.

## Customization Example—JavaScript Alert

This example illustrates:
* the way to include custom JavaScript.
* that the custom JavaScript runs at the end.
* that custom JavaScript runs on **every** page.

As the custom JavaScript runs on every page, you need to safeguard it to execute **only** on the page you intend to customize.

[Download](./downloads/ex02-basic-javascript-alert.jar) the customization JAR file.

# Customization Example—AngularJS Availability Check

This example checks if the AngularJS is available and prints a message in the browser console. A nomral message if the AngularJS is enabled. If not, an error.

[Download](./downloads/ex03-angular-availability-check.jar) the customization JAR file.

# Customization Example—Remove a Button in a Full AngularJS Page

This example illustrates:
* how to hook into angular in a full AngularJS page.
* how to use safety check to do customization only on the page we intend.
* how to remove the **Delete** button from the **Project > Reports** page.

[Download](./downloads/ex04-custom-service-remove-button.jar) the customization JAR file.

