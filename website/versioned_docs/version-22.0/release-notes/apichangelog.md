---
Summary: Here's what's new with the TeamForge 22.0 REST APIs as compared to TeamForge
  21.2.
category: ''
id: apichangelog
lastUpdatedAt: Apr 8, 2022
product: teamforge
tags:
- REST
- extend_teamforge
- ctf_22.0
title: "REST API Change Log\u2014TeamForge 22.0"
---

* `POST /artifacts/filter`—Fixed an issue due to which the API call failed when the payload has Epoch timestamp. 
* `GET /projecttemplates`—Fixed an issue due to which the API call allowed anonymous users to see information about project templates including the usernames of those who created them.
* `PATCH /ctfrest/tracker/v1/fields/{fieldId}`—Fixed an issue due to which the API call fails with a 500 response code if the user tries to pass more than one field value.
* `PATCH /projects/{projectid}/workflow` and `PATCH /trackers/{trackerId}/workflow`—Fixed an issue to show the right response code when the user tries to update a non-existing tracker workflow.
* `POST /trackers/{trackerId}/fields`—Removed the `defaultValueText` validation even if the `required` parameter is set to `true`.

## Related Links

import Apidoclinks from '../_partials/_apidoclinks.md'

<Apidoclinks />