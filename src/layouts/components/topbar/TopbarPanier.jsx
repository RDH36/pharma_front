import React from "react";
import "./topbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TopbarPanier() {
  const countPanier = useSelector(state => state.panierCount)
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          PHARMACHECK
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <span className="topIconBadge">{countPanier.count}</span>
          </div>
          <Link to={"/user/panier"}>
            <button type="">
              <i class="fas fa-cart-arrow-down" style={{marginRight: '10px'}}></i> Panier
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
