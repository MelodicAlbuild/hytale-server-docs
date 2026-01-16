import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hytale Server Docs',
  tagline: 'Unofficial Hytale Java Server Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hytale.melodicalbuild.com',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'MelodicAlbuild',
  projectName: 'hytale-server-docs',

  // v3 Standard Configuration
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // This makes the docs the landing page
          routeBasePath: '/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    image: 'img/logo-h.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Unofficial Hytale Server Docs',
      logo: {
        alt: 'Hytale Logo',
        src: 'img/logo-h.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/MelodicAlbuild/hytale-server-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Connection', to: '/connection/auth-flow' },
            { label: 'Protocol', to: '/protocol/wire-format' },
            { label: 'Codec', to: '/codec/architecture' },
            { label: 'Plugins', to: '/plugin-system/lifecycle' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Hytale Website', href: 'https://hytale.com' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alloy Server Developers. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'cpp', 'json', 'bash'],
    },
  } satisfies Preset.ThemeConfig,

  // Load the Mermaid theme
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;