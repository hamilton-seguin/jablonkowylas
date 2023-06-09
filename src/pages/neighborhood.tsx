import React, { FC } from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";
import { TreePine } from "lucide-react";

const Neighborhood: FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <div className="mx-4 my-8">
          <div className="text-center">
            <h1 className="font-bold text-4xl lg:px-16 xl:px-[8%] xl:mt-[2vw] my-8 lg:mt-0">
              Our Neighborhood
            </h1>
            <div className="mx-auto mb-8 xl:mt-[2vw] border-t-[2px] border-grass9 w-1/5"></div>
          </div>
          <div>
            <StaticImage
              src="../big-house/area3.jpeg"
              alt="Neighborhood"
              className="h-[35vh] w-full"
            />
          </div>
          <div className="m-16">
            <p className="my-8">
              Jabłonkowy Las occupies 20 hectares of idyllic, Warmian space. Our
              resort is located in a birch and pine forest, by a private lake,
              away from the hustle and bustle of the city. Coming to us will
              provide everyone with close contact to nature, as well as peaceful
              and comfortable rest.
            </p>
            <p className="my-8">
              Everyone will find something for themselves here. The bookworm
              will relax in a hammock or on a bench located right by the water.
              Families with children will actively spend time on a private beach
              or playground. For the more active, we have water equipment
              rentals, such as kayaks and boats, or beach volleyball. We also
              highly recommend hiking in our beautiful Warmia forests. Perhaps
              you will be able to spot other inhabitants of our area, such as
              cranes, herons, storks, ravens and hawks, sometimes deer and other
              animals.
            </p>
            <p className="my-8">
              However, if you miss a big city, you can go on a trip to Olsztyn,
              30 kilometers away from Jabłonkowy Las. The beautiful Old Town and
              the famous High Gate will delight everyone.
            </p>
            <p className="my-8">
              In addition, the village of Grunwald, famous for the historical
              battle of 1410, when the Polish-Lithuanian army defeated the
              Teutonic Knights, is located 30 kilometers from our resort. Every
              year, on the Grunwald Field, a battle is staged with the
              participation of nearly 1,500 knights from Poland, Europe and even
              the world!
            </p>
          </div>
        </div>
        <div className="min-w-20 w-[15vw] max-w-[135px] mx-auto my-16">
          <TreePine className="fill-grass7 stroke-grass5 w-full h-full mx-auto" />
        </div>
      </main>
    </Layout>
  );
};

export default Neighborhood;
export const Head: HeadFC = () => <title>Neighborhood</title>;
