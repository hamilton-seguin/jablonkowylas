import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Apple } from "lucide-react";

import Layout from "../components/layout/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <div className="bg-grass3"></div>
        <div className="relative flex items-center justify-center">
          <h1 className="absolute z-10 text-3xl md:text-6xl lg:text-8xl font-bold text-background mb-[15%]">
            JABLONKOWY LAS
          </h1>
          <StaticImage src="../images/image3.jpg" alt="" />
        </div>
        <div className="text-center my-16 mx-24">
          <p>
            In the heart of Masury, Jabłonkowy Las is surrounded by an endless forest, fragrant meadows
            and a transparent lake, on the edge of the climatic village of Stare
            Jabłonki.
          </p>
          <p className="mt-8">
            In our resort, the idyllic surroundings, distant from the hustle and
            bustle of the city and roads, make time flow in a different rhythm. You'll be more in line with the movement of the clouds than with the clock.
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
