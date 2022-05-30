import React, { Component, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  PHARMACIE_ATTENTE,
  PHARMACIE_VALIDATION,
} from "views/auth/redux/reducer/AdminReducer";
import Location from "components/geolocalisation/Location";
import emailjs from "emailjs-com";

import TableBody from "components/PartiesTable/TableBody.js";

import { toast } from "react-toastify";

// components
import TableHeader from "components/PartiesTable/TableHeader.js";
import RowPharmacie from "components/PartiesTable/RowPharmacieAdmin";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function TableauListePharma() {
  //pour l'affichage
  const dispacth = useDispatch();
  const enAttente = useSelector((state) => state.pharmacieEnAttente);
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    axios
      .get("http://localhost:8083/admin/listpharmacieenattente")
      .then((response) => {
        dispacth(PHARMACIE_ATTENTE(response.data));
      });
  }, []);
  const validPharmacie = (data) => {
    console.log("hita");
    axios
      .post(`http://localhost:8083/admin/validationPharmacie`)
      .then((response) => {
        dispacth(PHARMACIE_VALIDATION(response.data));
        console.log(data);
      });
  };
  console.log(enAttente);
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded max-height-500pix overflow-y-auto">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-blueGray-700">
              Liste pharmacie En attente
            </h3>
          </div>
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            {" "}
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
            {enAttente.map((liste) => (
              <tr>
                <RowPharmacie
                  nom={liste.nomPharmacie}
                  adresse={liste.adresse}
                  telephone={liste.telephonne}
                  nif={liste.nifPharamacie}
                  stat={liste.statitPharmacie}
                >
                  {liste.idPharmacie}
                </RowPharmacie>
                <TableBody>
                  <button
                    formMethod="put"
                    onClick={() => {
                      console.log(liste);
                      axios
                        .put(
                          `http://localhost:8083/admin/updatepharma?idPharmacie=${liste.idPharmacie}`
                        )
                        .then((liste) => {
                          dispacth(PHARMACIE_VALIDATION(liste));
                          console.log(liste);
                        });
                      toast.success(
                        'la pharmacie "' +
                          liste.nomPharmacie +
                          '" a été accepté'
                      );
                      
                      emailjs.send(
                        "service_tb3idji",
                        "template_ikzid7g",
                        {
                          subject: "confirmation inscription compte",
                          name: liste.nomPharmacie,
                          message:
                            "L'inscription de votre pharmacie à été accepté",
                          email: "lalaintsoaharioela@gmail.com",
                          reply_to: "me",
                        },
                        "KHGasu7x19H73o9X2"
                      );
                      console.log("lasa");

                      toast.success("");
                    }}
                    className="bg-emerald-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i class="fas fa-check"></i>
                  </button>
                </TableBody>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
