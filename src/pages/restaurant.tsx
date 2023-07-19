import React, { FC } from "react";
import { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";
import { Carrot } from "lucide-react";

const Restaurant: FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <div className="mx-4 my-8">
          <div className="text-center">
            <h1 className="font-bold text-4xl lg:px-16 xl:px-[8%] xl:mt-[2vw] my-8 lg:mt-0">
              Restaurant
            </h1>
            <div className="mx-auto mb-8 xl:mt-[2vw] border-t-[2px] border-grass9 w-1/5"></div>
            <h1 className=" text-font font-bold items-center text-2xl mt-8">
              Excellent Polish cuisine is an asset of Jabłonkowy Las.
            </h1>
            <p className="my-8">
              We serve classic Polish dishes prepared on site from fresh, local
              products.
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
                Breakfast 9-11
              </h2>
              <p className="my-8 lg:col-start-1">
                For breakfast, we always serve a hot dish, e.g. omelette,
                pancakes or scrambled eggs. Everyday is something different.
                Later, we serve cheeses, meats and vegetables to the table. On
                some days, cold cuts replace smoked fish. Plus country bread,
                jam and honey. Cereals, milk, juice, coffee, tea on the bar.{" "}
              </p>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min my-16">
            <div className="lg:flex lg:col-start-1 lg:row-start-1 lg:row-end-3 ">
              <StaticImage
                src="../images/food/coffee-lake.jpeg"
                alt="Restaurant"
                className="h-[30vh] lg:max-w-[49vw] w-full lg:w-[49vw]"
                objectPosition={"center"}
              />
            </div>
            <div className="px-16">
              <h2 className=" text-font font-bold flex items-center text-xl mt-8 underline underline-offset-4 decoration-grass9">
                Snack 12-17
              </h2>
              <p className="my-8">
                Between main meals, we invite you to the restaurant for coffee
                and a sweet snack such as homemade cakes or cookies.{" "}
              </p>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min">
          <div className="lg:flex lg:col-start-2 lg:row-start-1 lg:row-end-3 ">
              <StaticImage
                src="../images/food/soup.jpeg"
                alt="Restaurant"
                className="h-[30vh] lg:max-w-[49vw] w-full lg:w-[49vw]"
                objectPosition={"center"}
              />
            </div>
            <div className="px-16">
              <h2 className=" text-font font-bold flex items-center text-xl mt-8 underline underline-offset-4 decoration-grass9">
                Dinner 18-00
              </h2>
              <p className="my-8">
                The evening meal consists of three dishes served to the table.
                We start with the soup, then the main course, and finally the
                dessert. We always try to choose dishes so that they are not
                only tasty, but also suitable for the Warmian countryside.
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
