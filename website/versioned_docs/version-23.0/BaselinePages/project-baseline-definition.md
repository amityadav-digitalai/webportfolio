---
Summary: A Project Baseline Definition is the filter criteria that is used to create
  a baseline from a set of selected configuration items at the project level.
category: ''
id: project-baseline-definition
keywords:
- creating project baseline definition
- editing project baseline definition
lastUpdatedAt: Mar 26, 2019
product: teamforge
tags:
- baseline
- ctf_18.3 ctf_19.0
title: Project Baseline Definition
---

import Baselinedefconfig1 from '../_partials/baseline/_baseline-def-config-1.md'

**Prerequisite**: You must have **Project Baseline Definition** permission to view/access **Settings > Project Baseline Definition** and to create and edit a Project Baseline Definition.

![](/docs/assets/images/status-success-small.png) <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.project_baseline_definition">Project Baseline Definitions</a> can include one or more <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline_definition">Baseline Definitions</a> too, in which case the Project Baseline Definition would be derived as a union of the native filter conditions as defined in the project Baseline Definition and the filter conditions of the selected Baseline Definitions. <br></br>
![](/docs/assets/images/status-success-small.png) A TeamForge project can have only one Project Baseline Definition. <br></br>
![](/docs/assets/images/status-success-small.png) A Project Baseline Definition can be modified whenever required.<br></br>



## Create a New Project Baseline Definition {#createprojectbaselinedef}

You can now create a Project Baseline Definition for a given project. Unlike the Baseline Definitions, you can create only one Project Baseline Definition for a specific project. Based on the Project Baseline Definition, you can create Project Baselines.

To create a new Project Baseline Definition:

1. Log on to TeamForge.

2. Select a project from **My Workspace**.

3. Click **Baselines** from the **Project Home** menu.   

4. Click **Settings > Project Baseline Definition** from the side navigation menu.
   
   ![](/docs/assets/images/create-project-baseline-def.png)

5. Enter a name and description.

6. Select one or more Baseline Definition(s) from the **Include Definitions** drop-down list. Click the selected Baseline Definition to view it. 

   :::note
   **Include Definitions** drop-down list lists all the Baseline Definitions in a project.
   :::

   You can search for the Baseline Definitions that are not listed in the **Include Definitions** drop-down list. Only two selected Baseline Definitions can be shown at a time. To see the complete list of selected Baseline Definitions, click **+ More** in the **Include Definitions** drop-down list.
   
7. Define the filter criteria.

   You can define the filter criteria for Trackers, Documents, Source Code Repositories, File Releases and Binaries. Select the following tabs to view instructions.

   <Baselinedefconfig1 />

8. Select one or more [External Baselines][baseline-overview.html#externalbaseline] from the **External Baselines** drop-down list.

   ![](/docs/assets/images/external-baselines.png)

   You can click the selected External Baseline to view it.

   You can also search for the External Baselines that are not listed in the **External Baselines** drop-down list. Only two selected External Baselines can be shown at a time. To see the complete list of selected Baseline Definitions, click **+ More** in the **External Baselines** drop-down list.

9. Click **Save**.


## Edit Project Baseline Definition {#editprojectbaselinedef}

You can edit a Project Baseline Definition whenever required.

To edit an existing Project Baseline Definition:

1. Log on to TeamForge.

2. Select a project from **My Workspace**.

3. Click **Baselines** from the **Project Home** menu.

4. Click **Settings > Project Baseline Definition** from the side navigation menu.

   ![](/docs/assets/images/edit-project-baseline-def.png)

5. Modify the required fields and filter criteria.

6. Click **Save**.





<!--   * **Tracker Artifacts**

     1. Select the tracker type(s) from the **Tracker Type** drop-down list. These are the tracker types available in the project.
        ![](/docs/assets/images/baseline-tracker-type.png)

     2. Click **Add Filter(s)** and select the tracker type to set the required filters. The tracker type(s) that you have selected at step 1 are listed here.
        ![](/docs/assets/images/tracker-type-add-filter.png)       
        * _Attribute_ - Lists all the available attributes for the selected tracker type(s).
        * _Condition_ - Lists the conditions for the selected attribute type. 
        * _Value_ - Lists the values specific to the selected attribute type.
        
        Here's an example of how it appears after the filters are set. If you create the baseline at this point, it would create the baseline with completed user stories for the selected trackers.
         ![](/docs/assets/images/tracker-type-add-filter-2.png)

     3. Click **Add "AND" Condition** to concatenate more conditions to the filter criteria.
        ![](/docs/assets/images/baseline-tracker-type-add-condition.png)

     4. Repeat steps 2 and 3 until you've added the required filter criteria for Trackers.

     5. Click the delete button ( ![](/docs/assets/images/baseline-delete.png)) against the filter criteria that you want to delete.

     6. Select the planning folder. It is good enough that you select the parent/root planning folder to show all its child/sub folders. In this example, you can see all the sub folders of the root planning folder "Product 1".
        ![](/docs/assets/images/baseline-planning-folder-filter.png)

   If you want to see the list of artifacts in the tracker(s) selected, click the view link ( ![](/docs/assets/images/view-link.png)) in the **TRACKER/PLANNING FOLDER** section.

   You can narrow down the list by selecting the desired tracker and/or doing a keyword search in the preview pane.

   ![](/docs/assets/images/baseline-tracker-artifacts-preview.png)

   You can also do a keyword search by using the search ( ![](/docs/assets/images/search-baseline-button.png)) on the preview pane.

   
   * **Documents**

     1. Select the document folder path.

     2. Select the document version.

     3. Click **Add Filter(s)** to include the filter criteria.
        * _Attribute_ - Lists all the available attributes for documents.
        * _Condition_ - Lists the conditions for the selected attribute type. 
        * _Value_ - Lists the values specific to the selected attribute type.

     4. Click **Add "AND" Condition** to concatenate more conditions to the filter criteria.

     5. Repeat steps 3 and 4 until you've added the required filter criteria for Documents.
     
     6. Click the delete button ( ![](/docs/assets/images/baseline-delete.png)) against the filter criteria that you want to delete.

   If you want to see the list of documents in the document folder selected, click the view link ( ![](/docs/assets/images/view-link.png)) in the **DOCUMENTS** section.

   You can narrow down the list by selecting the desired document folder from its path in the preview pane.

   ![](/docs/assets/images/baseline-documents-preview.png)    

   You can also do a keyword search by using the search ( ![](/docs/assets/images/search-baseline-button.png)) on the preview pane.

   * **Source Code Management**

     1. Select the repository from the **Repo/Source Name** drop-down list. The repositories are grouped under the repository type which is either "Git" or "Subversion".

     2. Click **Add another Repo** to add more repository related filter criteria.

     3. Click the delete button ( ![](/docs/assets/images/baseline-delete.png)) against the filter criteria that you want to delete.


   * **File Release**

     Select the package or the release name from the **Package/Release Name** drop-down list.

     If you want to see the list of files in the releases selected, click the view link ( ![](/docs/assets/images/view-link.png)) in the **FILE RELEASE** section.

     You can narrow down the list by selecting the desired release in the preview pane.

     ![](/docs/assets/images/baseline-filerelease-preview.png)

     You can also do a keyword search by using the search ( ![](/docs/assets/images/search-baseline-button.png)) on the preview pane.


   * **Binaries**

     Select the server name or repository name from the **Server/Repository Name** drop-down list.-->

<!---->

<!--* **Tracker Artifacts**

     1. Select the tracker type(s) from the **Tracker Type** drop-down list. These are the tracker types available in the project.
        ![](/docs/assets/images/baseline-tracker-type.png)

     2. Click **Add Filter(s)** and select the tracker type to set the required filters. The tracker type(s) that you have selected at step 1 are listed here.
        ![](/docs/assets/images/tracker-type-add-filter.png)       
        * _Attribute_ - Lists all the available attributes for the selected tracker type(s).
        * _Condition_ - Lists the conditions for the selected attribute type. 
        * _Value_ - Lists the values specific to the selected attribute type.
        
        Here's an example of how it appears after the filters are set. If you create the baseline at this point, it would create the baseline with completed user stories for the selected trackers.
         ![](/docs/assets/images/tracker-type-add-filter-2.png)

     3. Click **Add "AND" Condition** to concatenate more conditions to the filter criteria.
        ![](/docs/assets/images/baseline-tracker-type-add-condition.png)

     4. Repeat steps 2 and 3 until you've added the required filter criteria for Trackers.

     5. Click the delete button ( ![](/docs/assets/images/baseline-delete.png)) against the filter criteria that you want to delete.

     6. Select the planning folder. It is good enough that you select the parent/root planning folder to show all its child/sub folders. In this example, you can see all the sub folders of the root planning folder "Product 1".
        ![](/docs/assets/images/baseline-planning-folder-filter.png)

   If you want to see the list of artifacts in the tracker(s) selected, click the view link ( ![](/docs/assets/images/view-link.png)) in the **TRACKER/PLANNING FOLDER** section.

   You can narrow down the list by selecting the desired tracker and/or doing a keyword search in the preview pane.

   ![](/docs/assets/images/baseline-tracker-artifacts-preview.png)

   You can also do a keyword search by using the search ( ![](/docs/assets/images/search-baseline-button.png)) on the preview pane.

   
   * **Documents**

     1. Select the document folder path.

     2. Select the document version.

     3. Click **Add Filter(s)** to include the filter criteria.
        * _Attribute_ - Lists all the available attributes for documents.
        * _Condition_ - Lists the conditions for the selected attribute type. 
        * _Value_ - Lists the values specific to the selected attribute type.

     4. Click **Add "AND" Condition** to concatenate more conditions to the filter criteria.

     5. Repeat steps 3 and 4 until you've added the required filter criteria for Documents.
     
     6. Click the delete button ( ![](/docs/assets/images/baseline-delete.png)) against the filter criteria that you want to delete.

   If you want to see the list of documents in the document folder selected, click the view link ( ![](/docs/assets/images/view-link.png)) in the **DOCUMENTS** section.

   You can narrow down the list by selecting the desired document folder from its path in the preview pane.

   ![](/docs/assets/images/baseline-documents-preview.png)    

   You can also do a keyword search by using the search ( ![](/docs/assets/images/search-baseline-button.png)) on the preview pane.

   * **Source Code Management**

     1. Select the repository from the **Repo/Source Name** drop-down list. The repositories are grouped under the repository type which is either "Git" or "Subversion".

     2. Click **Add another Repo** to add more repository related filter criteria.

     3. Click the delete button ( ![](/docs/assets/images/baseline-delete.png)) against the filter criteria that you want to delete.


   * **File Release**

     Select the package or the release name from the **Package/Release Name** drop-down list.

     If you want to see the list of files in the releases selected, click the view link ( ![](/docs/assets/images/view-link.png)) in the **FILE RELEASE** section.

     You can narrow down the list by selecting the desired release in the preview pane.

     ![](/docs/assets/images/baseline-filerelease-preview.png)

     You can also do a keyword search by using the search ( ![](/docs/assets/images/search-baseline-button.png)) on the preview pane.


   * **Binaries**

     Select the server name or repository name from the **Server/Repository Name** drop-down list.-->

<!--:::note
You can view the actual TeamForge objects (configuration items in terms of Baseline) from within TeamForge by clicking the respective links on the View Baseline page. However, TeamForge doesn’t show the objects, if you don’t have view permission.
:::-->