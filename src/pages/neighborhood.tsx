import React, { FC, useEffect, useRef, useState } from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { TreePine } from "lucide-react";

import Layout from "../components/layout/Layout";
import { Draggable } from "../components/Draggable";
import { Divider } from "../components/ui/Divider";

const Neighborhood: FC<PageProps> = ({ data, location }: any) => {
  const [prevPath, setPrevPath] = useState("");
  const scrollPosRef = useRef(0);
  console.log("scrollPosRef", scrollPosRef);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (location.state.scrollPosRef !== undefined) {
      const savedScrollRef = location.state.scrollPosRef.current;
      if (savedScrollRef !== undefined) {
        window.scrollTo(0, savedScrollRef);
      }
    }
    const onScroll = () => {
      scrollPosRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setPrevPath(location.pathname);
  }, []);

  return (
    <Layout>
      <main>
        <div className="mx-4 my-8 flex flex-col">
          <div className="text-center">
            <h1 className="font-bold text-4xl lg:px-16 xl:px-[8%] xl:mt-[2vw] mb-8 lg:mt-0">
              <Trans i18nKey="title" />
            </h1>
            <Divider />
          </div>
          <div className="self-center">
            <StaticImage
              src="../images/outdoor/outdoor10.jpg"
              alt="Neighborhood"
              className="min-h-[35vh] max-h-[50vh] w-full lg:max-w-[80vw]"
              objectPosition={"bottom"}
            />
          </div>
          <div className="my-16 max-w-[80vw] self-center">
            <p className="my-8">
              <Trans i18nKey="section1" />
            </p>
            <p className="my-8">
              <Trans i18nKey="section2" />
            </p>
            <p className="my-8">
              <Trans i18nKey="section3" />
            </p>
            <p className="my-8">
              <Trans i18nKey="section4" />
            </p>
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
                    state={{ prevPath, scrollPosRef }}
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
          <TreePine className="fill-grass7 stroke-grass5 w-full h-full http://localhost:8000/mx-auto" />
        </div>
      </main>
    </Layout>
  );
};

export default Neighborhood;
export const Head: HeadFC = ({ pageContext }: any) => {
  return (
    <title>
      {pageContext.language === "en" ? "Our Neighborhood" : "Okolica"}
    </title>
  );
};

export const query = graphql`
  query NeighborhoodRenderQuery($language: String!) {
    allFile(
      sort: { name: ASC }
      filter: {
        extension: { regex: "/(jpg)|(jpeg)/" }
        sourceInstanceName: { eq: "images" }
        name: { regex: "/outdoor/i" }
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
      filter: { ns: { in: ["area"] }, language: { eq: $language } }
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
