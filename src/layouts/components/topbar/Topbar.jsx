import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Topbar() {
  const donnePharma = useSelector(state => state.pharmacieConnection)
  const FacturePharmacie = useSelector((state)=>state.pharmacieFacture);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Link to={"/mapharmacie/commande"}>
              <NotificationsNone />
              <span className="topIconBadge">{FacturePharmacie.length}</span>
            </Link>
          </div>
          <img src="https://thumbs.dreamstime.com/z/pharmacist-icon-profession-job-vector-illustration-related-193583624.jpg" alt="" className="topAvatar" />
          <span style={{margin:'0px 5px 0px 5px'}}>{donnePharma.nomPharmacie}</span>
        </div>
      </div>
    </div>
  );
}
