import React, { Component, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

// components
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { LISTE_PHARMA } from "views/auth/redux/reducer/PharmacieReducer";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import PageviewIcon from "@mui/icons-material/Pageview";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function TableauListePharmaRecherche() {
  //pour l'affichage
  const dispacth = useDispatch();
  const { register, handleSubmit } = useForm();
  const listePharma = useSelector((state) => state.listePharma);

  useEffect(() => {
    axios
      .get(`http://localhost:8083/admin/listPharmacieValide`)
      .then((response) => {
        console.log(response.data);
        dispacth(LISTE_PHARMA(response.data));
      });
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    axios
      .get(`http://localhost:8083/search/pharmacie?recherche=${data.recherche}`)
      .then((response) => {
        console.log(response.data);
        dispacth(LISTE_PHARMA(response.data));
      });
  };
  let latitude;
  let longitude;
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
                Liste pharmacie confirmé
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
        <section className="section">
          {listePharma.map((liste) => (
            <div
              className="cards"
              style={{ display: "flex", width: "70%", marginLeft: "15%" }}
            >
              <div className="image_box" style={{ width: "30%" }}>
                <img
                  src="https://cdn.mesoigner.fr/uploads/ckeditor/1096/ArtKowel%20-%202015-10-30%20-%200081-2.jpeg"
                  alt=""
                />
              </div>
              <div className="details" style={{ width: "70%" }}>
                <p style={{ fontSize: "18px" }}>
                  {" "}
                  <AddLocationIcon />{" "}
                  <a href={url2 + liste.nomPharmacie}>
                    {liste.nomPharmacie}
                  </a>{" "}
                  {liste.adresse}
                </p>
                <p style={{ fontSize: "14px" }}>
                  {" "}
                  <PhoneAndroidIcon /> {liste.telephonne}
                </p>
                <p style={{ fontSize: "14px" }}>
                  {" "}
                  <EmailIcon /> {liste.email}{" "}
                </p>
                <div
                  className=" hover:shadow-lg bg-emerald-300 item-center"
                  style={{ display: "flex" }}
                >
                  <button style={{marginTop:'10px', width: '90%'}} className="pharma"  type="button">
                      <PageviewIcon/> <a href={url2 +"-18.848617201356337, 47.48024674359338/" +liste.nomPharmacie}
                      target="_blank"
                      onClick={console.log("ito eeee")}
                    >
                      {liste.nomPharmacieGarde}Itinéraire
                    </a>
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
