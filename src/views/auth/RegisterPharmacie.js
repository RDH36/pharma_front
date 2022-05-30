import axios from "axios";
import { Form } from "components/useForm";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { PHARMACIE_CONNECTION } from "./redux/reducer/PharmacieReducer";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function RegisterPharmacie() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory()

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8083/authpharma/inscriptionpharma", data)
      .then((response) => {
        if (response.data.idPharmacie > 0) {
          dispatch(PHARMACIE_CONNECTION(response.data));
          toast.success("Vous etes inscrit");
          history.push("/mapharmacie/dashboard")
        } else {
          toast.error("Erreur sur le formulaire");
        }
      });
  };
  const donne = useSelector((state) => state.pharmacieConnection);
  console.log(donne.nomPharmacie);
  return (
    <>
      <div className="container mx-auto  h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full  ">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-10 font-bold">
                  <big>S'inscrire</big>
                </div>
                <form method="post" onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nom pharmacie
                    </label>
                    <input
                      type="text"
                      className="border-1 border-blueGray-500  px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Nom du pharmacie"
                      {...register("nomPharmacie")}
                      required
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
                      className="border-1 px-3 border-blueGray-500  py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Adresse"
                      {...register("adresse")}
                      required
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Contacts
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-4 md:w-4/12 border-1 border-blueGray-500  px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Telephone"
                      {...register("telephonne")}
                      required
                    />
                    <input
                      type="email"
                      className="w-1/2 px-4 md:w-8/12 md:w-4/12 border-1 border-blueGray-500  px-5 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Mail"
                      {...register("email")}
                      required
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Identification commercial
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-4 md:w-6/12 border-1 border-blueGray-500  px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="NIF"
                      {...register("nifPharamacie")}
                      required
                    />
                    <input
                      type="text"
                      className="w-1/2 px-4 md:w-6/12 border-1 border-blueGray-500 px-5 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="STAT"
                      {...register("statitPharmacie")}
                      required
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      className="w-1/2 px-4 md:w-6/12 border-1 border-blueGray-500  px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Mot de passe"
                      {...register("motDePasse")}
                      minLength={8}
                      required
                    />
                    <input
                      type="password"
                      className="w-1/2 px-4 md:w-6/12 md:w-4/12 border-1 border-blueGray-500  px-5 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Confirmer Mot de passe"
                      {...register("confirmationMdpPharmacie")}
                      required
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-1 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        J'accepte les{" "}
                        <a
                          href="#pablo"
                          required
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
