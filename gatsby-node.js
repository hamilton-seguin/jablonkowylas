exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect, createPage } = actions

  // createRedirect({
  //   fromPath: `/houses-huts/gallery/*`,
  //   toPath: `/houses-huts/`,
  //   statusCode: 404
  // })
  // createRedirect({
  //   fromPath: `/houses-huts/gallery/`,
  //   toPath: `/gallery/`,
  //   statusCode: 404
  // })
  createRedirect({
    fromPath: "https://jablonkowylas.com/*",
    toPath: "https://jablonkowylas.pl/",
    isPermanent: true,
  });
  createRedirect({
    fromPath: "https://www.jablonkowylas.com/*",
    toPath: "https://jablonkowylas.pl/",
    isPermanent: true,
  });

  const result = await graphql(`
    query ModalRenderQuery {
      allFile(
        filter: { extension: { regex: "/(jpg)|(jpeg)/" } }
        sort: { name: ASC }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    console.error(result.errors);
    return;
  }

  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: `/gallery/${node.name}`,
      component: require.resolve("./src/templates/ImageModal.tsx"),
      context: {
        // passed as props to the component (in my case component is the gallery template)
        name: node.name,
        imageData: node.childImageSharp.gatsbyImageData,
      },
    });
  });

  ["hunters-house", "houses", "huts"].forEach((folderName) => {
    createPage({
      path: `/houses-huts/gallery/${folderName}`,
      component: require.resolve("./src/templates/GalleryModal.tsx"),
      context: { folderName },
    });
  });
};

// exports.createSchemaCustomization = ({actions}) => {
//   const {createTypes} = actions;
//   createTypes(`
//     type SitePage implements Node {
//       context: SitePageContext
//     }
//     type SitePageContext {
//       i18n: i18nContext
//     }
//     type i18nContext {
//         language: String,
//         languages: [String],
//         defaultLanguage: String,
//         originalPath: String
//         routed: Boolean
//     }
//   `);
// };
