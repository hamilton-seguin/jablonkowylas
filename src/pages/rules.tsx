import React, { FC } from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import { ListChecks } from "lucide-react";

import Layout from "../components/layout/Layout";
import { Divider } from "../components/ui/Divider";

const rules: FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <div className="mx-4 my-8">
          <div className="text-center md:max-w-[66%] mx-auto">
            <h1 className="font-bold text-4xl lg:px-16 xl:px-[8%] xl:mt-[2vw] my-8 lg:mt-0">
              <Trans i18nKey="title" />
            </h1>
            <Divider />
            <h1 className=" text-font font-bold items-center text-2xl mt-8">
              <Trans i18nKey="section1" />
            </h1>
            <ol className="my-8">
              <li>
                <Trans i18nKey="section2" />
              </li>
              <li>
                <Trans i18nKey="section3" />
              </li>
              <li>
                <Trans i18nKey="section4" />
              </li>
              <li>
                <Trans i18nKey="section5" />
              </li>
              <li>
                <Trans i18nKey="section6" />
              </li>
              <li>
                <Trans i18nKey="section7" />
              </li>
              <li>
                <Trans i18nKey="section8" />
              </li>
              <li>
                <Trans i18nKey="section9" />
              </li>
              <li>
                <Trans i18nKey="section10" />
              </li>
              <li>
                <Trans i18nKey="section11" />
              </li>
              <li>
                <Trans i18nKey="section12" />
              </li>
              <li>
                <Trans i18nKey="section13" />
              </li>
              <li>
                <Trans i18nKey="section14" />
              </li>
              <li>
                <Trans i18nKey="section15" />
              </li>
              <li>
                <Trans i18nKey="section16" />
              </li>
              <li>
                <Trans i18nKey="section17" />
              </li>
              <li>
                <Trans i18nKey="section18" />
              </li>
              <li>
                <Trans i18nKey="section19" />
              </li>
              <li>
                <Trans i18nKey="section20" />
              </li>
              <li>
                <Trans i18nKey="section21" />
              </li>
              <li>
                <Trans i18nKey="section22" />
              </li>
              <li>
                <Trans i18nKey="section23" />
              </li>
              <li>
                <Trans i18nKey="section24" />
              </li>
              <li>
                <Trans i18nKey="section25" />
              </li>
            </ol>

            <div className="mx-auto">
              <h1 className=" text-font font-bold items-center text-2xl mb-8">
                <Trans i18nKey="title2" />
              </h1>
              <p className="mt-8 mb-4">
                <Trans i18nKey="section2_1" />
              </p>
            </div>
          </div>
        </div>
        <div>
          <StaticImage
            src="../images/outdoor/outdoor8.jpg"
            alt="rules us"
            className="h-[35vh] w-full"
          />
        </div>
        <div className="min-w-20 w-[15vw] max-w-[135px] mx-auto my-16">
          <ListChecks className="fill-grass7 stroke-grass5 w-full h-full mx-auto" />
        </div>
      </main>
    </Layout>
  );
};

export default rules;
export const Head: HeadFC = () => <title>Rules</title>;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["rules"] }, language: { eq: $language } }
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
