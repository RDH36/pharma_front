import Chart from "../components/chart/Chart";
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../components/widgetSm/WidgetSm";
import WidgetLg from "../components/widgetLg/WidgetLg";
import { PHARMACIE_PRODUITS } from "../../views/auth/redux/reducer/PharmacieReducer";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardSocialTraffic from "components/Cards/CardSocialTraffic";
import { toast } from 'react-toastify';
import { PHARMACIE_FACTURE } from "../../views/auth/redux/reducer/PharmacieReducer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {
  const dispacth = useDispatch();
  const donnePharma = useSelector((state) => state.pharmacieConnection);
  useEffect(() => {
    localStorage.clear();
    axios.get(`http://localhost:8083/pharmacie/listStock?ID=${donnePharma.idPharmacie}`)
      .then((response) => {
        dispacth(PHARMACIE_PRODUITS(response.data));
      });
  }, []);

  useEffect(() => {
    axios
    .get(`http://localhost:8083/facture/listAttente?idPharmacie=${donnePharma.idPharmacie}`)
    .then((response) => {
      console.log(response.data)
      dispacth(PHARMACIE_FACTURE(response.data))
    });
  }, [])

  return (
    <>
    <FeaturedInfo />
    <div className="featured" style={{marginTop: '20px'}}>
        <CardSocialTraffic/>
        <WidgetLg/>
    </div>
    </>
  );
}
