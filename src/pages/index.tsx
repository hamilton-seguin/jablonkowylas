import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";
import { Apple } from "lucide-react";

import Layout from "../components/layout/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <div className="relative flex items-center justify-center mt-8 md:mt-0">
          <div className="absolute z-10 mb-[5%] gap-4 flex flex-col items-center">
            <h1 className=" text-5xl md:text-6xl lg:text-8xl font-bold text-background">
              <Trans i18nKey="title" />
            </h1>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-background">
              <Trans i18nKey="title2" />
            </h1>
          </div>
          <StaticImage
            src="../gallery/facilities20.jpg"
            alt=""
            className="max-h-[80vh] w-full object-cover"
            objectPosition={"center"}
          />
        </div>
        <div className="text-center my-16 mx-24">
          <p>
            <Trans i18nKey="section1" />
          </p>
          <p className="mt-8">
            <Trans i18nKey="section2" />
          </p>
        </div>
        <div className="min-w-20 w-[55vw] max-w-[300px] mx-auto my-16">
          {/* <Apple className="fill-grass7 stroke-grass5 w-full h-full mx-auto" /> */}
          <StaticImage
            src="../images/ugly-logo.png"
            alt="apple"
            className="w-full h-full mx-auto"
            draggable={false}
          />
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Jabłonkowy Las</title>
    </>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
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
