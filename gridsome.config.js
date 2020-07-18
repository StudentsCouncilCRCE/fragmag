module.exports = {
  siteName: "FragMag",
  siteDescription: "FragMag 2020 website",
  templates: {
    Article: "/artices/:title",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Article",
        path: "content/articles/*.md",
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
