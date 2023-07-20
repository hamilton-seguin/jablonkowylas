import React, { FC } from "react";
import { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { CalendarCheck } from "lucide-react";

import Layout from "../components/layout/Layout";
import { Divider } from "../components/ui/Divider";

const Prices: FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <div className="mx-4 my-8">
          <div className="text-center md:max-w-[60%] mx-auto">
            <h1 className="font-bold text-4xl lg:px-16 xl:px-[8%] xl:mt-[2vw] my-8 lg:mt-0">
              Prices & Availibility
            </h1>
            <Divider />
            <h1 className=" text-font font-bold items-center text-2xl my-8">
              Jabłonkowy Las operates seasonally
            </h1>

            <p>In 2023, we start on July 1 and end on September 30.</p>
            <p>Minimum stay is 2 nights.</p>

            <p className="my-8">
              Reservations can be made by e-mail by sending an inquiry to the
              following address: <span className="bg-grass4 hover:bg-grass6"><a href="mailto://rezerwacje@jablonkowylas.pl">rezerwacje@jablonkowylas.pl</a></span> or by calling <span className="bg-grass4 hover:bg-grass6">+48 601 563 030</span>. Please provide the date of your planned stay and information
              about the selected house or cottage and the number of people.
            </p>
            <p className="my-8">
              Please reserve the date and house or cottage in advance. To
              confirm the reservation, an advance payment is required: in the
              case of a stay longer than 5 days, 30% of the cost of
              accommodation, in the case of stays shorter than 5 days, 50% of
              the cost of accommodation.
            </p>
            <p className="my-8">
              We collect the rest of the amount due for the stay on the day of
              arrival. In the event of an earlier departure than on the date
              booked by you, the amount due for the entire stay does not change.
            </p>
            <p className="my-8">
              The check in starts at 15:00 on the day of arrival and check out
              is 11:00 on the day of departure. Of course, it is possible to
              arrive earlier and leave later, everything in Jabłonkowy Las,
              apart from the houses and cottages will be available to you.
            </p>
            <br />
            <p className="my-8">In addition, meals can be purchased on site:</p>
            <p>Breakfast and dinner PLN 120 (children PLN 90)</p>
            <p>Breakfast PLN 45 (children PLN 35)</p>
            <p>Dinner PLN 90 (children PLN 70)</p>
            <p className="my-8">
              Please purchase meals at least one day in advance.
            </p>
          </div>
        </div>
        <div className="min-w-20 w-[15vw] max-w-[135px] mx-auto my-16">
          <CalendarCheck className="fill-grass7 stroke-grass5 w-full h-full mx-auto" />
        </div>
      </main>
    </Layout>
  );
};

export default Prices;
export const Head: HeadFC = () => <title>Prices & Availibility</title>;
