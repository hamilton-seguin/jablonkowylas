import React, { FC, MouseEvent, useState } from "react";
import { Link, HeadFC, PageProps, graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Camera } from "lucide-react";

import Layout from "../components/layout/Layout";
import { Pagination } from "../components/ui/Pagination";
import { Divider } from "../components/ui/Divider";
import { Draggable } from "../components/Draggable";

const Gallery: FC<PageProps> = ({ data }: any) => {
  const [currentImageId, setCurrentImageId] = useState(0);

  const getCurrentImageId = data.allFile.edges[currentImageId].node;
  const imageNumber = data.allFile.edges.length;

  const prevImage = (e: MouseEvent) => {
    e.preventDefault();
    let newCurrentImageId = currentImageId - 1;
    if (newCurrentImageId < 0) newCurrentImageId = imageNumber - 1;
    setCurrentImageId(newCurrentImageId);
  };
  const nextImage = (e: MouseEvent) => {
    e.preventDefault();
    let newCurrentImageId = currentImageId + 1;
    if (newCurrentImageId > imageNumber - 1) newCurrentImageId = 0;
    setCurrentImageId(newCurrentImageId);
  };

  return (
    <Layout>
      <main>
        <div className="mx-4 my-8">
          <div className="text-center">
            <h1 className="font-bold text-4xl lg:px-16 xl:px-[8%] xl:mt-[2vw] my-8 lg:mt-0">
              <Trans i18nKey="title" />
            </h1>
            <Divider />
            <div
              id="GalleryId"
              className="flex flex-col h-full justify-end relative"
              // ref={directionalArrows}
            >
              <Pagination
                withArrows
                prevImage={prevImage}
                nextImage={nextImage}
              />
              <div className="m-auto">
                <GatsbyImage
                  image={getImage(getCurrentImageId)!}
                  alt={getCurrentImageId.name}
                  className="h-[50vh] md:h-[65vh]"
                  imgStyle={{ objectFit: "contain" }}
                  draggable={false}
                />
                {/* </Link> */}
              </div>
              <div className="mt-16">
                <Draggable className="bg-grass3 pt-4 pb-3 md:pt-10 md:pb-8 -mx-4">
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
                            setCurrentImageId(i);
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
          </div>
        </div>
        <div className="min-w-20 w-[15vw] max-w-[135px] mx-auto my-16">
          <Camera className="fill-grass7 stroke-grass5 w-full h-full mx-auto" />
        </div>
      </main>
    </Layout>
  );
};

export default Gallery;
export const Head: HeadFC = () => <title>Gallery</title>;

export const query = graphql`
  query GalleryRenderQuery($language: String!) {
    allFile(
      sort: { name: ASC }
      filter: {
        extension: { regex: "/(jpg)|(jpeg)/" }
        sourceInstanceName: { eq: "gallery" }
      }
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
    locales: allLocale(
      filter: { ns: { in: ["gallery"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
