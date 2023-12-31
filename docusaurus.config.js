const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  // 网站的title
  title: "walk heart blog",
  tagline: "No use but happy",

  // 网站的图标，在img目录下
  favicon: "https://github.com/youzhaing.png",

  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",

  organizationName: "youzhaing",
  projectName: "youzhaing_blog", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "youzhaing",
        logo: {
          alt: "My Site Logo",
          src: "https://github.com/youzhaing.png",
        },
        // 这里就是网页导航的内容,只需要改label名称就可以
        items: [
          { to: "/blog", label: "Blogs", position: "right"},
          { to: "/docs/杂谈/bb两句", label: "杂谈", position: "right"},
          { to: "/docs/算法/树的遍历", label: "算法", position: "right"},
          { to: "/docs/杂谈/致谢", label: "致谢", position: "right"},
          {
            href: "https://github.com/youzhaing/youzhaing_blog",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              }
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "My Blog",
                to: "/blog",
              },
              {
                label: "Docusaurus GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} youzhaing. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
