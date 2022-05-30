import React from "react";
import { Link } from "react-router-dom";

// components

import Footer from "components/Footers/Footer.js";
import { Switch, Route, Redirect } from "react-router-dom";
import TableauListeGarde from "components/tableau/TableauListeGarde";
import TableauListePharma from "components/tableau/TableauListePharma";
import Slider from "components/caroussel/Slider";
import Register from "views/auth/Register";
import AuthNavbar from "../components/Navbars/AuthNavbar";
import CardPanier from "components/Cards/CardPanier";
import CardProduits from "components/Cards/CardProduits";
import TableauListeProduitPharma from "../components/tableau/TableauListeProduitPharma";

export default function MenuPrincipale() {
  return (
    <>
      <main className="bgDash">
        <div className="z-0">
          <Slider />
        </div>
        <Register></Register>
        <section className="relative py-16 bg-blueGray-200">
          <Switch>
            <Route
              path="/acceuil/tableauproduitpharma"
              component={TableauListeGarde}
            />
            <Route
              path="/acceuil/tableaulistepharma"
              component={TableauListePharma}
            />

            <Route path="/acceuil" exact component={TableauListeGarde} />

            <Redirect from="/acceuil" to="/acceuil/listproduit" />
          </Switch>
        </section>
      </main>
      <Footer />
    </>
  );
}
