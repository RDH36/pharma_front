import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Client from "layouts/Client.js";
import PharmacieEntity from "layouts/PharmacieEntity.js";
import Pharmacie from "layouts/Pharmacie";
import CardPanier from "components/Cards/CardPanier";

// views without layouts

import Profile from "views/Profile";

import { Provider } from "react-redux";
import { store } from "./views/auth/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import TableauListeProduitPharma from "components/tableau/TableauListeProduitPharma";
import Garde from "components/tableau/TableauListeGarde";
import Landing from "views/Landing";
import { CardChoixpayment } from "components/Cards/CardChoixPayment";
import Login from "views/auth/Login";
let persistor = persistStore(store);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            {/* add routes with layouts */}
            <Route path="/admin" component={Admin} />
            <Route path="/auth" component={Auth} />
            <Route path="/client" component={Client} />
            <Route path="/mapharmacie" component={PharmacieEntity} />
            <Route path="/acceuil" component={Landing} />
            <Route path="/user/panier" component={CardPanier} />
            <Route
              path="/produit"
              exact
              component={TableauListeProduitPharma}
            />
            <Route path="/garde" exact component={Garde} />

            {/* add routes without layouts */}
            <Route path="/profile" exact component={Profile} />
            {/* add redirect for first page */}
            <Redirect from="*" to="/acceuil" />
          </Switch>
        </BrowserRouter>
        <ToastContainer />
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
