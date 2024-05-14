---
Summary: A Baseline or a Project Baseline, once created can be reviewed. During the
  review cycle, the Baseline or the Project Baseline undergoes various status transitions
  as defined by the Baseline Administrator.
category: ''
id: baseline-review-approval-workflow
keywords:
- review project baseline
- approval for project baseline
lastUpdatedAt: Apr 12, 2019
product: teamforge
tags:
- baseline
- ctf_18.2
- ctf_18.3
title: Review Baselines
---

<div class="prerequisite-callout">
  <p>Prerequisite: You must have <strong>Baseline Review</strong> permission to review a Baseline or a Project Baseline.</p>
</div>

## Baseline Review Process 

You can take an action on a <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline">Baseline</a> or a <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.project_baseline">Project Baseline</a> that is submitted for review. The available actions are based on the workflow status transition associated with the user role. For more information on the workflow status transitions, see [Add Status Transition Workflow](../BaselinePages/baseline-settings#addstatustransitionworkflow).

You can edit a Baseline or a Project Baseline (only the baseline fields; not the filter criteria) as long as its custom status is having the status type `Open`. For more information on how to configure custom statuses, see [Configure Custom Statuses](../BaselinePages/baseline-settings#configurecustomstatuses). 

You cannot edit a Baseline or a Project Baseline in a terminal status, that is, custom statuses that are assigned to the status type `Approved` or `Rejected`. 

You cannot re-submit a rejected Baseline or a Project Baseline. If a Baseline or Project Baseline is rejected, you can create a new Baseline or a Project Baseline and initiate the review process again. 

## Review a Baseline or a Project Baseline

1. Log on to TeamForge and select a project from the **My Workspace** menu.

2. Click **Baselines** from **Project Home** menu.

3. Select **Pending Review** on the left navigation menu.

   ![List of review pending baselines](/docs/assets/images/reviewpendingbaselines.png)

4. Click a Baseline or a Project Baseline on the **Pending Review Baselines** page.

   ![](/docs/assets/images/review-baseline.png)

5. Click the **Submit** drop-down button. This lists the custom statuses associated with the workflow transitions for your user role. For more information on how to add workflow transitions, see [Manage Status Transition Workflow](../BaselinePages/baseline-settings#addstatustransitionworkflow).

6. Select the required status and click **Submit**.

7. If you have selected a custom status whose status type is either **Approved** or **Rejected**, you are asked for the reason to approve or reject. However, while rejecting the Baseline or a Project Baseline, you must give a reason/comment for rejecting it.

## Add Comments {#addcomments}

You can add comments to a <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline">Baseline</a>. or a <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.project_baseline">Project Baseline</a> during the review process.

To add comments to a baseline:

1. Select the Baseline or the Project Baseline, for which you want to add comment, from the list of baselines.

2. Enter the required comments in the text box in the **Comments** section and click the **Save** link (or press **Shift+Enter**).

   ![](/docs/assets/images/baseline-comments.png)

* **Show All** option

  **Show All** is the default option selected in the **Comments** section to show the comments and audit logs.

  ![](/docs/assets/images/baseline-comments-showall.png)

* **Comments Only** option

  To view only the comments, select the **Comments Only** option in the **Comments** section.

  ![](/docs/assets/images/baseline-comments-only.png)

## View Baseline {#viewbaseline}

You can view a <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline"> Baseline</a> or <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.project_baseline">Project Baseline</a>, after it is approved or rejected. In other words, you cannot edit the baseline fields after the status of the Baseline or Project Baseline changes to **Approved** or **Rejected**.

![](/docs/assets/images/view-approved-baseline.png)
