import React, { useEffect} from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import PharmacieNavbar from "components/Navbars/PharmacieNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/pharmacie/PharmacieDashboard.js";
import PharmacieListeCommande from "views/pharmacie/PharmacieListeCommande.js";
import PharmacieHistorique from "views/pharmacie/PharmacieHistorique.js";
import Sidebar from "components/Sidebar/Sidebar";
import TableauProdPharma from "../components/tableau/TableauProdPharma";
import Topbar from "./components/topbar/Topbar";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";
import axios from "axios";
import CardPanier from "components/Cards/CardPanier";
import ListCommande from "components/tableau/ListCommande";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
export default function PharmacieEntity() {
  const donnePharma = useSelector((state) => state.pharmacieConnection);
  useEffect(() => {
    if (donnePharma.idPharmacie > 0) {
      toast.success("Vous etês connecté")
    }
  }, [])
  return (
    <div className="relative md:ml-64 bg-blueGray-100">
      <Sidebar />
      <Topbar />
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <Switch>
          <Route path="/mapharmacie/dashboard" exact component={Dashboard} />
          <Route
            path="/mapharmacie/stock"
            exact
            component={TableauProdPharma}
          />
          <Route
            path="/mapharmacie/historique"
            exact
            component={PharmacieHistorique}
          />
          <Route
            path="/mapharmacie/stock/product/:productId"
            exact
            component={Product}
          />
          <Route 
            path="/mapharmacie/commande" 
            exact  
            component={ListCommande}/>
          <Redirect from="/mapharmacie" to="/mapharmacie/dashboard" />
        </Switch>
      </div>
    </div>
  );
}
