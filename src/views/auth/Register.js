import React from "react";
import { Link } from "react-router-dom";
import Navbar from "components/Navbars/AuthNavbar.js";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { USER_CONNECTION } from "./redux/reducer/UserReducer";
import FooterAdmin from "components/Footers/FooterAdmin";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

//-->

export default function Register() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory()
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8083/auth/inscription", data)
      .then((response) => {
        if (response.data.idUtilisateur > 0) {
          dispatch(USER_CONNECTION(response.data));
          console.log(response.data);
          toast.success("Vous etes inscrit");
          history.push("/user/panier")
        } else {
          toast.error("Erreur sur le formulaire");
        }
      });
  };
  const donne = useSelector((state) => state.connection);
  console.log(donne.nom);
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800">
                    Inscription Utilisateur
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form method="post" onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nom et Prénom
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-4 md:w-8/12 border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Nom"
                      name="nom"
                      required
                      {...register("nom")}
                    />
                    <input
                      type="text"
                      className="w-1/2 px-4 md:w-4/12 md:w-4/12 border-1 px-5 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Prénom"
                      name="prenom"
                      required
                      {...register("prenom")}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Adresse
                    </label>
                    <input
                      type="text"
                      className="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Adresse"
                      name="adresse"
                      required
                      {...register("adresse")}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Telephone
                    </label>
                    <input
                      type="text"
                      className="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Telephone"
                      name="telephone"
                      required
                      {...register("telephonne")}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      name="email"
                      required
                      {...register("email")}
                    />
                  </div>

                  <div className="relative w-full mb-3 justifybetween">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                      name="motDePasse"
                    >
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      className="w-1/2 px-4 md:w-6/12 border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Mot de passe"
                      minLength={8}
                      required
                      {...register("motDepasse")}
                    />
                    <input
                      type="password"
                      className="w-1/2 px-4 md:w-6/12 md:w-4/12 border-1 px-5 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Confirmer Mot de passe"
                      minLength={8}
                      required
                      {...register("verificationMotDePasse")}
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        J'accepte les{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Conditions d'utilisations
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Créer un compte
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
