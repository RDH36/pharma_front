import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { PHARMACIE_CONNECTION } from "./redux/reducer/PharmacieReducer";
import {toast} from 'react-toastify'

export default function Login() {
  const dispacth = useDispatch();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const donnee = useSelector((state) => state.pharmacieConnection);

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8083/authpharma/connectionpharmacie", data)
      .then((response) => {
        if (response.data.idPharmacie > 0) {
          dispacth(PHARMACIE_CONNECTION(response.data));
          history.push("/mapharmacie/dashboard");
        } else{
          toast.error("mots de passe ou email invalide")
        }
      }).catch(error => toast.error("identifiant invalide"))
  };

  return (
    <div className="container mx-auto px-4 w-full">
      <div className="flex content-center items-center justify-center w-full">
        <div className="w-full lg:w-12/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-blueGray-400 text-center mb-3 font-bold">
                <big>Se Connecter</big>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    required
                    {...register("email")}
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
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Mot de passe"
                    required
                    {...register("motDePasse")}
                  />
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      Se souvenir de moi
                    </span>
                  </label>
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Se connecter
                  </button>
                  
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
