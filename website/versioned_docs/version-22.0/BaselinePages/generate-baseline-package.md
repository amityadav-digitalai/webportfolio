---
Summary: You can generate a downloadable package of physical project artifacts such
  as Tracker Artifacts, Documents, Source Code Repositories (only Git and Subversion
  are supported), File Releases, and Binaries (only Nexus binaries are supported)
  from an approved Baseline or a Project Baseline and share the package with your
  stakeholders.
category: ''
id: generate-baseline-package
keywords:
- create baseline packages
- download baseline packages
lastUpdatedAt: June 26, 2019
product: teamforge
tags:
- baseline
- ctf_19.0
- ctf_19.1
- ctf_19.2
title: Generate and Download Baseline Packages
---


**Prerequisite**: You must have **Package Generation** and **Package Download** permissions to create baseline packages and download baseline packages respectively.

## Generate Baseline Package

Once an <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline">Baseline</a> or a <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.project_baseline}}">Project Baseline</a> is approved, you can generate a <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline_package">Baseline Package</a> out of it and download the package.

When you generate a package, you may choose to include all or a subset of the <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.configuration_item">configuration items</a> (such as Tracker Artifacts, Documents, Source Code Repositories (only Git and Subversion are supported), File Releases, and Binaries (only Nexus binaries are supported)) from an approved Baseline or Project Baseline.<br/><br/>

To create a Baseline package:

1. Log on to TeamForge and select a project from **My Workspace**.
2. Click **Baselines** from the **Project Home** menu.
3. Select (click) an approved Baseline or Project Baseline from the list of baselines. 
4. Click **Generate Package**.
   ![Generate Package](/docs/assets/images/baseline-generate-package.png)
5. Type a name for the package.
6. Select one or more categories that the package must include.

   :::note
   The components available to select are those included in the Baseline or Project Baseline. You cannot generate more than one package for the same category (or the same set of components).
   :::

   ![Package name and Package criteria](/docs/assets/images/baseline-package.png)

   External Baselines, if part of a Baseline or a Project Baseline, can be included when you generate the Baseline/Project Baseline package.

   ![Include External Baselines in packages](/docs/assets/images/external-baseline-in-package.png)

   Such External Baselines, if included, are available as TAR files in the baseline package.

   ![External Baseline TAR Files](/docs/assets/images/external-baseline-tar.png)

1. Click **Generate**. A package is generated and listed on the **Packages** tab. 
   
   ![Baseline packages listed on the Packages tab](/docs/assets/images/package-list.png)

For a baseline including configuration items with large volume of data, there would be a delay in generating the package and the package status is shown as "Package is being generated". In such cases, a "Click to refresh" link is provided to refresh the status of the package being generated. 

![Click to refresh the package status](/docs/assets/images/refresh-package-status.png)

When there are packages with the status "Package is being generated" on the **Packages** tab, the packages list is automatically refreshed every one minute until all the packages are generated. You can continue to use the **Click to refresh** link to manually refresh the package(s).

**Known Issue**: Package generation fails for baselines that include documents with slash (\"/\") delimiter in the document name.

## Download Baseline Package

Once you generate a baseline package, you can download it to extract the package contents or share it with stakeholders, if required.

To download the required package, click the **Download** icon. A TAR file will be downloaded to the location specified in the baseline configuration file.

![Download icon to download the packages](/docs/assets/images/package-download.png)

## View Baseline Package

Once you download a package, you can extract the downloaded TAR file and view its contents. 

Example baseline package folder structure:

![Package Contents](/docs/assets/images/package-structure.png)

:::note
Starting from TeamForge 19.2, both index.html and index.pdf files are generated with the Baseline packages.
:::
  
Every baseline package contains the following files:

* The `index.pdf` and the `index.html` files that show the list of all Tracker Artifacts, Documents, File Releases, Source Code Repositories, Binaries, and External Baselines, if all or one or more of these components are included in the Baseline or Project Baseline from which the package was generated. 

  ![The \"index.pdf\" and the \"index.html\" files](/docs/assets/images/index_pdf_html_files.png)

* The JSON file for each configuration item included in the Baseline or Project Baseline from which the package is generated. Each JSON file contains the manifest fields and the response specific to that configuration item.

* The `packageInfo` JSON file that contains the package details such as package id, title, status, category selected during package generation, user name, package creation date, download path.

* A `files` folder that contains all the files attached to the configuration items included in the Baseline or Project Baseline from which the package was generated.

* A TAR file for each external baseline included in the Baseline or Project Baseline from which the package is generated.

  ![External Baseline TAR File](/docs/assets/images/external-baseline-tar.png)
