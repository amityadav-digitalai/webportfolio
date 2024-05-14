---
Summary: You can now import artifacts into TeamForge using the Excel/CSV tracker import
  function. Data from both Excel and CSV files can be imported.
category: ''
id: trackers-importingtrackerartifacts
keywords:
- importing tracker artifacts
- how to import tracker artifacts
lastUpdatedAt: Mar 6, 2019
product: teamforge
tags:
- project_member_tasks
- trackers
- tracker_artifacts
title: Import Tracker Artifacts
---


![](/docs/assets/images/status-success-small.png) You must have Site Administrator permission or Tracker Submit and Edit permission to import artifacts from Excel/CSV files. <br></br>
![](/docs/assets/images/status-success-small.png) The Excel/CSV template can be downloaded from the Import Artifact window. <br></br>
![](/docs/assets/images/status-success-small.png) If you want to create new artifacts, the following tracker fields are obsolutely required while importing data from Excel/CSV files: Artifact ID, Title, Priority, Status and Description. However, for updating an existing artifact, a valid "Artifact ID" is all that's required along with the data for other fields, which you may want to update. <br></br>
![](/docs/assets/images/status-success-small.png) The tracker import function supports upto 500 rows of data in Excel/CSV files. However, you can configure the number of artifacts that can be mass-imported. For more information, see [Configure Your Site's Settings](./siteadmin-configuresiteviaui#massimportartfslimit).

1. Click **Trackers** from the **Project Home** menu.
2. Select a tracker from the _TRACKERS_ tab.
3. Click **Import**.
   ![](/docs/assets/images/17-4-excelimport.png)
4. Click **CHOOSE FILE**. Browse and select the Excel/CSV file that contains the artifacts to be imported.
   ![](/docs/assets/images/import_artifact_functionality.png)
   :::tip
   You can select the **SAVE IMPORT FILE AS DOCUMENT** check box if you want to have the imported Excel/CSV file stored in **DOCUMENTS** for future use.
   :::
1. Click **Import**.

### Limitations

It's worth considering the following points while importing artifacts from Excel/CSV files:

* The Excel/CSV tracker import function allows importing data for any existing tracker fields even if the fields are disabled in the tracker.
* The **Import** button is not being localized on Chinese and Korean locales.
* The import instructions on the **Import Artifacts** page is not being localized on Chinese, Japanese and Korean locales.
* The Estimated Effort, Actual Effort, Remaining Effort, and Points fields can take "0" or any positive integer as values.
* Leave the "Comment text" field empty in the Excel/CSV files if you intent to create new artifacts.
* While it is expected that the "Priority" for an artifact can range from 0 to 5, the Excel/CSV import function allows any value for the "Priority" field to be imported. Make sure your Excel/CSV input file consists of "Priority" values ranging from 0 and 5.
