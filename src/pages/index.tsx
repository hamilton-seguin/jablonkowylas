import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <div className="flex bg-grass3"></div>
        <div className="relative flex items-center justify-center">
          <h1 className="absolute z-10 text-3xl md:text-6xl lg:text-8xl font-bold text-background mb-[15%]">
            JABLONKOWYLAS
          </h1>
          <StaticImage src="../images/image3.jpg" alt="" />
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Jablonkowylas</title>
    </>
  );
};
