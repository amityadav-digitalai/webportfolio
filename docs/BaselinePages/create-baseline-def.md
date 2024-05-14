---
Summary: A Baseline Definition is the filter criteria that is used to create a Baseline
  from a set of selected configuration items such as Tracker Artifacts, Documents,
  Source Code Repositories (only Git and Subversion are supported), File Releases,
  and Binaries (only Nexus binaries are supported) in a given TeamForge project.
category: ''
id: create-baseline-def
keywords:
- create project baseline definition
lastUpdatedAt: Oct 6, 2020
product: teamforge
tags:
- baseline
- ctf_18.2
- ctf_18.3
- ctf_19.0
- ctf_20.3
title: Create, View, and Delete Baseline Definitions
---

import Baselinedefconfig1 from '../_partials/baseline/_baseline-def-config-1.md'

**Prerequisite**: You must have **Create/View Baseline** permission to both create and view Baseline Definitions. You need **View Only** permission to only view Baseline Definitions.

## Create Baseline Definitions {#withoutBDef}

You can create <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline_definition">Baseline Definitions</a> from either the **Create Definition** page or a **Create Baseline** page.

### Create Baseline Definition from Create Definition Page {#BDeffromBDefpage}

1. Log on to TeamForge and select a project from **My Workspace**.

2. Click **Baselines** from the **Project Home** menu. The **Baselines** list view is shown by default.  

3. Click **Definitions** from the side navigation menu.

4. Click **New Definition** on the Definitions list view.

   :::note
   Only Baseline Definitions are listed in baseline definitions list. To access/view the Project Baseline Definition, click **Settings** on the left navigation menu and select **Project Baseline Definition**.
   :::

   ![](/docs/assets/images/190_baselinedef_button.png)

5. Enter values for the required fields on the **Create Definition** page.

   ![](/docs/assets/images/190_create_definition.png)

6. Select one or more Baseline Definitions from the **Include Definitions** drop-down list. Click the selected Baseline Definition to view it.
   
   :::note
   **Include Definitions** drop-down list lists all the Baseline Definitions in a project.
   :::

   You can search for the Baseline Definitions that are not listed in the **Include Definitions** drop-down list. Only two selected Baseline Definitions can be shown at a time. To see the complete list of selected Baseline Definitions, click **+ More** in the **Include Definitions** drop-down list.

7. Define the filter criteria.

   You can define the filter criteria for Trackers, Documents, Source Code Repositories, File Releases and Binaries. Select the following tabs to view instructions.

   <Baselinedefconfig1 />


8. Select one or more <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.external_baselines">external baselines</a> from the **External Baselines** drop-down list.

   ![](/docs/assets/images/external-baselines.png)

   Click the selected External Baseline to view it.

   You can search for the External Baselines that are not listed in the **External Baselines** drop-down list. Only two selected External Baselines can be shown at a time. To see the complete list of External Baselines, click **+ More** in the **External Baselines** drop-down list.

9. Click **Create Definition**.

 Once created, the new Baseline Definition is added to the list of Baseline Definitions.

   ![](/docs/assets/images/baseline-definition-list.png)

### Create Baseline Definition from Create Baseline Page {#BDeffromcreatebaselinepage}

1. Log on to TeamForge and select a project from **My Workspace**.

2. Click **Baselines** from the **Project Home** menu. The **Baselines** list view is shown by default.

3. Click **New Baseline** on the baseline list view. 

   ![](/docs/assets/images/baseline-new.png)   

4. Enter values for the required fields.
   ![](/docs/assets/images/create-baseline.png)
   
5. Define the filter criteria. 
   
   You can define the filter criteria for Trackers, Documents, Source Code Repositories, File Releases and Binaries. Select the following tabs to view instructions.

   <Baselinedefconfig1 />


6. Select one or more <a href="#" data-toggle="tooltip" data-original-title="site.data.glossary.external_baselines">External Baselines</a> from the **External Baselines** drop-down list.

   ![](/docs/assets/images/external-baselines.png)

   Click the selected External Baseline to view it.

   You can search for the <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.external_baselines">External Baselines</a> that are not listed in the **External Baselines** drop-down list. Only two selected External Baselines can be shown at a time. To see the complete list of External Baselines, click **+ More** in the **External Baselines** drop-down list. 

7. Click **Preview to Create** to preview the Baseline Definition. 
   
   ![Preview Baseline](/docs/assets/images/baseline-preview.png)
      
8. Click **Save as Definition** to save the Baseline Definition.

   ![](/docs/assets/images/save-as-def-name.png)

   :::note
   By default, the Baseline title is shown in the **Name** field.
   :::

1. Either enter a new name for the Baseline Definition or leave the <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline">Baseline</a> title in the **Name** field.

2.  Click **Save**. If the entered name already exists, you are prompted to enter a different name.

    ![](/docs/assets/images/save-as-def-name-alert.png) <br></br>

    Once saved, the new Baseline Definition is added to the list of Baseline Definitions.

    ![](/docs/assets/images/baseline-definition-list.png)

3.  If required, click **Back** to edit the Baseline Definition on the **Create Baseline** page.


## Create Baseline Definition from an Existing Baseline Definition  

You can create an Baseline Definition using an already existing Baseline Definition from the **Create Baseline** page.

### Create Baseline Definition from Create Baseline Page

Instead of creating an <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline_definition">Baseline Definition</a> from the ground up, you can build one from an already existing Baseline Definition.

1. Repeat steps 1 through 4 as discussed earlier in [Create Baseline Definition from Create Baseline Page](../BaselinePages/create-baseline-def#BDeffromcreatebaselinepage).

2. Select a Baseline Definition from the **Definition** drop-down list. The selected Baseline Definition's filter criteria are auto-populated.

3. Review the filter criteria and modify the filters, if required. 

4. Repeat steps 5 through 10 as discussed earlier in [Create Baseline Definition from Create Baseline Page](../BaselinePages/create-baseline-def.html#BDeffromcreatebaselinepage) and create the new Baseline Definition.

   Once saved, the new Baseline Definition is added to the list of Baseline Definitions.

   ![](/docs/assets/images/baseline-definition-list.png)


## View Baseline Definition {#viewbaselinedef}

1. Log on to TeamForge and select a project from **My Workspace**.

2. Click **Baselines** from the **Project Home** menu. 

3. Click **Definitions** from the side navigation menu.

4. Select a <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline_definition">Baseline Definition</a> from the list to view its details.

   ![View Baseline Definition](/docs/assets/images/203-view-baseline-def.png)

## Delete Baseline Definition {#deletedef}
<!-- [artf415450] Documentation for artf415198 : Delete a Baseline Definition -->

You can delete a baseline definition as long as you have the `DELETE/VIEW BASELINE DEFINITION` permission assigned to you. Existing baselines, if any, created from deleted baseline definitions, are not affected in any way.  

Users with the `DELETE/VIEW BASELINE DEFINITION` permission can:

* Search for baseline definitions
* View baseline definitions
* Delete baseline definitions

You can delete baseline definitions—only on a case-by-case basis—from the **View Baseline Definition** page.

To delete a baseline definition:

1. Select a baseline definition to view it.
2. Click the **Delete** icon on the **View Baseline Definition** page.

   ![Delete icon to delete the baseline definition](/docs/assets/images/203-deletedef-01.png)

3. A confirmation message appears.

   ![The reason for deleting the baseline definition](/docs/assets/images/203-deletedef-02.png)

4. You must type a reason to delete the baseline definition and click **Yes, I’m sure**. The comment/reason you type is stored in the database and is associated with the baseline definition you are trying to delete.

   The baseline definition is deleted.

An email notification is sent to the user that created the baseline definition.
