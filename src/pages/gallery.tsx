import React, { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { Trans, Link } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Camera } from "lucide-react";

import Layout from "../components/layout/Layout";
import { Pagination } from "../components/ui/Pagination";
import { Divider } from "../components/ui/Divider";
import { Draggable } from "../components/Draggable";

const Gallery: FC<PageProps> = ({ data, location }: any) => {
  const [currentImageId, setCurrentImageId] = useState(0);
  const getCurrentImageId = data.allFile.edges[currentImageId].node;
  const [selectedImageName, setSelectedImageName] = useState(
    getCurrentImageId.name
  );
  const imageNumber = data.allFile.edges.length;

  const [prevPath, setPrevPath] = useState("");

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

  useEffect(() => {
    const localStorageId = window.localStorage.getItem("localStorageId");
    if (!localStorageId) return;
    if (JSON.parse(localStorageId) > imageNumber - 1) {
      setCurrentImageId(0);
      return;
    }
    setCurrentImageId(JSON.parse(localStorageId));
    setSelectedImageName(
      data.allFile.edges[JSON.parse(localStorageId)].node.name
    );
  }, []);

  useEffect(() => {
    window.localStorage.setItem("localStorageId", currentImageId.toString());
  }, [currentImageId]);

  const scrollPosRef = useRef(0);

  const scrollPosRefX = useRef(0);

  const changeXRef = (value: number) => {
    scrollPosRefX.current = value;
  };

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    let savedScrollRef = 0;
    if (location.state.scrollPosRef !== undefined) {
      savedScrollRef = location.state.scrollPosRef.current;
      window.scrollTo(0, savedScrollRef);
    }

    let savedScrollRefX = 0;
    if (location.state.scrollPosRefX !== undefined) {
      savedScrollRefX = location.state.scrollPosRefX.current;
      document.getElementById("draggable")!.children[0].scrollTo({
        top: 0,
        left: savedScrollRefX,
        behavior: "instant",
      });
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
              <div className="m-auto">
                <Link
                  to={`/gallery/${selectedImageName}`}
                  state={{ prevPath, scrollPosRef, scrollPosRefX }}
                >
                  <GatsbyImage
                    image={getImage(getCurrentImageId)!}
                    alt={getCurrentImageId.name}
                    className="h-[50vh] md:h-[65vh]"
                    imgStyle={{ objectFit: "contain" }}
                    draggable={false}
                  />
                </Link>
              </div>
              <Pagination
                withArrows
                prevImage={prevImage}
                nextImage={nextImage}
              />
              <div className="mt-16">
                <Draggable
                  className="bg-grass3 pt-4 pb-3 md:pt-10 md:pb-8 -mx-4"
                  scrollPosRefX={changeXRef}
                >
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
                            setSelectedImageName(image.node.name);
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
export const Head: HeadFC = ({ pageContext }: any) => {
  return (
    <>
      <html lang={pageContext.language}/>
      <title>{pageContext.language === "en" ? "Gallery" : "Galeria"}</title>;
    </>
  );
};

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
