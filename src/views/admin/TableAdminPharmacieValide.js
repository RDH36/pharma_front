import React, { Component, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  PHARMACIE_CONFIRME,
  PHARMACIE_BLOCK,
} from "views/auth/redux/reducer/AdminReducer";
import TableBody from "components/PartiesTable/TableBody.js";
import FirstColumn from "components/PartiesTable/FirstColumn";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

// components
import TableHeader from "components/PartiesTable/TableHeader.js";
import RowPharmacie from "components/PartiesTable/RowPharmacieAdmin";
import { useSelector } from "react-redux";

export default function TableauListePharma() {
  //pour l'affichage
  const dispacth = useDispatch();
  const Confirme = useSelector((state) => state.pharmacieConfirme);
  useEffect(() => {
    axios
      .get("http://localhost:8083/admin/listPharmacieValide")
      .then((response) => {
        dispacth(PHARMACIE_CONFIRME(response.data));
      });
  }, []);
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded max-height-500pix overflow-y-auto">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-blueGray-700">
              Liste pharmacie confirmé
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
              <TableHeader>Mail</TableHeader>
              <TableHeader>Nif</TableHeader>
              <TableHeader>Stat</TableHeader>
            </tr>
          </thead>
          <tbody>
            {Confirme.map((liste) => (
              <tr>
                <FirstColumn>{liste.nomPharmacie}</FirstColumn>
                <TableBody>{liste.adresse}</TableBody>
                <TableBody>{liste.telephonne}</TableBody>
                <TableBody>{liste.nifPharamacie}</TableBody>
                <TableBody>{liste.statitPharmacie}</TableBody>

                <TableBody>
                  <button
                    formMethod="put"
                    onClick={() => {
                      console.log(liste);
                      axios
                        .put(
                          `http://localhost:8083/admin/blockpharma?idPharmacie=${liste.idPharmacie}`
                        )
                        .then((liste) => {
                          dispacth(PHARMACIE_BLOCK(liste));
                          console.log(liste);
                        });
                      
                      emailjs.send(
                        "service_tb3idji",
                        "template_ikzid7g",
                        {
                          subject: "rejection",
                          name: liste.nomPharmacie,
                          message: "Votre pharmacie a été bloqué",
                          email: "lalaintsoaharioela@gmail.com",
                          reply_to: "me",
                        },
                        "KHGasu7x19H73o9X2"
                      );
                      console.log("lasa");
                      toast.success(
                        "envoie du mail de remise en attente à '" +
                          liste.nomPharmacie +
                          "'"
                      );
                    }}
                    className="bg-red-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i class="fas fa-undo"></i>
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
