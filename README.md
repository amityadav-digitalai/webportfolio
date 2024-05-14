# docs-template

This repo contains the website configuration powering the [Digital.ai product docs](https://stage.docs.digital.ai/).

## ✈️ Getting started

### Prerequisites

1.  [Git](https://git-scm.com/downloads).
1.  Node [windows](https://github.com/coreybutler/nvm-windows), [posix](https://github.com/nvm-sh/nvm) _(version 20 or greater)_.
1.  [Yarn](https://yarnpkg.com/getting-started/install) _(version 4 or greater)_.
1.  Create new repo from this `docs-template` template repo.

    Follow a standard naming convention while creating product repos. Let all of our repositories start with the following: docs-<product> then followed by any other clarifying requirements such as sub product, doc name, etc. For example:

    - docs-agility
    - docs-platform
    - docs-release
    - docs-deploy
    - docs-appsec-web
    - docs-appsec-androidnat
    - docs-appsec-mobile-arm
    - docs-appsec-mobile-essentials
    - docs-appsec-mobile-pro
    - docs-intelligence-apps
    - docs-intelligence-platform
    - docs-intelligence-connectivityguides

### Installation

1.  `cd docs-template` to go into the project root.
1.  Run `yarn install` to install the website's workspace dependencies.

### Running locally

1.  `cd website` to go into the website portion of the project.
1.  `yarn start` to start the development server _(powered by [Docusaurus](https://v2.docusaurus.io))_.
1.  Open http://localhost:3000/ site in your favorite browser.

## 📖 Overview

**_To edit the internals of how the site is built,_** you may want to get familiarized with how the site is built. The https://stage.docs.digital.ai website is a static site generated using [Docusaurus](https://docusaurus.io/). The website configuration can be found in the `website` directory. Visit the Docusaurus website to learn more about all the available configuration options.

### Directory Structure

The following is a high-level overview of relevant files and folders.

```
docs-template/
├── docs/
│   ├── [BASE VERSIONED DOC FILES]
│   └── ...
└── website/
    ├── core/
    │   ├── [CUSTOM COMPONENTS]
    │   └── ...
    ├── src/
    │   ├── css/
    │   │   ├── [CUSTOM STYLES]
    │   │   └── ...
    │   ├── pages/
    │   │   ├── [STATIC PAGES]
    │   │   └── ...
    │   └── theme/
    │   │   ├── [SWIZZLED COMPONENTS]
    │   │   └── ...
    ├── static/
    │   ├── docs/
    │   │   └── assets/
    │   └── img/
    ├── versioned_docs/
    │   ├── [GENERATED VERSIONED DOC FILES]
    │   └── ...
    ├── versioned_sidebars/
    │   ├── [GENERATED VERSIONED SIDEBARS]
    │   └── ...
    ├── docusaurus.config.js
    ├── package.json
    ├── sidebars.json
    └── versions.json
```

### Documentation sources

As mentioned above, the `docs` folder contains the source files for docs.

If you're adding a new doc or you need to alter the order the docs appear in the sidebar, take a look at the `sidebars.json` file in the `website` directory. The sidebar files contain a list of document ids that should match those defined in the header metadata (aka frontmatter) of the docs markdown files.

### Versioned docs

Docs of the website is versioned to allow users to go back and see the Guides for any given release. A new version of the website is generally generated whenever there is a new product release. When this happens, any changes made to the `docs` and `website/sidebars.json` files will be copied over to the corresponding location within `website/versioned_docs` and `website/versioned_sidebars`.

> **_Note:_** Do not edit the auto-generated files within `versioned_docs` or `versioned_sidebars` unless you are sure it is necessary. Edits made to older versions will not be propagated to newer versions of the versioned docs.

Docusaurus keeps track of the list of versions for the site in the `website/versions.json` file. The ordering of versions in this file should be in reverse chronological order.

#### Cutting a new version

1.  `cd docs-template` to go into the project root.
1.  `cd website` to go into the website portion of the project.
1.  Run `yarn version:cut <newVersion>` where `<newVersion>` is the new version being released.
