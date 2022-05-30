import React, { Component, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  NBR_PHARMA_ATTENTE,
  NBR_PHARMA_ACTIF,
  NBR_UTILISATEUR,
} from "views/auth/redux/reducer/AdminReducer";
import { useSelector } from "react-redux";
import TableBody from "components/PartiesTable/TableBody.js";

// components

import CardStats from "components/Cards/CardStatsAdmin";

export default function HeaderStats() {
  //pour l'affichage
  const dispacth = useDispatch();
  const Confirme = useSelector((state) => state.nombrePharmaConfirme);
  useEffect(() => {
    axios.get("http://localhost:8083/admin/countvalide").then((response) => {
      dispacth(NBR_PHARMA_ACTIF(response.data));
    });
  }, []);
  const Attente = useSelector((state) => state.nombrePharmaAttente);
  useEffect(() => {
    axios.get("http://localhost:8083/admin/countnonvalide").then((response) => {
      dispacth(NBR_PHARMA_ATTENTE(response.data));
    });
  }, []);
  const Utilisateur = useSelector((state) => state.nombreUtilisateur);
  useEffect(() => {
    axios.get("http://localhost:8083/admin/countuser").then((response) => {
      dispacth(NBR_UTILISATEUR(response.data));
    });
  }, []);
  return (
    <div className="relative color-pharmacie-fonce md:pt-32 pb-32 pt-12">
      <div className="px-4 md:px-10 mx-auto w-full">
        <div>
          {/* Card stats */}
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
              <CardStats
                statSubtitle="Pharmacie confirmée"
                statTitle={Confirme}
                statArrow=""
                statPercent=""
                statPercentColor="text-emerald-500"
                statDescripiron="Le nombre de pharmacie confirmé"
                statIconName="fas fa-book-medical mr-2 text-sm"
                statIconColor="bg-green-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
              <CardStats
                statSubtitle="Pharmacie en attente"
                statTitle={Attente}
                statArrow=""
                statPercent=""
                statPercentColor="text-red-500"
                statDescripiron="Le nombre de pharmacie confirmé"
                statIconName="fas fa-bell"
                statIconColor="bg-red-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
              <CardStats
                statSubtitle="Nombre utilisateurs"
                statTitle={Utilisateur}
                statArrow=""
                statPercent=""
                statPercentColor="text-orange-500"
                statDescripiron="Le nombre d'utilisateur"
                statIconName="fas fa-user"
                statIconColor="bg-pink-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
