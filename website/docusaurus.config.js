module.exports = {
  title: 'Steasy',
  tagline: 'Tailwind like styling for React Native',
  url: 'https://jbreuer.github.io',
  baseUrl: '/steasy/',
  favicon: 'img/favicon.ico',
  organizationName: 'jbreuer95', // Usually your GitHub org/user name.
  projectName: 'steasy', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Steasy',
      logo: {
        alt: 'Steasy Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/jbreuer95/steasy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Steasy, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'installation',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/jbreuer95/steasy/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
