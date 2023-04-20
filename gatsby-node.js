exports.createPages = async ({ graphql, actions: { createPage } }) => {
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
              gatsbyImageData(formats: NO_CHANGE)
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
      path: `/houses-huts/gallery/${node.name}`,
      component: require.resolve("./src/templates/ImageModal.tsx"),
      context: {
        // passed as props to the component (in my case component is the gallery template)
        name: node.name,
        imageData: node.childImageSharp.gatsbyImageData,
      },
    });
  });
  createPage({
    path: `/houses-huts/gallery/`,
    component: require.resolve("./src/templates/GalleryModal.tsx"),
    context: {
      images: result.data.allFile.edges.map(({ node }) => ({
        name: node.name,
        imageData: node.childImageSharp.gatsbyImageData,
      })),
    },
  });
};




/**
 * TODO Make a createPage for each image in the gallery
 * TODO Make a createPage for each gallery: Big House, Houses, Huts
 * TODO or make a createPage for each gallery as /houses-huts/gallery-big-house /gallery-houses /gallery-huts
 */
