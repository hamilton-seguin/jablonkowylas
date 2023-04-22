import React, { useState } from "react";
import { HeadFC, Link, PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout/Layout";
import { Draggable } from "../components/Draggable";

const Test: React.FC<PageProps> = ({ data }: any) => {
  const [selectedImage, setSelectedImage] = useState("houses1");
  const [currentImage, setCurrentImage] = useState(0);
  const getCurrentImage = data.allFile.edges[currentImage].node;
  return (
    <Layout>


      <div id="ModalId" className="flex flex-col h-full justify-end">
        <div className="m-auto">
          {/* <Link to={`/houses-huts/gallery/${selectedImage}`}> */}
            <GatsbyImage
              image={getImage(getCurrentImage)!}
              alt={getCurrentImage.name}
              className="h-[50vh] md:h-[65vh]"
              imgStyle={{ objectFit: "contain" }}
              draggable={false}
            />          
          {/* </Link> */}
        </div>
        <Draggable className="bg-grass3 pt-4 pb-3 md:pt-10 md:pb-8">
          <div className="flex snap-x overflow-x-auto scroll-smooth gap-2 items-center h-[18vh] overflow-y-hidden">
            {data.allFile.edges.map((image: any, i: number) => (
              <div
                key={image.node.name}
                className="flex snap-start shrink-0 max-w-fit"
              >
                <Link
                  to="/"
                  aria-label="Display image"
                  style={{ cursor: "inherit" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImage(i);
                    setSelectedImage(image.node.name);
                  }}
                >
                  <GatsbyImage
                    image={getImage(image.node)!}
                    alt={image.node.name}
                    className="w-[27vw] lg:w-[21vw] 2xl:w-[14vw] 3xl:w-[10vw] h-[24vw] lg:h-[18vw] 2xl:h-[11vw] 3xl:h-[8vw]"
                    draggable={false}
                  />
                </Link>
              </div>
            ))}
          </div>
        </Draggable>
      </div>


    </Layout>
  );
};

export default Test;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Home Page</title>
    </>
  );
};

export const query = graphql`
  query GalleryRender {
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
`;
