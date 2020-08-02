module.exports = {
  siteName: "FragMag 2020",
  siteDescription: "FragMag 2020 - Catalyse",
  templates: {
    Article: "/artices/:section/:endpoint",
    Desk: "/desk/:endpoint",
    Episode: "/episodes/:number/:endpoint",
    Report: "/reports/:endpoint",
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
        path: "content/articles/*/*.md",
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
        typeName: "Artwork",
        path: "content/artwork/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Photography",
        path: "content/photography/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Comps",
        path: "content/be_comps/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Prod",
        path: "content/be_prod/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Elex",
        path: "content/be_elex/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "It",
        path: "content/be_it/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Team",
        path: "content/team/*.md",
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
