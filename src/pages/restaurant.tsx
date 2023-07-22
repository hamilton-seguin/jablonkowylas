import React, { FC, useEffect, useState } from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { Carrot } from "lucide-react";
import { Link, Trans } from "gatsby-plugin-react-i18next";

import Layout from "../components/layout/Layout";
import { Divider } from "../components/ui/Divider";
import { Draggable } from "../components/Draggable";

import {
  scrollPosition,
  saveScrollPosition,
  scrollToSavedPosition,
} from "../utils/scrollToPosition";

const Restaurant: FC<PageProps> = ({ data }: any) => {

  const [prevPath, setPrevPath] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setPrevPath(location.pathname);

    window.addEventListener("scroll", scrollPosition);
    scrollToSavedPosition();
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", saveScrollPosition);
    };
  }, []);
  
  return (
    <Layout>
      <main>
        <div className="mx-4 my-8">
          <div className="text-center">
            <h1 className="font-bold text-4xl lg:px-16 xl:px-[8%] xl:mt-[2vw] my-8 lg:mt-0">
              <Trans i18nKey="title" />
            </h1>
            <Divider />
            <h1 className=" text-font font-bold items-center text-2xl mt-8">
              <Trans i18nKey="description" />
            </h1>
            <p className="my-8">
              <Trans i18nKey="text" />
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min mt-16">
            <div className="lg:flex lg:col-start-2 lg:row-start-1 lg:row-end-3 ">
              <StaticImage
                src="../images/food/pancake.jpg"
                alt="Restaurant"
                className="h-[30vh] lg:max-w-[49vw] w-full lg:w-[49vw]"
                objectPosition={"center"}
              />
            </div>
            <div className="px-16">
              <h2 className=" text-font font-bold flex items-center text-xl mt-8 underline underline-offset-4 decoration-grass9">
                <Trans i18nKey="breakfast" />
              </h2>
              <p className="my-8 lg:col-start-1">
                <Trans i18nKey="breakfast1" />
              </p>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min my-16">
            <div className="lg:flex lg:col-start-1 lg:row-start-1 lg:row-end-3 ">
              <StaticImage
                src="../images/food/soup.jpeg"
                alt="Restaurant"
                className="h-[30vh] lg:max-w-[49vw] w-full lg:w-[49vw]"
                objectPosition={"center"}
              />
            </div>
            <div className="px-16">
              <h2 className=" text-font font-bold flex items-center text-xl mt-8 underline underline-offset-4 decoration-grass9">
                <Trans i18nKey="lunch" />
              </h2>
              <p className="my-8">
                <Trans i18nKey="lunch1" />
              </p>
              <p className="my-8">
                <Trans i18nKey="extra" />
              </p>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min">
            <div className="lg:flex lg:col-start-2 lg:row-start-1 lg:row-end-3 ">
              <StaticImage
                src="../images/food/coffee-lake.jpeg"
                alt="Restaurant"
                className="h-[30vh] lg:max-w-[49vw] w-full lg:w-[49vw]"
                objectPosition={"center"}
              />
            </div>
            <div className="px-16">
              <p className="my-8">
                <Trans i18nKey="extra1" />
              </p>
            </div>
          </div>
        </div>
        <div
          id="GalleryId"
          className="flex flex-col h-full justify-end relative"
          // ref={directionalArrows}
        >
          <Draggable className="bg-grass3 pt-4 pb-3 md:pt-10 md:pb-8">
            <div className="flex snap-x overflow-x-auto scroll-smooth gap-2 items-center h-[18vh] overflow-y-hidden">
              {data.allFile.edges.map((image: any, i: number) => (
                <div
                  key={image.node.name}
                  className="flex snap-start shrink-0 max-w-fit"
                >
                  <Link
                    to={`/gallery/${image.node.name}`}
                    aria-label="Display image"
                    style={{ cursor: "inherit" }}
                    state={{ prevPath }}
                    onClick={saveScrollPosition}
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
        <div className="min-w-20 w-[15vw] max-w-[135px] mx-auto my-16">
          <Carrot className="fill-grass7 stroke-grass5 w-full h-full mx-auto" />
        </div>
      </main>
    </Layout>
  );
};

export default Restaurant;
export const Head: HeadFC = () => <title>Restaurant</title>;

export const query = graphql`
  query ($language: String!) {
    allFile(
      sort: { name: ASC }
      filter: {
        extension: { regex: "/(jpg)|(jpeg)/" }
        sourceInstanceName: { eq: "images" }
        name: { regex: "/facilities/i" }
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
      filter: { ns: { in: ["restaurant"] }, language: { eq: $language } }
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
