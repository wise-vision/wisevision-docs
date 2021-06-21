/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'wisevision',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'wisevision',
      logo: {
        alt: 'wisevision Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Dokumentacja',
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Dokumentacja',
              to: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Newsletter',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Linkedin',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Facebook',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} wisevision sp. z o.o.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
