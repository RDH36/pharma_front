import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AdminNavbar";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import LoginPharmacie from "views/auth/LoginPharmacie";
import LoginAdmin from "views/auth/LoginAdmin";
import Register from "views/auth/Register.js";
import RegisterPharmacie from "views/auth/RegisterPharmacie.js";
import AddProduct from "views/auth/AddProduct.js";

//photos
//fonds

export default function Auth({ photoFond }) {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div className="absolute top-0 w-full h-full bg-white-800 bg-no-repeat bg-full"></div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route
              path="/auth/loginpharmacie"
              exact
              component={LoginPharmacie}
            />
            <Route
              path="/auth/loginadministrateur"
              exact
              component={LoginAdmin}
            />
            <Route path="/auth/register" exact component={Register} />
            <Route path="/auth/addproduct" exact component={AddProduct} />
            <Route
              path="/auth/registerpharmacie"
              exact
              component={RegisterPharmacie}
            />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
