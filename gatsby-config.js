module.exports = {
  siteMetadata: {
    title: `So Wrong For That`,
    name: `SoWrongForThat.com`,
    siteUrl: `https://sowrongforthat.com`,
    description: `A blog that looks at pop/urban culture and ask the question why?`,
    hero: {
      heading: `Welcome to the So Wrong For That website.`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/sowrong4that`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/sowrongforthat`
      },
      {
        name: `facebook`,
        url: `https://facebook.com/sowrongforthat`
      }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};
