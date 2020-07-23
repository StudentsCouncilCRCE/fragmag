module.exports = {
  siteName: "FragMag 2020",
  siteDescription: "FragMag 2020 - Catalyse",
  templates: {
    Article: "/artices/:endpoint",
    Desk: "/desk/:endpoint",
    Episode: "/episodes/:number/:endpoint",
    Report: "/reports/:endpoint",
    Hindi: "/hindi/:endpoint",
  },
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Article",
        path: "content/articles/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Desk",
        path: "content/desk/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Desk",
        path: "content/editors/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Episode",
        path: "content/episodes/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Report",
        path: "content/reports/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Hindi",
        path: "content/hindi/*.md",
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
