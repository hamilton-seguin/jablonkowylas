import React, { FC } from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import { ListChecks } from "lucide-react";

import Layout from "../components/layout/Layout";
import { Divider } from "../components/ui/Divider";

const Privacy: FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <div className="mx-4 my-8">
          <div className="text-center md:max-w-[66%] mx-auto">
            <h1 className="font-bold text-4xl lg:px-16 xl:px-[8%] xl:mt-[2vw] my-8 lg:mt-0">
              <Trans i18nKey="title1" />
            </h1>
            <Divider />
            <section className="mx-4 mb-16">
              <ol className="my-8 text-sm list-decimal text-justify">
                <li className="my-8">
                  <Trans i18nKey="section1" />
                  <b>
                    <Trans i18nKey="section1a" />
                  </b>
                  <Trans i18nKey="section1b" />
                </li>

                <li className="my-8">
                  <Trans i18nKey="section2" />
                  <b>
                    <Trans i18nKey="section2a" />
                  </b>
                  <Trans i18nKey="section2b" />
                  <b>
                    <Trans i18nKey="section2c" />
                  </b>
                  <Trans i18nKey="section2d" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section3" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section4" />
                  <ul className="list-disc ml-8 mt-4">
                    <li>
                      <Trans i18nKey="section4a" />
                    </li>
                    <li>
                      <Trans i18nKey="section4b" />
                    </li>
                    <li>
                      <Trans i18nKey="section4c" />
                    </li>
                    <li>
                      <Trans i18nKey="section4d" />
                    </li>
                  </ul>
                </li>
                <li className="my-8">
                  <Trans i18nKey="section5" />
                  <ul className="list-disc ml-8 mt-4">
                    <li>
                      <Trans i18nKey="section5a" />
                    </li>
                    <li>
                      <Trans i18nKey="section5b" />
                    </li>
                    <li>
                      <Trans i18nKey="section5c" />
                    </li>
                    <li>
                      <Trans i18nKey="section5d" />
                    </li>
                    <li>
                      <Trans i18nKey="section5e" />
                    </li>
                  </ul>
                </li>
                <li className="my-8">
                  <Trans i18nKey="section6a" />
                  <b>
                    <Trans i18nKey="section6b" />
                  </b>
                  <Trans i18nKey="section6c" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section7" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section8" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section9" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section10" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section11" />
                  <ul className="list-disc ml-8 mt-4">
                    <li>
                      <Trans i18nKey="section11a" />
                    </li>
                    <li>
                      <Trans i18nKey="section11b" />
                    </li>
                  </ul>
                </li>
                <li className="my-8">
                  <Trans i18nKey="section12" />
                  <ul className="list-disc ml-8 mt-4">
                    <li>
                      <Trans i18nKey="section12a" />
                    </li>
                    <li>
                      <Trans i18nKey="section12b" />
                    </li>
                    <li>
                      <Trans i18nKey="section12c" />
                    </li>
                  </ul>
                </li>
                <li className="my-8">
                  <Trans i18nKey="section13" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section14" />
                  <ul className="list-disc ml-8 mt-4">
                    <li>
                      <Trans i18nKey="section14a" />
                    </li>
                    <li>
                      <Trans i18nKey="section14b" />
                    </li>
                    <li>
                      <Trans i18nKey="section14c" />
                    </li>
                  </ul>
                </li>
                <li className="my-8">
                  <Trans i18nKey="section15" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section16" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section17" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section18" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section19" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section20a" />
                  <b>
                  <Trans i18nKey="section20b" /></b>
                </li>
                <li className="my-8">
                  <Trans i18nKey="section21" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section22" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section23" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section24" />
                </li>
              </ol>
            </section>
          </div>
        </div>
        <div>
          <StaticImage
            src="../images/outdoor/outdoor8.jpg"
            alt="Privacy"
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

export default Privacy;
export const Head: HeadFC = () => <title>Privacy</title>;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["privacy"] }, language: { eq: $language } }
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
