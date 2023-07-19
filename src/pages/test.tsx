import React, { useState } from "react";
import { HeadFC, Link, PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout/Layout";
import { Draggable } from "../components/Draggable";
import { Button } from "../components/ui/Button";
import { Apple, ChevronLeft, ChevronRight, X } from "lucide-react";

const Test: React.FC<PageProps> = ({ data }: any) => {
  const [selectedImage, setSelectedImage] = useState("house1");
  const [currentImageId, setCurrentImageId] = useState(0);
  const imageNumber = data.allFile.edges.length;

  const getCurrentImageId = data.allFile.edges[currentImageId].node;
  return (
    <Layout>
      <div>
      <div className="min-w-20 w-[15vw] max-w-[150px] mx-auto">
        <Apple className="fill-grass5 stroke-grass7 w-full h-full mx-auto" />
      </div>


      <div id="ModalId" className="flex flex-col h-full justify-end relative">
        <Link to="/houses-huts/" draggable={false} aria-label="Previous page">
          <Button className="absolute top-8 z-50 right-4 md:right-12 px-2.5 md:px-4 !rounded-xl">
            <X className="w-5 h-5 md:w-8 md:h-8" />
          </Button>
        </Link>
        <Link
          to="/"
          draggable={false}
          onClick={(e) => {
            e.preventDefault();
            let newCurrentImageId = currentImageId - 1;
            if (newCurrentImageId < 0) newCurrentImageId = imageNumber - 1;
            setCurrentImageId(newCurrentImageId);
            setSelectedImage(data.allFile.edges[newCurrentImageId].node.name);
          }}
        >
          <Button className="group absolute md:h-[85vh] md:top-[85vh] h-fit m-auto !rounded-xl z-50 left-4 md:left-12 px-2.5 md:px-4">
            <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 group-active:-translate-x-1 transition-all" />
          </Button>
        </Link>
        <Link
          to="/"
          draggable={false}
          onClick={(e) => {
            e.preventDefault();
            let newCurrentImageId = currentImageId + 1;
            if (newCurrentImageId > imageNumber - 1) newCurrentImageId = 0;
            setCurrentImageId(newCurrentImageId);
            setSelectedImage(data.allFile.edges[newCurrentImageId].node.name);
          }}
        >
          <Button className="group absolute top-[24vh] md:top-[30vh] h-fit m-auto !rounded-xl z-50 right-4 md:right-12 px-2.5 md:px-4">
            <ChevronRight className="w-5 h-5 md:w-8 md:h-8 group-active:translate-x-1 transition-all" />
          </Button>
        </Link>
        <div className="m-auto">
          <Link to={`/gallery/${selectedImage}`}>
            <GatsbyImage
              image={getImage(getCurrentImageId)!}
              alt={getCurrentImageId.name}
              className="h-[85vh]]"
              imgStyle={{ objectFit: "contain" }}
              draggable={false}
            />
          </Link>
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
                    console.log("i:", i);

                    e.preventDefault();
                    setCurrentImageId(i);
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
