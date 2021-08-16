/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'wisevision',
  tagline: 'wisevision is cool',
  url: 'https://wisevision.com.pl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wisevision', // Usually your GitHub org/user name.
  projectName: 'wisevision-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'wisevision',
      style: 'primary',
      logo: {
        alt: 'wisevision Logo',
        src: 'img/wisevision_logo.png',
        href: 'https://wisevision.com.pl',
        target: '_self',
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
              href: 'https://wisevision.com.pl',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/wisevision-pl/',
            },
            {
              label: 'Facebook',
              href: 'https://wisevision.com.pl',
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
              href: 'https://github.com/wise-vision',
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
