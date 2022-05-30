import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { PHARMACIE_GARDE } from "views/auth/redux/reducer/AdminReducer";

import { useSelector } from "react-redux";

// components
import TableHeader from "components/PartiesTable/TableHeader.js";
import FirstColumn from "components/PartiesTable/FirstColumn";
import TableBody from "components/PartiesTable/TableBody";
import RowPharmacie from "components/PartiesTable/RowPharmacieAdmin";

//pour l'affichage
let positionInit;
let latitude;
let longitude;
let url2 = "https://www.google.com/maps/dir/";

navigator.geolocation.getCurrentPosition(function (position) {
  console.log("Latitude is :", position.coords.latitude);
  console.log("Longitude is :", position.coords.longitude);
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  console.log("Latitude garde : ", latitude);
  console.log("longitude garde : ", longitude);
});
export default function TableauListeGarde() {
  const dispacth = useDispatch();
  const garde = useSelector((state) => state.pharmacieDeGarde);
  useEffect(() => {
    axios
      .get("http://localhost:8083/gardePharmacie/listPharmacieDeGarde")
      .then((response) => {
        dispacth(PHARMACIE_GARDE(response.data));
      });
  }, []);

  positionInit = "'" + latitude + "." + longitude + "/";

  console.log(positionInit);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-6 shadow-lg rounded max-height-500pix overflow-y-auto">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Liste pharmacie de Garde
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right"></div>
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
                <TableHeader>Date de début</TableHeader>
                <TableHeader>Date de fin</TableHeader>
              </tr>
            </thead>
            <tbody>
              {garde.map((liste) => (
                <tr>
                  <FirstColumn>
                    <a
                      href={
                        url2 +
                        "-18.848617201356337, 47.48024674359338/" +
                        liste.nomPharmacieGarde
                      }
                      target="_blank"
                      onClick={console.log(positionInit)}
                    >
                      {liste.nomPharmacieGarde}
                    </a>
                  </FirstColumn>
                  <TableBody>{liste.adressePharmacieGarde}</TableBody>
                  <TableBody>{liste.telephonePharmacieGarde}</TableBody>
                  <TableBody>{liste.dateDeDebut} </TableBody>
                  <TableBody>{liste.dateDeFin} </TableBody>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
