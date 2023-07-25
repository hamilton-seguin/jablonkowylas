import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jabłonkowy Las`,
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
        name: "Jabłonkowy Las",
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
        name: `camping`,
        path: `${__dirname}/src/camping`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hunters-house`,
        path: `${__dirname}/src/hunters-house`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jabłonkowy Las",
        short_name: "Jabłonkowy Las",
        start_url: "/",
        background_color: "#f3fcf3",
        theme_color: "#dff3df",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        languages: ["pl", "en"],
        defaultLanguage: "pl",
        siteUrl: "https://jablonkowylas.pl",
        i18nextOptions: {
          fallbackLng: "pl",
          supportedLngs: ["pl", "en"],
          defaultNS: "index",
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
      },
    },
  ],
};

export default config;
