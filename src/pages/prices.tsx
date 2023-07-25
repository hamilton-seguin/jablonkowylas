import React, { FC, useEffect, useState } from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { Trans, Link, useTranslation } from "gatsby-plugin-react-i18next";
import { CalendarCheck } from "lucide-react";

import Layout from "../components/layout/Layout";
import { Divider } from "../components/ui/Divider";
import { StaticImage } from "gatsby-plugin-image";
import {
  scrollPosition,
  saveScrollPosition,
  scrollToSavedPosition,
} from "../utils/scrollToPosition";

const Prices: FC<PageProps> = ({ data }: any) => {
  const { i18n } = useTranslation();

  const image = data.allFile.edges[0].node;
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
        <div className="mx-4 my-8 flex flex-col">
          <div className="text-center md:max-w-[66%] mx-auto">
            <h1 className="font-bold text-4xl lg:px-16 xl:px-[8%] xl:mt-[2vw] my-8 lg:mt-0">
              <Trans i18nKey="title" />
            </h1>
            <Divider />
            <h1 className=" text-font font-bold items-center text-2xl my-8">
              <Trans i18nKey="section1" />
            </h1>

            <p>
              <Trans i18nKey="section1-1" />
            </p>

            <p className="my-8">
              <Trans i18nKey="section2-1" />
              <span className="bg-grass5 hover:bg-grass6">
                <a href="mailto://rezerwacje@jablonkowylas.pl">
                  rezerwacje@jablonkowylas.pl
                </a>
              </span>
              <Trans i18nKey="section2-2" />
              <span className="bg-grass5 hover:bg-grass6">+48 601 563 030</span>
              <Trans i18nKey="section2-3" />
            </p>
            <p className="my-8">
              <Trans i18nKey="section3" />
            </p>
            <p className="my-8">
              <Trans i18nKey="section4" />
            </p>
            <p className="my-8">
              <Trans i18nKey="section5" />
            </p>
            <div className="self-center">
              <Link
                to={`/gallery/${image.name}`}
                aria-label="Display image"
                style={{ cursor: "inherit" }}
                state={{ prevPath }}
                onClick={saveScrollPosition}
              >
                {i18n.language === "pl" ? (
                  <StaticImage
                    src="../images/cennik.png"
                    alt="Neighborhood"
                    className="min-h-[35vh] max-h-[80vh]"
                    objectFit="contain"
                  />
                ) : (
                  <StaticImage
                    src="../images/price-list.png"
                    alt="Neighborhood"
                    className="min-h-[35vh] max-h-[80vh]"
                    objectFit="contain"
                  />
                )}
              </Link>
            </div>
          </div>
          <div className="self-center flex my-16">
            <StaticImage
              src="../images/outdoor/outdoor7.jpg"
              alt="Neighborhood"
              className="min-h-[35vh] max-h-[50vh] w-full lg:max-w-[80vw]"
              objectPosition={"center"}
            />
          </div>
        </div>
        <div className="min-w-20 w-[15vw] max-w-[135px] mx-auto my-16">
          <CalendarCheck className="fill-grass7 stroke-grass5 w-full h-full mx-auto" />
        </div>
      </main>
    </Layout>
  );
};

export default Prices;
export const Head: HeadFC = () => <title>Prices & Availibility</title>;

export const query = graphql`
  query ($language: String!) {
    allFile(
      sort: { name: ASC }
      filter: {
        extension: { regex: "/(png)/" }
        sourceInstanceName: { eq: "images" }
        name: { eq: "cennik" }
      }
    ) {
      edges {
        node {
          name
        }
      }
    }
    locales: allLocale(
      filter: { ns: { in: ["prices"] }, language: { eq: $language } }
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
