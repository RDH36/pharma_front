import React, { Component, useEffect } from "react";
import ProductList from "layouts/pages/productList/ProductList";
import AccordeonAjoutProduits from "components/accordeon/AccordeonAjoutProduits";

export default function TableauProdPharma() {
  return (
    <div style={{ marginTop: "110px" }}>
      <ProductList />
      <AccordeonAjoutProduits />
    </div>
  );
}
