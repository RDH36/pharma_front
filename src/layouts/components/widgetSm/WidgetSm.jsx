import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import {  useSelector } from "react-redux";
import {  useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { DERNIER_PRODUIT_AJOUTE } from "views/auth/redux/reducer/UserReducer";

export default function WidgetSm() {
  const dispatch = useDispatch();
  const donnePharma = useSelector((state) => state.pharmacieConnection);
    const DernierProduit= useSelector(state=>state.dernierProduitAjoute);
  useEffect(() => {
    axios
    .get(`http://localhost:8083/produits/dernierproduit?idPharmacie=${donnePharma.idPharmacie}`)
    .then((response) => {
    dispatch(DERNIER_PRODUIT_AJOUTE(response.data));
    });

  }, [])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Dernier produit ajouté</span>
      <ul className="widgetSmList">
        {DernierProduit.map((liste) => (
        
          <li className="widgetSmListItem">
            <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLgImg"
              />
            <div className="widgetSmUser">
              <span className="widgetSmUsername"> 
                {(liste.nomCommercial)} ({liste.dci})
              </span>
              <span className="widgetSmUserTitle">
                <p> {(liste.presentation)} | {(liste.conditionnement)}  </p>
              </span>
              <p> {(liste.classePharmaceutique)} </p>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Afficher
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
