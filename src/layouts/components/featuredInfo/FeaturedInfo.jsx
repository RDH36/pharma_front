import "./featuredInfo.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function FeaturedInfo() {
  const produitPharma = useSelector(state => state.pharmacieProduit)
  const FacturePharmacie = useSelector((state)=>state.pharmacieFacture);
  console.log(produitPharma)
  return (
    <div className="featured">
      <Link to={"/mapharmacie/stock"} className="featuredItem">
        <div>
          <span className="featuredTitle">Produit</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{produitPharma.length} Stocké</span>
          </div>
          <span className="featuredSub">Total produit stocké</span>
        </div>
      </Link>
      <Link to={"/mapharmacie/commande"} className="featuredItem">
        <div>
          <span className="featuredTitle">Commandes</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{FacturePharmacie.length} En attente</span>
          </div>
          <span className="featuredSub">Liste des commande en attente</span>
        </div>
      </Link>
    </div>
  );
}
