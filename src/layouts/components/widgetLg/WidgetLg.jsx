import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DERNIER_PRODUIT_AJOUTE } from "views/auth/redux/reducer/UserReducer";
import "./widgetLg.css";

export default function WidgetLg() {
  const donnePharma = useSelector((state) => state.pharmacieConnection);
  const dispatch = useDispatch();
  const DernierProduit= useSelector(state=>state.dernierProduitAjoute);
  useEffect(() => {
    axios
    .get(`http://localhost:8083/produits/dernierproduit?idPharmacie=${donnePharma.idPharmacie}`)
    .then((response) => {
      console.log(response.data)
    dispatch(DERNIER_PRODUIT_AJOUTE(response.data));
    });

  }, [])

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (

      <div className="widgetSm">
      <span className="widgetSmTitle">Dernier produit ajouté</span>
      <ul className="widgetSmList">
        {DernierProduit.map((liste) => (
        
          <li className="widgetSmListItem">
            <div className="widgetSmUser">
              <span className="widgetSmUsername"> 
                {(liste.nomCommercial)} ({liste.dci})
              </span>
              <span className="widgetSmUserTitle">
                <p> {(liste.presentation)} | {(liste.conditionnement)}  </p>
              </span>
              <p> {(liste.classePharmaceutique)}  </p>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
