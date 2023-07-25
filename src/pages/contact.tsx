import React, { FC } from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import { Phone, Instagram, Facebook } from "lucide-react";

import Layout from "../components/layout/Layout";
import { Divider } from "../components/ui/Divider";

const Contact: FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <div className="mx-4 my-8">
          <div className="text-center md:max-w-[66%] mx-auto">
            <h1 className="font-bold text-4xl lg:px-16 xl:px-[8%] xl:mt-[2vw] my-8 lg:mt-0">
              <Trans i18nKey="title" />
            </h1>
            <Divider />
            <h1 className=" text-font font-bold items-center text-2xl mt-8">
              <Trans i18nKey="section1" />
            </h1>
            <p className="my-8">
              <Trans i18nKey="section1_2" />
              <span className="bg-grass5 hover:bg-grass6">+48 601 563 030</span>
              <Trans i18nKey="section1_3" />
              <span className="bg-grass5 hover:bg-grass6">
                <a href="mailto://jablonkowylas@gmail.com">
                  jablonkowylas@gmail.com
                </a>
              </span>
            </p>
            <p className="my-8">
              <Trans i18nKey="section1_5" />
            </p>
            <div className="mx-auto mb-8 inline-flex ">
              <a
                className=" w-full h-full mx-auto mr-4"
                href="https://www.instagram.com/jablonkowylas/"
              >
                <Instagram className="fill-grass7 stroke-grass5 hover:fill-grass8 hover:stroke-grass6 mx-auto h-full w-[15vw] max-w-[50px]" />
              </a>
              <a
                className=" w-full h-full mx-auto"
                href="https://www.facebook.com/people/Jab%C5%82onkowy-Las/100095019637190/"
              >
                <Facebook className="fill-grass7 stroke-grass5 hover:fill-grass8 hover:stroke-grass6 mx-auto h-full w-[15vw] max-w-[50px]" />
              </a>
            </div>
            <div className="mx-auto">
              <h1 className=" text-font font-bold items-center text-2xl mb-8">
                <Trans i18nKey="title2" />
              </h1>
              <p className="mt-8 mb-4">
                <Trans i18nKey="section2_1" />
              </p>
              <p className="mb-8">
                <a
                  className="bg-grass5 hover:bg-grass6"
                  href="https://goo.gl/maps/34eRjKWey5sPBgFY9"
                >
                  ul. Turystyczna 5 <br />
                  14-133 Stare Jabłonki
                </a>
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37799.61769159811!2d20.05143126757827!3d53.691961996908134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471d7b914b5a9451%3A0xb084110fab9adc7c!2sTurystyczna%205%2C%2014-133%20Stare%20Jab%C5%82onki%2C%20Poland!5e0!3m2!1sen!2sfr!4v1689783892204!5m2!1sen!2sfr"
                className="w-full h-[40vh] md:w-[50vw] mx-auto"
                title="Jałonkowy Las on Google Maps"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <StaticImage
            src="../images/outdoor/outdoor8.jpg"
            alt="Contact us"
            className="h-[35vh] w-full"
          />
        </div>
        <div className="min-w-20 w-[55vw] max-w-[300px] mx-auto my-16">
          {/* <Apple className="fill-grass7 stroke-grass5 w-full h-full mx-auto" /> */}
          <StaticImage
            src="../images/ugly-logo.png"
            alt="apple"
            className="w-full h-full mx-auto"
            draggable={false}
          />
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
export const Head: HeadFC = ({ pageContext }: any) => {
  return (
    <title>{pageContext.language === "en" ? "Contact Us" : "Kontakt"}</title>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["contact"] }, language: { eq: $language } }
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
