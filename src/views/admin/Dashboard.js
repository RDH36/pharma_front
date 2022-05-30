import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardPageVisitsGenerique from "components/Cards/CardPageVisitsGenerique.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import TableAdminPharmacieAttente from "views/admin/TableAdminPharmacieAttente";
import Sidebar from "components/Sidebar/Sidebar";
import PharmacieAttente from "components/accordeon/AccordeonListePharmacieAttente";
import SendEmail from "components/email/SendEmail";
import PharmacieNavbar from "components/Navbars/PharmacieNavbar.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full min-w-500-px xl:w-6/12 mb-12 xl:mb-0 px-4 left-0 "></div>
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4 left-0 max-height-100"></div>
      </div>
      <TableAdminPharmacieAttente />
      {/* <SendEmail /> */}
    </>
  );
}
