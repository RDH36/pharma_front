import React, { Component } from "react";

// components
const CardPageVisitsGenerique = (props) => {
  return (
    <>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
        {props.children}
      </th>
    </>
  );
};
export default CardPageVisitsGenerique;
