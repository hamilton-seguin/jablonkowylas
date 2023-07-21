import React, { FC } from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Carrot } from "lucide-react";
import { Trans } from "gatsby-plugin-react-i18next";

import Layout from "../components/layout/Layout";
import { Divider } from "../components/ui/Divider";

const Restaurant: FC<PageProps> = () => {
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
            <Trans i18nKey="text"/>
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
              <Trans i18nKey="breakfast"/>
              </h2>
              <p className="my-8 lg:col-start-1">
              <Trans i18nKey="breakfast1"/>
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
              <Trans i18nKey="lunch"/>
              </h2>
              <p className="my-8">
              <Trans i18nKey="lunch1"/>
              </p>
              <p className="my-8">
              <Trans i18nKey="extra"/>
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
              <Trans i18nKey="extra1"/>
              </p>
            </div>
          </div>
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
