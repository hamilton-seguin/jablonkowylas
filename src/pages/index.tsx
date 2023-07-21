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
        <div className="bg-grass3"></div>
        <div className="relative flex items-center justify-center">
          <h1 className="absolute z-10 text-3xl md:text-6xl lg:text-8xl font-bold text-background mb-[15%]">
            <Trans i18nKey="title" />
          </h1>
          <StaticImage src="../images/image3.jpg" alt="" />
        </div>
        <div className="text-center my-16 mx-24">
          <p>
            <Trans i18nKey="section1" />
          </p>
          <p className="mt-8">
            <Trans i18nKey="section2" />
          </p>
        </div>
        <div className="min-w-20 w-[15vw] max-w-[135px] mx-auto my-16">
          <Apple className="fill-grass7 stroke-grass5 w-full h-full mx-auto" />
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Jablonkowy Las</title>
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
