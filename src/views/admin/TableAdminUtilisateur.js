import React, { Component, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { CLIENT_LISTE } from "views/auth/redux/reducer/AdminReducer";

// components
import TableHeader from "components/PartiesTable/TableHeader.js";
import RowUser from "components/PartiesTable/RowUser";
import { useSelector } from "react-redux";

export default function TableauListePharma() {
  //pour l'affichage
  const dispacth = useDispatch();
  const utilisateur = useSelector((state) => state.utilisateur);
  useEffect(() => {
    axios
      .get("http://localhost:8083/utilisateur/listeInscrit")
      .then((response) => {
        dispacth(CLIENT_LISTE(response.data));
      });
  }, []);
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded max-height-500pix overflow-y-auto">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-blueGray-700">
              Liste utilisateur
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
              <TableHeader>Nom</TableHeader>
              <TableHeader>Prenom</TableHeader>
              <TableHeader>Adresse</TableHeader>
              <TableHeader>Telephone</TableHeader>
              <TableHeader>Mail</TableHeader>
            </tr>
          </thead>
          <tbody>
            {utilisateur.map((liste) => (
              <RowUser
                nom={liste.nom}
                prenom={liste.prenom}
                adresse={liste.adresse}
                telephone={liste.telephonne}
                mail={liste.email}
              >
                idUtilisateur
              </RowUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
