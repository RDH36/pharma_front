import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ClientNavbar from "components/Navbars/ClientNavbar.js";
import Footer from "components/Footers/Footer";
import Tables from "views/admin/Tables";
import CardTable from "components/Cards/CardTable";
import CardProduits from "components/Cards/CardProduits";
import Slider from "components/caroussel/Slider";

export default function Client() {
  return (
    <>
      <ClientNavbar />
      <main className="bgDash">
      <div className="z-0">
      <Slider />
      </div>  
        <section className="relative py-16 bg-blueGray-200">
          <Switch>
            <Route path="/client/historique" exact component={CardProduits} />
            <Route path="/client/compte" exact component={CardTable} />
            <Redirect from="/client" to="/client/compte" />
          </Switch>
        </section>
      </main>
      <Footer />
    </>
  );
}
