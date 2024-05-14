import {themes as prismThemes} from 'prism-react-renderer';
import {variableInjectorPlugin} from './plugins/remark/variableInjector.js';
import tailwindPlugin from './plugins/tailwind/tailwind.config.cjs';
import versions from './versions.json';

/** Dynamic definitions */

// eslint-disable-next-line no-unused-vars
const lastVersion = versions[0];
const copyright = `Copyright © ${new Date().getFullYear()} - DIGITAL.AI, ALL RIGHTS RESERVED`;

// eslint-disable-next-line no-unused-vars
const commonDocsOptions = {
  breadcrumbs: true,
  showLastUpdateAuthor: false,
  showLastUpdateTime: true,
};

/** Config */
/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  title: 'digital.ai Team-Forge',
  tagline:
    'Find answers to your technical questions and learn how to use our products',
  organizationName: 'digital.ai',
  projectName: 'docs-teamforge',
  url: 'https://stage.docs.digital.ai',
  baseUrl: '/teamforge/',
  trailingSlash: false, // because trailing slashes can break some existing relative links

  favicon: 'brand/digitalai/Favicon-FC-.svg',
  titleDelimiter: '·',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          sidebarPath: './sidebars.js',
          // remark plugins option
          beforeDefaultRemarkPlugins: [variableInjectorPlugin],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#20232a',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#20232a',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/pwa/manifest-icon-512.png',
            color: '#06bcee',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#20232a',
          },
        ],
      },
    ],
    ['./plugins/sync-constants', {path: './versioned_constants'}],
    tailwindPlugin,
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'support_ukraine',
        content:
          '<a target="_blank" href="https://devopsai-my.sharepoint.com/:p:/g/personal/rjanarthanan_digital_ai/EZCAc8-0hCtCiVXAE9ZIiF8BgNF1foc76rbOOmME_DCMYQ?e=9ev1lb">Project Phoenix</a>',
        backgroundColor: '#20232a',
        textColor: '#fff',
        isCloseable: true,
      },
      prism: {
        defaultLanguage: 'jsx',
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'java',
          'kotlin',
          'objectivec',
          'swift',
          'groovy',
          'ruby',
          'flow',
        ],
      },
      navbar: {
        logo: {
          src: 'brand/digitalai/Digital_ai-FC-RGB.svg',
          srcDark: 'brand/digitalai/Digital_ai-FC-Reverse-RGB.svg',
          alt: 'digital.ai',
          href: '/',
          target: '_self',
        },
        items: [
          {
            label: 'Product',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                label: 'Platform',
                to: '../platform/',
                target: '_self',
              },
              {
                label: 'Agility',
                to: '../agility/',
                target: '_self',
              },
              {
                label: 'Deploy',
                to: '../deploy/',
                target: '_self',
              },
              {
                label: 'App Management',
                to: '../appmanagement/',
                target: '_self',
              },
              {
                label: 'Intelligence',
                to: '../intelligence/',
                target: '_self',
              },
              {
                label: 'Continuous Testing',
                to: '../continuostesting/',
                target: '_self',
              },
              {
                label: 'TeamForge',
                to: '../teamforge/',
                target: '_self',
              },
              {
                label: 'App Security',
                to: '../appsecurity/',
                target: '_self',
              },
            ],
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            label: 'version',
          },
          {
            href: 'https://digitalai.us.digital.ai/signin/docs?redirect=https%3A%2F%2Fdocs.digital.ai%2F',
            label: 'Login',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Participate',
            items: [
              {
                label: 'Community',
                href: 'https://community.digital.ai/',
              },
              {
                label: 'Blog',
                href: 'https://digital.ai/catalyst-blog/',
              },
              {
                label: 'Send Feedback',
                href: 'mailto:documentationfeedback@digital.ai',
              },
            ],
          },
          {
            title: 'Find us',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/digitaldotai',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/digitalaisw',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/digitaldotai/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UC6k61LnvJGuBpHqC0uuUQ-g',
              },
            ],
          },
          {
            title: 'Explore More',
            items: [
              {
                label: 'Privacy Policy',
                href: 'https://digital.ai/privacy-policy/',
              },
              {
                label: 'Terms and Conditions',
                href: 'https://digital.ai/digital-ai-terms-and-policies/',
              },
            ],
          },
        ],
        logo: {
          alt: 'digital.ai',
          src: 'brand/digitalai/Digital_ai-FC-Reverse-RGB.svg',
          href: 'https://digital.ai/',
          width: 240,
        },
        copyright,
      },
      algolia: {
        appId: '7R4AH8XVO1',
        apiKey: 'd9168e6b526dcd807c9e45e7a2286c49',
        indexName: 'netlify_8aa0d4ef-dddc-493c-9f6a-751640fc471e_main_all',
        siteId: '8aa0d4ef-dddc-493c-9f6a-751640fc471e',
        branch: 'main',
        contextualSearch: true,
      },
      metadata: [
        {
          property: 'og:image',
          content:
            'https://digital.ai/wp-content/uploads/2022/09/HP-BN-GEN-2022-12-platform-image-2048x367.png',
        },
        {name: 'twitter:card', content: 'summary_large_image'},
        {
          name: 'twitter:image',
          content:
            'https://digital.ai/wp-content/uploads/2022/09/HP-BN-GEN-2022-12-platform-image-2048x367.png',
        },
        {name: 'twitter:site', content: '@digitaldotai'},
      ],
    }),
};

export default config;
