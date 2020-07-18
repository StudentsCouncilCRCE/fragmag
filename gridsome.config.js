module.exports = {
  siteName: "FragMag",
  siteDescription: "FragMag 2020 website",
  templates: {
    Article: "/artices/:endpoint",
    Desk: "/desk/:endpoint",
  },
  
  plugins: [
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
