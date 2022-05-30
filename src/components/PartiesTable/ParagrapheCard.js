import React, { Component } from "react";

// components
const CardDernierProduit = (props) => {
  return (
    <>
      <li className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {props.children}
      </li>
    </>
  );
};
export default CardDernierProduit;
