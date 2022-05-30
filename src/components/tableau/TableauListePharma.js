import React, { Component } from "react";

// components
import TableHeader from "components/PartiesTable/TableHeader.js";
import RowPharmacie from "components/PartiesTable/RowPharmacie.js";
import { useSelector } from "react-redux";

export default function TableauListePharma() {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded max-height-500pix overflow-y-auto">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-blueGray-700">
              Liste pharmacie
            </h3>
          </div>
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            <button
              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              See all
            </button>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        {/* Projects table */}
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <TableHeader>Nom pharmacie</TableHeader>
              <TableHeader>Adresse</TableHeader>
              <TableHeader>Telephone</TableHeader>
              <TableHeader>Mail</TableHeader>
              <TableHeader>Nif</TableHeader>
              <TableHeader>Stat</TableHeader>
            </tr>
          </thead>
          <tbody>
            <RowPharmacie
              nom="nomPharmacie"
              adresse="adresse"
              telephone="telephone"
              nif="nif"
              stat="stat"
            >
              idPharmacie
            </RowPharmacie>
          </tbody>
        </table>
      </div>
    </div>
  );
}
