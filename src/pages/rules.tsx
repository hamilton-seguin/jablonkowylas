import React, { FC } from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import { ListChecks } from "lucide-react";

import Layout from "../components/layout/Layout";
import { Divider } from "../components/ui/Divider";

const Rules: FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <div className="mx-8 my-8">
          <div className="text-center md:max-w-[66%] mx-auto">
            <h1 className="font-bold text-4xl lg:px-16 xl:px-[8%] xl:mt-[2vw] my-8 lg:mt-0">
              <Trans i18nKey="title1" />
            </h1>
            <Divider />
            <h1 className=" text-font font-bold items-center text-2xl mt-8">
              <Trans i18nKey="title2" />
            </h1>
            <section>
              <ol className="my-8 text-sm list-decimal text-justify">
                <li className="my-8">
                  <Trans i18nKey="section1a" />
                  <p className="my-4">
                    <Trans i18nKey="section1b" />
                  </p>
                </li>
                <li className="my-8">
                  <Trans i18nKey="section2" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section3" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section4" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section5" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section6" />
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
                </li>
                <li className="my-8">
                  <Trans i18nKey="section12" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section13" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section14" />
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
                  <Trans i18nKey="section20" />
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
                <li className="my-8">
                  <Trans i18nKey="section25" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section26" />
                  <ul className="list-disc ml-8 mt-4">
                    <li>
                      <Trans i18nKey="section26a" />
                    </li>
                    <li>
                      <Trans i18nKey="section26b" />
                    </li>
                  </ul>
                </li>
                <li className="my-8">
                  <Trans i18nKey="section27" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section28" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section29" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section30" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section31" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section32" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section33" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section34" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section35" />
                </li>
                <li className="my-8">
                  <Trans i18nKey="section36" />
                </li>
              </ol>
            </section>
            <section className="mx-auto">
              <h1 className=" text-font font-bold items-center text-2xl mb-8">
                <Trans i18nKey="title3" />
              </h1>
              <div className="text-justify text-sm">
                <p className="mt-8 mb-4">
                  <Trans i18nKey="section37" />
                </p>
                <ul className="list-disc ml-8">
                  <li>
                    <Trans i18nKey="section37a" />
                  </li>
                  <li>
                    <Trans i18nKey="section37b" />
                  </li>
                  <li>
                    <Trans i18nKey="section37c" />
                  </li>
                </ul>
                <p className="mt-8 mb-4">
                  <Trans i18nKey="section38" />
                </p>
              </div>
            </section>
            <section className="mt-8 mb-16">
              <h1 className=" text-font font-bold items-center text-2xl mb-8">
                <Trans i18nKey="title4" />
              </h1>
              <div className="text-justify text-sm">
                <ul className="list-disc ml-8">
                  <li>
                    <Trans i18nKey="section39a" />
                  </li>
                  <li>
                    <Trans i18nKey="section39b" />
                  </li>
                  <li>
                    <Trans i18nKey="section39c" />
                  </li>
                  <li>
                    <Trans i18nKey="section39d" />
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div>
          <StaticImage
            src="../images/outdoor/outdoor8.jpg"
            alt="rules page"
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

export default Rules;
export const Head: HeadFC = ({ pageContext }: any) => {
  return (
    <>
      <html lang={pageContext.language} />
      <title>
        {pageContext.language === "en" ? "Rules & Regulations" : "Regulamin"}
      </title>
    </>
  );
};

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
