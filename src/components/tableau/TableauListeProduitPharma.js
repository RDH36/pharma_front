import React, { Component, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ALL_PRODUIT } from "../../views/auth/redux/reducer/AllProduit";
import { useSelector } from "react-redux";
import "./style/amazon.css";
import TopbarPanier from "layouts/components/topbar/TopbarPanier";
import { ADD_PRODUITS } from "views/auth/redux/reducer/PanierReducer";
import { ADD } from "views/auth/redux/reducer/CountPanier";
import BadgeIcon from "@mui/icons-material/Badge";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { toast } from "react-toastify";

export default function TableauListeProduitPharma() {
  //pour l'affichage
  const dispacth = useDispatch();
  const allProduit = useSelector((state) => state.produitAll);
  const panier = useSelector((state) => state.panier);
  const countPanier = useSelector((state) => state.panierCount);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    axios.get("http://localhost:8083/produits/list").then((response) => {
      console.log(response.data);
      dispacth(ALL_PRODUIT(response.data));
    });
  }, []);

  const oneProduit = (id) => {
    axios
      .get(`http://localhost:8083/produits/produit?id=${id}`)
      .then((response) => {
        dispacth(ADD_PRODUITS(response.data));
      });
    dispacth(ADD());
    toast.success("Produit ajouté");
  };

  const onSubmit = (data) => {
    console.log(data);
    axios
      .get(
        `http://localhost:8083/search/rechercheProduit?recherche=${data.recherche}`
      )
      .then((response) => {
        console.log(response.data);
        dispacth(ALL_PRODUIT(response.data));
      });
  };
  let url2 = "https://www.google.com/maps/dir/";
  return (
    <div>
      <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="section">
              <h3
                className="font-semibold text-base text-blueGray-700"
                style={{ marginLeft: "15%" }}
              >
                Liste produits
                <form onChange={handleSubmit(onSubmit)}>
                  <input
                    className="pharma"
                    type="text"
                    id="recherche"
                    placeholder="recherche"
                    {...register("recherche")}
                  ></input>
                </form>
              </h3>
            </div>
          </div>
        </div>
        <section>
          {allProduit.map((produit) => (
            <div className="cards" style={{ width: "20%" }}>
            <div className="image_box">
            <img src={produit.lienImage} alt="" />
          </div>
              <div className="details" style={{ width: "90%" }}>
                <p style={{ fontSize: "14px", marginLeft: "20%" }}>
                  {" "}
                  <BadgeIcon /> {produit.nomCommercial} {produit.presentation}(
                  {produit.dci}){" "}
                </p>
                <p style={{ fontSize: "14px", marginLeft: "20%" }}>
                  {produit.dci} / {produit.classePharmaceutique}{" "}
                </p>
                <p style={{ fontSize: "14px", marginLeft: "20%" }}>
                  <AttachMoneyIcon /> {produit.stock[0].prixDeVente} Ariary
                </p>
                <p style={{ fontSize: "14px", marginLeft: "20%" }}>
                  <AddLocationIcon />
                  <a
                    href={
                      url2 +
                      "-18.848617201356337, 47.48024674359338/" +
                      produit.stock[0].pharmacie.nomPharmacie
                    }
                    target="_blank"
                  >
                    {" "}
                    {produit.stock[0].pharmacie.nomPharmacie}
                  </a>{" "}
                  {produit.stock[0].pharmacie.adresse}{" "}
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    style={{ marginTop: "10px" }}
                    onClick={() => oneProduit(produit.idProduit)}
                    type="button"
                  >
                    <i class="fas fa-cart-arrow-down"></i> Ajout aux Panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
