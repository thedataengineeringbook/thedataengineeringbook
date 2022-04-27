/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "The Data Engineering Book",
  // tagline: 'The tagline of my site',
  url: "https://data-engineering-book.github.io", // [TODO] change me
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "dataengineercafe", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: "The Data Engineering Book",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/dataengineercafe/data-engineering-book",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Data Engineer Cafe. Built with Docusaurus.`,
    },
    // algolia: {
    //   apiKey: "$API_KEY",
    //   indexName: "docusaurus-2",
    //   appId: "$APP_ID",
    // },
    prism: {
      theme: require("prism-react-renderer/themes/okaidia"),
      darkTheme: require("prism-react-renderer/themes/vsLight"),
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
};
