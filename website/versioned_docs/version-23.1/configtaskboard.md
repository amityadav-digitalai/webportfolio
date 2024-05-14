---
Summary: Task board is an important tool in the Agile process. It helps the team to
  focus on the work at hand in the current sprint and feed progress data back into
  the system.
category: ''
id: configtaskboard
keywords:
- set up the Task Board
lastUpdatedAt: Mar 15, 2018
product: teamforge
tags:
- project_admin_tasks
- boards
- tasks
- trackers
title: Set up Task Board
---


The Task board is a not a sprint-planning tool; it is more of a sprint-tracking tool. Use the [Planning Board](./setup_planningboard) for planning the stories that will be dealt-with in the sprint. During the sprint, team members can use the Task Board to break down the stories into tasks and track them to completion. <br></br>

For more information, see [What are Planning, Task, and Kanban Boards?](./FAQPages/conceptsandterms-faqs#plantaskkanban)


TeamForge project administrators can configure one Task Board per project. Once that is done, project members can use the Task Board.

 * During Task Board configuration:
   * Select one or more backlog trackers.
     :::note
     Backlog trackers are tracker items such as epics, stories, defects and so on, for which tasks can be created.
     :::
   * Select a task tracker. You can select only one task tracker for a project.
   * Select at least two and up to seven statuses. The number of task swimlanes in the Task Board is equal to the number of statuses you select.
   * Select the unit of effort for backlog and task trackers.

   For more information, see [What are Planning, Task and Kanban boards?](./FAQPages/conceptsandterms-faqs#plantaskkanban)

 1. Click **TRACKERS** from the **Project Home** menu.

 2. In the **List Trackers, Planning Folders and Teams** page, click **Task**.

    ![](/docs/assets/images/listplantrack02.PNG)

 3. Click the Task Board configuration icon ( ![](/docs/assets/images/taskbdconfigicon.PNG)). The **Settings** window appears.

 4. Select one or more backlog trackers and a task tracker.

    ![](/docs/assets/images/taskbdsettings.PNG)
    
    :::note
    You can always revisit your backlog and task tracker settings for Task Board and change them if required at any future point in time.
    :::

 1.  Click **Next**.

 2. Select at least two and up to seven statuses from the **Available** list box. Press and hold the **Ctrl** key to select multiple items.

 3. Click the forward arrow to add the selected statuses to the **Selected** list box.

    ![](/docs/assets/images/taskbdsettings02.PNG)

    ![](/docs/assets/images/status-success-small.png) You can always revisit your status settings for Task Board and change them if required at any future point in time. <br></br>
    ![](/docs/assets/images/status-success-small.png) Use the forward and backward arrows to move statuses to and fro the **Available** and **Selected** list boxes. <br></br>
    ![](/docs/assets/images/status-success-small.png) Use the up or down arrows to move statuses up or down within the **Selected** list box.

 4. Click **Next**.

 5. Select the task effort field and backlog item size field.

    :::note
    If the effort field is disabled for the backlog and task trackers, it is not possible to select the task effort and backlog item size fields and the value is set to 'None'.
    :::

 1.  Click **Finish**. The following success message appears: "Task Board preferences saved successfully".

You have now successfully configured the Task Board for your project. Project members can start using the Task Board to manage their tasks.

