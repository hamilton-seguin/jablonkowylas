import React, { FC, useEffect, useRef, useState } from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import { Camera, Flower, ChevronRight } from "lucide-react";

import Layout from "../components/layout/Layout";
import { Button } from "../components/ui/Button";

const Houses: FC<PageProps> = ({ location }: any) => {
  const [prevPath, setPrevPath] = useState("");
  const scrollPosRef = useRef(0);

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
        <div className="flex flex-col lg:flex-row min-h-min mx-4 mt-8 lg:mt-16">
          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min ">
            <h1 className="text-center lg:col-start-2 font-bold text-4xl lg:px-16 xl:px-[8%] xl:mt-[2vw] mb-8 lg:mt-0">
              <Trans i18nKey="title" />
            </h1>
            <div className="text-center lg:col-start-2 mx-auto mb-8  xl:mt-[2vw] border-t-[2px] border-grass9 w-1/3"></div>
            <div className="relative lg:flex lg:row-start-1 lg:row-end-5 lg:left-0 -mx-4 lg:mx-0 lg:order-first lg:max-h-[60vh]">
              <StaticImage
                src="../houses/cottage-outside.jpg"
                alt="Jabłonkowy Las house on the lake"
                className="max-h-[50vh] min-h-[50vh] lg:max-w-[49vw] w-full"
                objectPosition={"bottom"}
              />
              <Link
                draggable={false}
                to="/houses-huts/gallery/houses"
                state={{ prevPath, scrollPosRef }}
              >
                <Button className="group absolute inset-x-0 bottom-[6%] w-max m-auto rounded">
                  <p className=" text-font m-1 font-bold flex items-center">
                    <Camera className=" w-6 h-6 mr-3" />
                    <Trans i18nKey="section1_title" />
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all" />
                  </p>
                </Button>
              </Link>
            </div>
            <h2 className="text-center lg:col-start-2 font-bold text-2xl lg:px-16 xl:px-[8%] my-8  xl:mt-[2vw] underline underline-offset-4 decoration-grass9">
              <Trans i18nKey="section1_title" />
            </h2>
            <div className="lg:col-start-2 lg:px-16 xl:px-[8%] my-8 lg:my-0 xl:max-w-[75%] xl:mx-auto">
              <p>
                <Trans i18nKey="section1_1" />
              </p>
              <p className="my-8 lg:mb-0">
                <Trans i18nKey="section1_2" />
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-8 lg:mt-24 flex-col lg:flex-row min-h-min mx-4 my-8">
          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min ">
            <h2 className="lg:col-start-1 font-bold text-2xl lg:px-16 xl:px-[8%] text-center my-8 lg:mt-0 underline underline-offset-4 decoration-grass9">
              <Trans i18nKey="section2_title" />
            </h2>
            <div className="lg:col-start-1 order-last lg:px-16 xl:px-[8%] my-8 lg:my-0 xl:max-w-[75%] xl:mx-auto">
              <p>
                <Trans i18nKey="section2_1" />
              </p>
              <p className="my-8">
                <Trans i18nKey="section2_2" />
              </p>
              <p className="my-8">
                <Trans i18nKey="section2_3" />
              </p>
            </div>
            <div className="relative order-first lg:flex lg:row-start-1 lg:row-end-5 lg:col-start-2 lg:right-0 min-h-fit -mx-4 lg:mx-0 lg:max-h-[60vh]">
              <StaticImage
                src="../huts/huts4.jpg"
                alt="Jabłonkowy Las hut on the lake"
                className="max-h-[50vh] min-h-[50vh] lg:max-w-[49vw] w-full lg:w-[49vw]"
                objectPosition={"center"}
              />
              <Link
                draggable={false}
                to="/houses-huts/gallery/huts"
                state={{ prevPath, scrollPosRef }}
              >
                <Button className="group absolute inset-x-0 bottom-[6%] w-max m-auto rounded">
                  <p className=" text-font m-1 font-bold flex items-center">
                    <Camera className="w-6 h-6 mr-3" />
                    <Trans i18nKey="section2_title" />
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all" />
                  </p>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex lg:mt-24 flex-col lg:flex-row min-h-min mx-4 my-8">
          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min ">
            <div className="relative lg:flex lg:row-start-1 lg:row-end-5 lg:left-0 min-h-fit -mx-4 lg:mx-0 lg:order-first lg:max-h-[60vh]">
              <StaticImage
                src="../hunters-house/hunters-house1.jpg"
                alt="Jabłonkowy Las pavilion on the lake"
                className="max-h-[50vh] min-h-[50vh] lg:max-w-[49vw]"
                objectPosition={"center"}
              />
              <Link
                draggable={false}
                to="/houses-huts/gallery/hunters-house"
                state={{ prevPath, scrollPosRef }}
              >
                <Button className="group absolute inset-x-0 bottom-[6%] w-max m-auto rounded">
                  <p className=" text-font m-1 font-bold flex items-center">
                    <Camera className="w-6 h-6 mr-3" />
                    <Trans i18nKey="section3_title" />
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all" />
                  </p>
                </Button>
              </Link>
            </div>
            <h2 className="text-center lg:col-start-2 font-bold text-2xl lg:px-16 xl:px-[8%] xl:mt-[2vw] my-8 lg:mt-0 underline underline-offset-4 decoration-grass9">
              <Trans i18nKey="section3_title" />
            </h2>
            <div className="lg:col-start-2 lg:px-16 xl:px-[8%] my-8 lg:my-0 xl:max-w-[75%] xl:mx-auto">
              <p>
                <Trans i18nKey="section3_1" />
              </p>
              <p className="my-8">
                <Trans i18nKey="section3_2" />
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-8 lg:mt-24 flex-col lg:flex-row min-h-min mx-4 my-8">
          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min ">
            <h2 className="lg:col-start-1 font-bold text-2xl lg:px-16 xl:px-[8%] text-center my-8 lg:mt-0 underline underline-offset-4 decoration-grass9">
              <Trans i18nKey="section4_title" />
            </h2>
            <div className="lg:col-start-1 order-last lg:px-16 xl:px-[8%] my-8 lg:my-0 xl:max-w-[75%] xl:mx-auto">
              <p>
                <Trans i18nKey="section4_1" />
              </p>
              <p className="my-8">
                <Trans i18nKey="section4_2" />
              </p>
            </div>
            <div className="relative order-first lg:flex lg:row-start-1 lg:row-end-5 lg:col-start-2 lg:right-0 min-h-fit -mx-4 lg:mx-0 lg:max-h-[60vh]">
              <StaticImage
                src="../camping/camping2.jpg"
                alt="Jabłonkowy Las hut on the lake"
                className="max-h-[50vh] min-h-[50vh] lg:max-w-[49vw] w-full lg:w-[49vw]"
                objectPosition={"center"}
              />
              <Link
                draggable={false}
                to="/houses-huts/gallery/camping"
                state={{ prevPath, scrollPosRef }}
              >
                <Button className="group absolute inset-x-0 bottom-[6%] w-max m-auto rounded">
                  <p className=" text-font m-1 font-bold flex items-center">
                    <Camera className="w-6 h-6 mr-3" />
                    <Trans i18nKey="section4_title" />
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all" />
                  </p>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="min-w-20 w-[15vw] max-w-[135px] mx-auto my-16">
          <Flower className="fill-grass7 stroke-grass5 w-full h-full mx-auto" />
        </div>
      </main>
    </Layout>
  );
};

export default Houses;

export const Head: HeadFC = ({ pageContext }: any) => {
  return (
    <title>
      {pageContext.language === "en" ? "Accommodation" : "Zakwaterowanie"}
    </title>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["houses-huts"] }, language: { eq: $language } }
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
