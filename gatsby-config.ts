import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jablonkowy Las`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          avifOptions: { quality: 40 },
          webpOptions: { quality: 70 },
        },
      },
    },
    {
      resolve: "@nathanpate/gatsby-omni-font-loader",
      options: {
        mode: "async",
        enableListener: true,
        preconnect: [
          "https://fonts.gstatic.com",
          "https://fonts.googleapis.com",
        ],
        web: [
          {
            name: "Roboto Flex",
            file: "https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,400;8..144,700&display=swap",
          },
        ],
      },
    },
  ],
};

export default config;
