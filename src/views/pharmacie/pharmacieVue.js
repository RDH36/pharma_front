import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardStats from "components/Cards/CardStats";
import HeaderStats from "components/Headers/HeaderStats";
import PharmacieNavbar from "components/Navbars/PharmacieNavbar.js";

export default function PharmacieVue() {
  return (
    <>
      <div className="relative bg-blueGray-100  w-full h-full">
        <div className="px-4 md:px-10 mx-auto w-full -m-24"></div>
        <PharmacieNavbar />
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
            <CardStats />
            <CardPageVisits />
            <CardBarChart />
            <CardLineChart />
            <CardSocialTraffic />
          </div>
        </div>
      </div>
    </>
  );
}
