// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'tfcmt',
  tagline: 'Fork of mercari/tfnotify, enhancing tfnotify in many ways including Terraform >= v0.15 support and advanced formatting options',
  url: 'https://suzuki-shunsuke.github.io',
  baseUrl: '/tfcmt/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'suzuki-shunsuke', // Usually your GitHub org/user name.
  projectName: 'tfcmt', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/suzuki-shunsuke/tfcmt-docs/edit/main',
          routeBasePath: '/',
        },
        pages: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'tfcmt',
        items: [
          {
            href: 'https://github.com/suzuki-shunsuke/tfcmt',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/suzuki-shunsuke/tfcmt',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021 Shunsuke Suzuki. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
