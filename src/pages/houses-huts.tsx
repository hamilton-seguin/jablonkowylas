import React, { FC } from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Camera, Flower, ChevronRight } from "lucide-react";

import Layout from "../components/layout/Layout";
import { Button } from "../components/ui/Button";

const Houses: FC<PageProps> = () => {
  return (
    <Layout>
      <main className="mt-16">
        <div className="flex flex-col lg:flex-row min-h-min mx-4 my-8">
          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min ">
            <div className="relative lg:flex lg:row-start-1 lg:row-end-5 lg:left-0 -mx-4 lg:mx-0 lg:order-first">
              <StaticImage
                src="../houses/houses4.jpeg"
                alt="Jablonkowy Las house on the lake"
                className="max-h-[70vh] min-h-[50vh] lg:max-h-fit lg:max-w-[49vw] w-full"
              />
              <Link
                draggable={false}
                to="/houses-huts/gallery/houses"
                state={{ prevPath: location.pathname }}
              >
                <Button className="group absolute inset-x-0 bottom-[6%] w-max m-auto rounded">
                  <p className=" text-font m-1 font-bold flex items-center">
                    <Camera className=" w-6 h-6 mr-3" />
                    Cottages
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all" />
                  </p>
                </Button>
              </Link>
            </div>
            <h1 className="text-center lg:col-start-2 font-bold text-4xl lg:px-16 xl:px-[8%] xl:mt-[2vw] my-8 lg:mt-0">
              Cottages & Huts
            </h1>
            <div className="text-center lg:col-start-2 mx-auto mb-8  xl:mt-[2vw] border-t-[2px] border-grass9 w-1/3"></div>
            <h2 className="text-center lg:col-start-2 font-bold text-2xl lg:px-16 xl:px-[8%] mb-8  xl:mt-[2vw] underline underline-offset-4 decoration-grass9">
              Cottages
            </h2>
            <div className="lg:col-start-2 lg:px-16 xl:px-[8%] my-8 lg:my-0 xl:max-w-[75%] xl:mx-auto">
              <p>
                Wooden houses beautifully blending with the greenery of the
                forest, have two rooms and can accommodate up to 4 people. Each
                has a private bathroom and a fully equipped kitchenette. On the
                private terrace you can have breakfast or relax with a book.
              </p>
              <p className="my-8">
                Perfect for a family or a group of friends who want to be close
                to nature, but appreciate the comfort of their stay.
              </p>
              <p>
                One cottage located on the edge of the forest overlooking the
                lake has two floors, a terrace and a balcony, and an internal
                fireplace.
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-8 lg:mt-24 flex-col lg:flex-row min-h-min mx-4 my-8">
          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min ">
            <h2 className="lg:col-start-1 font-bold text-2xl lg:px-16 xl:px-[8%] text-center my-8 lg:mt-0 underline underline-offset-4 decoration-grass9">
              Huts
            </h2>
            <div className="lg:col-start-1 order-last lg:px-16 xl:px-[8%] my-8 lg:my-0 xl:max-w-[75%] xl:mx-auto">
              <p>
                Cozy double cabins are scattered throughout the Jabłonkowy Las
                area. Created for people who appreciate unusual accommodation,
                want to be close to nature, and prefer to spend their days
                outdoors.
              </p>
              <p className="my-8">
                Each hut has two single beds, a table, hangers and a corner with
                a mirror.
              </p>
            </div>
            <div className="relative order-first lg:flex lg:row-start-1 lg:row-end-5 lg:col-start-2 lg:right-0 min-h-fit -mx-4 lg:mx-0">
              <StaticImage
                src="../huts/huts1.jpeg"
                alt="Jablonkowy Las hut on the lake"
                className="max-h-[70vh] min-h-[50vh] lg:max-h-fit lg:max-w-[49vw] w-full lg:w-[49vw]"
                objectPosition={"center"}
              />
              <Link
                draggable={false}
                to="/houses-huts/gallery/huts"
                state={{ prevPath: location.pathname }}
              >
                <Button className="group absolute inset-x-0 bottom-[6%] w-max m-auto rounded">
                  <p className=" text-font m-1 font-bold flex items-center">
                    <Camera className="w-6 h-6 mr-3" />
                    Huts
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all" />
                  </p>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex lg:mt-24 flex-col lg:flex-row min-h-min mx-4 my-8">
          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min ">
            <div className="relative lg:flex lg:row-start-1 lg:row-end-5 lg:left-0 min-h-fit -mx-4 lg:mx-0 lg:order-first">
              <StaticImage
                src="../big-house/big-house1.jpeg"
                alt="Jablonkowy Las pavilion on the lake"
                className="max-h-[70vh] min-h-[50vh] lg:max-h-fit lg:max-w-[49vw]"
                objectPosition={"top"}
              />
              <Link
                draggable={false}
                to="/houses-huts/gallery/big-house"
                state={{ prevPath: location.pathname }}
              >
                <Button className="group absolute inset-x-0 bottom-[6%] w-max m-auto rounded">
                  <p className=" text-font m-1 font-bold flex items-center">
                    <Camera className="w-6 h-6 mr-3" />
                    Pavilion
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all" />
                  </p>
                </Button>
              </Link>
            </div>
            <h2 className="text-center lg:col-start-2 font-bold text-2xl lg:px-16 xl:px-[8%] xl:mt-[2vw] my-8 lg:mt-0 underline underline-offset-4 decoration-grass9">
              Pavilion
            </h2>
            <div className="lg:col-start-2 lg:px-16 xl:px-[8%] my-8 lg:my-0 xl:max-w-[75%] xl:mx-auto">
              <p>
                The one-story pavilion with rooms overlooking the lake is an
                excellent choice for two, three or four people. Each room is
                equipped with a private bathroom, table, safe and comfortable
                beds.
              </p>
              <p className="my-8">
                Ever since she was a postgraduate she has been fascinated by the
                ephemeral nature of the universe.
              </p>
              <p>
                Her work explores the relationship between the universality of
                myth and recycling culture.
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-20 w-[15vw] max-w-[135px] mx-auto my-16">
          <Flower className="fill-grass7 stroke-grass5 w-full h-full mx-auto" />
        </div>
      </main>
    </Layout>
  );
};

export default Houses;

export const Head: HeadFC = () => <title>Houses & Huts</title>;
