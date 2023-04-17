import React, { FC } from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { CameraIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "../components/ui/Button";

const Houses: FC<PageProps> = () => {
  return (
    <Layout>
      <main className="mt-20">
        <div className="flex lg:mt-10 flex-col lg:flex-row min-h-min mx-4">
          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min lg:min-h-[49vw]">
            <div className="relative lg:flex lg:absolute lg:left-0 -mx-4 lg:mx-0 lg:order-first">
              <StaticImage
                src="../images/image10.jpg"
                alt="jablonkowylas house on the lake"
                className="max-h-[70vh] lg:max-h-fit lg:max-w-[49vw] w-full"
              />
              <Button className="group absolute inset-x-0 bottom-[6%] w-max m-auto rounded">
                <p className=" text-font m-1 font-bold flex items-center">
                  <CameraIcon className=" w-6 h-6 mr-4" />
                  Houses
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all" />
                </p>
              </Button>
            </div>
            <h1 className="text-center lg:col-start-2 font-bold text-4xl lg:px-16 xl:px-[8%] xl:mt-[4vw] my-8 lg:mt-0">
              House & Huts
            </h1>
            <div className="text-center lg:col-start-2 mx-auto mb-8  xl:mt-[4vw] border-t-[2px] border-grass9 w-1/3"></div>
            <h2 className="text-center lg:col-start-2 font-bold text-2xl lg:px-16 xl:px-[8%] mb-8  xl:mt-[4vw] underline underline-offset-4 decoration-grass9">
              Houses
            </h2>
            <div className="lg:col-start-2 lg:px-16 xl:px-[8%] my-8 lg:my-0 xl:max-w-[75%]">
              <p>
                Hiking addict, self-starter, band member, Japanese fashion
                designer. Acting at the junction of simplicity and mathematics
                to save the world from bad design. Spanish award-winning
                designer raised and graduated in Tokyo at the School of Fashion
                & currently living in New York City.
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

        <div className="flex mt-8 lg:mt-10 flex-col lg:flex-row min-h-min mx-4">
          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min lg:min-h-[49vw]">
            <h2 className="lg:col-start-1 font-bold text-2xl lg:px-16 xl:px-[8%] text-center my-8 lg:mt-0 underline underline-offset-4 decoration-grass9">
              Huts
            </h2>
            <div className="lg:col-start-1 order-last lg:px-16 xl:px-[8%] my-8 lg:my-0 xl:max-w-[75%]">
              <p>
                Her work explores the relationship between gender politics and
                romance tourism. With influences as diverse as Machiavelli and
                Roy Lichtenstein, new synergies are generated from both
                traditional and modern meanings.
              </p>
              <p className="my-8">
                Ever since she was a child she has been fascinated by the
                theoretical limits of meaning. What starts out as yearning soon
                becomes debased into a hegemony of greed, leaving only a sense
                of nihilism and the prospect of a new synthesis.
              </p>
              <p>
                As shifting phenomena become clarified through frantic and
                repetitive practice, the viewer is left with a hymn to the
                possibilities of our condition.
              </p>
            </div>
            <div className="relative order-first lg:flex lg:absolute lg:right-0 min-h-fit -mx-4 lg:mx-0">
              <StaticImage
                src="../images/image11.jpg"
                alt="jablonkowylas hut on the lake"
                className="max-h-[70vh] lg:max-h-fit lg:max-w-[49vw] w-full lg:w-[49vw]"
                objectPosition={"center"}
              />
              <Button className="group absolute inset-x-0 bottom-[6%] w-max m-auto rounded">
                <p className=" text-font m-1 font-bold flex items-center">
                  <CameraIcon className="w-6 h-6 mr-4" />
                  Huts
                </p>
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex lg:mt-10 flex-col lg:flex-row min-h-min mx-4">
          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min lg:min-h-[49vw]">
            <div className="relative lg:flex lg:absolute lg:left-0 min-h-fit -mx-4 lg:mx-0 lg:order-first sm:mx-auto">
              <StaticImage
                src="../images/image8.jpg"
                alt="jablonkowylas big house on the lake"
                className="max-h-[70vh] lg:max-h-fit lg:max-w-[49vw]"
                objectPosition={"top"}
              />
              <Button className="group absolute inset-x-0 bottom-[6%] w-max m-auto rounded">
                <p className=" text-font m-1 font-bold flex items-center">
                  <CameraIcon className="w-6 h-6 mr-4" />
                  Big House
                </p>
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all" />
              </Button>
            </div>
            <h2 className="text-center lg:col-start-2 font-bold text-2xl lg:px-16 xl:px-[8%] xl:mt-[4vw] my-8 lg:mt-0 underline underline-offset-4 decoration-grass9">
              Big House
            </h2>
            <div className="lg:col-start-2 lg:px-16 xl:px-[8%] my-8 lg:my-0 xl:max-w-[75%]">
              <p>
                Hiking addict, self-starter, band member, Japanese fashion
                designer. Acting at the junction of simplicity and mathematics
                to save the world from bad design. Spanish award-winning
                designer raised and graduated in Tokyo at the School of Fashion
                & currently living in New York City.
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
      </main>
    </Layout>
  );
};

export default Houses;

export const Head: HeadFC = () => <title>Houses & Huts</title>;
