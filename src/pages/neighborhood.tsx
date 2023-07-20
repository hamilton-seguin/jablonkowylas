import React, { FC, useEffect, useState } from "react";
import { Link, HeadFC, PageProps, graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { TreePine } from "lucide-react";

import Layout from "../components/layout/Layout";
import { Draggable } from "../components/Draggable";
import { Divider } from "../components/ui/Divider";
import {
  scrollPosition,
  saveScrollPosition,
  getSavedScrollPosition,
  scrollToSavedPosition,
} from "../utils/scrollToPosition";

const Neighborhood: FC<PageProps> = ({ data }: any) => {
  const [prevPath, setPrevPath] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setPrevPath(location.pathname);

    window.addEventListener("scroll", scrollPosition);
    getSavedScrollPosition();
    scrollToSavedPosition();
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", saveScrollPosition);
    };
  }, []);

  return (
    <Layout>
      <main>
        <div className="mx-4 my-8">
          <div className="text-center">
            <h1 className="font-bold text-4xl lg:px-16 xl:px-[8%] xl:mt-[2vw] my-8 lg:mt-0">
              Our Neighborhood
            </h1>
            <Divider />
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
        <div
          id="GalleryId"
          className="flex flex-col h-full justify-end relative"
          // ref={directionalArrows}
        >
          <Draggable className="bg-grass3 pt-4 pb-3 md:pt-10 md:pb-8">
            <div className="flex snap-x overflow-x-auto scroll-smooth gap-2 items-center h-[18vh] overflow-y-hidden">
              {data.allFile.edges.map((image: any, i: number) => (
                <div
                  key={image.node.name}
                  className="flex snap-start shrink-0 max-w-fit"
                >
                  <Link
                    to={`/gallery/${image.node.name}`}
                    aria-label="Display image"
                    style={{ cursor: "inherit" }}
                    state={{ prevPath }}
                    onClick={saveScrollPosition}
                  >
                    <GatsbyImage
                      image={getImage(image.node)!}
                      alt={image.node.name}
                      className="w-[27vw] lg:w-[21vw] 2xl:w-[14vw] 3xl:w-[10vw] h-[24vw] lg:h-[18vw] 2xl:h-[11vw] 3xl:h-[8vw]"
                      draggable={false}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </Draggable>
        </div>
        <div className="min-w-20 w-[15vw] max-w-[135px] mx-auto my-16">
          <TreePine className="fill-grass7 stroke-grass5 w-full h-full http://localhost:8000/mx-auto" />
        </div>
      </main>
    </Layout>
  );
};

export default Neighborhood;
export const Head: HeadFC = () => <title>Neighborhood</title>;

export const query = graphql`
  query GalleryRenderQuery {
    allFile(
      sort: { name: ASC }
      filter: {
        extension: { regex: "/(jpg)|(jpeg)/" }
        sourceInstanceName: { eq: "outdoor" }
      }
    ) {
      edges {
        node {
          name
          publicURL
          childImageSharp {
            gatsbyImageData(formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;
