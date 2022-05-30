import React from "react";
import { Link } from "react-router-dom";
import '../../layouts/components/featuredInfo/featuredInfo.css'

export function CardChoixpayment() { 
    return(
    <div className="featured">
      <Link to={"/mapharmacie/stock"} className="featuredItem">
        <div>
          <span className="featuredTitle">Visa Et Paypal</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney"> </span>
          </div>
          <span className="featuredSub">Payer en ligne</span>
        </div>
      </Link>
      <Link to={""} className="featuredItem">
        <div>
          <span className="featuredTitle">Bon de Commandes</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney"></span>
          </div>
          <span className="featuredSub">Commander pour aller plus vite sur place</span>
        </div>
      </Link>
    </div>
    )
 }