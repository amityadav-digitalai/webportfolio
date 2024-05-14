---
Summary: Create a Baseline when you accomplish specific milestones in your project
  or when you release or deliver a product. You can create a Baseline from either
  a Baseline Definition or from the ground up.
category: ''
id: create-baseline
keywords:
- creating baseline
lastUpdatedAt: Oct 6, 2020
product: teamforge
tags:
- baseline
- ctf_18.2
- ctf_18.3
- ctf_19.0
- ctf_19.2
- ctf_19.3
title: Create and View Baselines
---

import Baselineconfig1 from '../_partials/baseline/_baseline-config-1.md'
import Exporttoexcel from '../_partials/baseline/_exporttoexcel.md'

**Prerequisite**: You must have **Create/View Baseline** permission to both create and view Baselines. **View Only** permission allows you to just view the Baselines.


## Save a Draft of Baselines

You can now save a draft of the baseline that's being created. Use the **Save as Draft** button in the **Create Baseline** page to save a draft of the baselines that are being created. 

Once saved, you can edit or delete draft baselines at a later point in time.

![Save as Draft Button](/docs/assets/images/save-as-draft-button.png)

You can view the list of draft baselines by selecting **Draft** from the left navigation menu. The total number of draft baselines is shown next to the **Draft** option within parenthesis `()`.

![List of Draft Baselines](/docs/assets/images/draft-baselines.png)

## Create Baselines {#baselinewithoutBDef}

To create a <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline">Baseline</a>:

1. Log on to TeamForge and select a project from **My Workspace**.
2. Click **Baselines** from the **Project Home** menu.
3. Click **New Baseline**.   
   ![](/docs/assets/images/baseline-new.png)
4. Enter values for the required fields such as **Title**, **Description** and **Category**.
   ![](/docs/assets/images/create-baseline.png)
5. Define the filter criteria.

   You can define the filter criteria for Trackers, Documents, Source Code Management, File Releases and Binaries. Select the following tabs to view the instructions.

   <Baselineconfig1 />

   <br></br>
   <div class="panel panel-info">
   <div class="panel-heading">Use an Existing Baseline Definition</div>
   <div class="panel-body" markdown="1">
   Instead of defining the filter criteria from the ground up, you can use the **Definition** drop-down list to select an existing <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline_definition">Baseline Definition</a> and create an <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline">Baseline</a>. 

   Select a Baseline Definition from the **Definition** drop-down list. The selected Baseline Definition's filter criteria are auto-populated.

   Review the filter criteria and modify the filters, if required.
   </div>
   </div>

6. Select one or more <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.external_baselines">external baselines</a> from the **External Baselines** drop-down list.

   ![](/docs/assets/images/external-baselines.png)

   * You may click the selected external baselines to view them.
   * You can search for the external baselines that are not listed in the **External Baselines** drop-down list.
   * Only two selected external baselines can be shown at a time. To see the complete list of selected baseline definitions, click **+ More** in the **External Baselines** drop-down list.
   
7. Click **Preview to Create** to preview the Baseline. 

   ![Preview Baseline](/docs/assets/images/baseline-preview.png)

8. Click **Create Baseline** to save the Baseline.

   Once created, the new Baseline is added to the list of Baselines.

   ![](/docs/assets/images/baseline-list.png)
   
9.  If required, click **Back** to edit the Baseline on the **Create Baseline** page.


**Refresh Baseline Status**

For a baseline including configuration items with large volume of data, there would be a delay in taking the snapshot of the configuration items. In such cases, a "Click to refresh" link is provided to refresh the status of the baseline being created.

![Click to refresh the baseline status](/docs/assets/images/refresh-baseline-status.png)

**Auto Refresh Baselines List Page**

The baselines list page is automatically refreshed every one minute until the baselines (with the status "Creation In Progress") in a specific project are created. You can continue to use the **Click to refresh** link to manually refresh the baseline(s).

## Create a New Baseline from Baseline Definition {#createbaselinefromBDef}

1. Log on to TeamForge and select a project from **My Workspace**.

2. Click **Baselines** from the **Project Home** menu. 

3. Click **Definitions** from the side navigation menu.

4. Select a <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline_definition}}">Baseline Definition</a> from the list to view its details.

   ![](/docs/assets/images/view-baseline-def.png)

5. Click **Create Baseline** on the **View Baseline Definition** page to create a new Baseline. For more information, see [Create Baselines](../BaselinePages/create-baseline#baselinewithoutBDef).

For a baseline including configuration items with large volume of data, there would be a delay in taking the snapshot of the configuration items. In such cases, a "Click to refresh" link is provided to refresh the status of the baseline being created.

![Click to refresh the baseline status](/docs/assets/images/refresh-baseline-status.png)

The next step is to review Baselines. Select a submitted Baseline to proceed with the baseline review. For more information, see [Review Baselines](../BaselinePages/baseline-review-approval-workflow).

## Create New Baselines from Approved Baselines {#createbaselinefromappbaselines}

You can now create a new Baseline from an approved Baseline.  

:::note
Project Baselines cannot be cloned.
:::

To create a new Baseline from an approved Baseline, follow these steps:

1. Log on to TeamForge and select a project from **My Workspace**.

2. Click **Baselines** from the **Project Home** menu. 

3. Select an approved Baseline from the list of baselines.

4. Click **Create Baseline**.

   ![Create Baseline from Approved Baseline](/docs/assets/images/create-baseline-from-appbaseline.png)

5. Enter the name and the description for the new Baseline.

   :::note
   All but the name and the description fields are auto-filled with data from the source Baseline that’s being cloned.
   :::

6. Modify the fields and the filter criteria, if required.

7. Click **Preview to Create**.

8. Click **Create Baseline** on the **Preview Baseline** page.

The new Baseline is created.

## View the Baseline {#viewbaseline}

You can view a Baseline, after it is approved or rejected. In other words, you cannot edit the Baseline (both system-defined and custom fields) after its status changes to **Approved** or **Rejected**.

![](/docs/assets/images/view-approved-baseline.png)

<!--artf390774 - TeamForge 19.3-->
### Export Approved Baselines to Excel

<Exporttoexcel />  

You can now export the approved Baselines as Excel reports using the "Export to Excel" option on the **View Baseline** page. 

To export a Baseline as an excel report, select the approved Baseline on the baseline list view and click the **Export to Excel** button on the **View Baseline** page.

![\"Export to Excel\" option for approved Baselines](/docs/assets/images/export-appbaseline-to-excel.png)

The name of the downloaded excel file has the format "[baseline_id]baseline_name". For instance, if you export the baseline "export_baseline" with the id "base1015", the name of the result excel file reads as "[base1015]export_baseline".

If the baseline name has a special character other than an underscore ("\_") or if the baseline has a space in its name, it will be replaced with an underscore ("\_") in the name of the downloaded excel file. For example, when the baseline "test baseline for export#1" is exported, the downloaded excel file name reads as "[base1033]test_baseline_for_export_1". 

The excel file has worksheets for each component included in the exported Baseline. Each worksheet has as many number of columns as the manifest fields for each component.
<!--artf390774 - TeamForge 19.3-->

## Monitor a Baseline {#monitoritemlevelbaseline}

<a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline">Baselines</a> created by a user is monitored by the user by default. To monitor Baselines created by other users, click the **Start Monitoring** icon ![](/docs/assets/images/monitor-button.png). To stop monitoring a Baseline, click the **Stop Monitoring** ![](/docs/assets/images/monitored-button.png) icon.
