---
Summary: Here's what's new with the TeamForge 22.1 REST APIs as compared to TeamForge
  22.0.
category: ''
id: apichangelog
lastUpdatedAt: Dec 07, 2022
product: teamforge
tags:
- REST
- extend_teamforge
- ctf_22.1
title: "REST API Change Log\u2014TeamForge 22.1"
---

* Fixed an issue with the `GET /documents/{docid}/versions/{versionid}/download` API call that prevented users from downloading a specific document version. 
* Fixed an issue with the `PATCH /ctfrest/tracker/v1/fields/{fieldId}` API call that prevented users from creating new field values.
* Fixed an issue with the `GET /users` API call that returned the list of users even if the call was not having a valid authorization token.

## Related Links

import Apidoclinks from '../_partials/_apidoclinks.md'

<Apidoclinks />