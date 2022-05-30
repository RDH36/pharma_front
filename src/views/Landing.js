import React from "react";
import { Link } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Slider from "components/caroussel/Slider";
import CardProduitEtPharmaGarde from "components/Cards/CardProduitEtPharmaGarde";
import FooterAdmin from "components/Footers/FooterAdmin";
import TableauListeGarde from "components/tableau/TableauListeGarde";
import TableauListeProduitPharma from "components/tableau/TableauListeProduitPharma";
import CardProfile from "components/Cards/CardProfile";
import CardBarChart from "components/Cards/CardBarChart";
import CardPageVisits from "components/Cards/CardPageVisits";
import logo from "../assets/img/pharmalogo.png";
import RechecherPharmacieValide from "../views/client/RecherchePharmacieValide";
import CardPanier from "components/Cards/CardPanier";
import ClientNavbar from "../components/Navbars/ClientNavbar";

export default function Landing(history) {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div className="absolute top-0 w-full h-full bg-center bg-cover">
            <Slider />
            <span id="blackOverlay" className="w-full h-full absolute"></span>
          </div>
        </div>

        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap ">
              <div className="lg:pt-12 pt-6 w-full z-40 md:w-4/12 h-6 px-16 text-center">
                <Link to="/acceuil/listproduit">
                  <div className="relative flex flex-col min-w-0 transfo break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                        <i className="fas fa-home fa-2x"></i>
                      </div>
                      <h6 className="text-xl font-semibold">ACCUEIL</h6>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="w-full z-40 md:w-4/12 h-6 px-16 text-center">
                <Link to="/acceuil/tableauproduit">
                  <div className="relative flex flex-col min-w-0  transfo break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                        <i className="fas fa-capsules"></i>
                      </div>
                      <h6 className="text-xl font-semibold">PRODUIT</h6>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="pt-6 w-full z-40 md:w-4/12 h-6 px-16 text-center">
                <Link to="/acceuil/table">
                  <div className="relative flex flex-col min-w-0 transfo break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                        <i className="fas fa-medkit"></i>
                      </div>
                      <h6 className="text-xl font-semibold">PHARMACIE</h6>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div id="affichage">
          <Switch>
            <Route
              path="/acceuil/tableauproduit"
              exact
              component={TableauListeProduitPharma}
            />
            <Route
              path="/acceuil/table"
              exact
              component={RechecherPharmacieValide}
            />
            <Route path="/acceuil/panier" exact component={CardPanier} />

            <Route
              path="/acceuil/listproduit"
              exact
              component={CardProduitEtPharmaGarde}
            />

            <Redirect from="/acceuil" to="/acceuil/listproduit" />
          </Switch>
        </div>
      </main>
      <FooterAdmin />
    </>
  );
}
