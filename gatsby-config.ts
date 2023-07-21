import type { GatsbyConfig } from "gatsby";
import { languages, defaultLanguage } from "./languages";

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
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon-apple.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `houses`,
        path: `${__dirname}/src/houses`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/locales`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/gallery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `huts`,
        path: `${__dirname}/src/huts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `outdoor`,
        path: `${__dirname}/src/outdoor`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `big-house`,
        path: `${__dirname}/src/big-house`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          quality: 50,
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
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        languages,
        defaultLanguage,
        siteUrl: "https://jablonkowylas.pl",
        i18nextOptions: {
          // debug: true,
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: "common",
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },

        },
      },
    },
  ],
};

export default config;
