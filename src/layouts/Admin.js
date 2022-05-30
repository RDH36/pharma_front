import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import PharmacieNavbar from "components/Navbars/PharmacieNavbar.js";
import Sidebar from "components/Sidebar/SidebarAdmin";
import HeaderStats from "components/Headers/HeaderStatsAdmin";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import Pharmacie from "views/admin/Pharmacie";
import TableAdminPharmacieAttente from "views/admin/TableAdminPharmacieAttente";
import TableAdminPharmacieValide from "views/admin/TableAdminPharmacieValide";
import TableAdminUtilisateur from "views/admin/TableAdminUtilisateur";
import PharmacieJsx from "views/admin/Pharmacie";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24 ">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route
              path="/admin/pharmacieattente"
              exact
              component={TableAdminPharmacieAttente}
            />

            <Route
              path="/admin/pharmacieattente/:idPharmacie"
              exact
              component={PharmacieJsx}
            />
            <Route
              path="/admin/pharmacievalide"
              exact
              component={TableAdminPharmacieValide}
            />
            <Route
              path="/admin/utilisateurs"
              exact
              component={TableAdminUtilisateur}
            />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </>
  );
}
