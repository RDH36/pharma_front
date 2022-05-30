import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STAT_STOCK } from "views/auth/redux/reducer/ProduitReducer";
import '../../layouts/components/widgetSm/widgetSm.css'

// components

export default function CardSocialTraffic() {
  const dispacth = useDispatch();
  const parametre = useSelector(state => state.pharmacieConnection)
  const parametres = useSelector((state) => state.statstock);
  useEffect(() => {
    axios
      .get(`http://localhost:8083/pharmacie/listStock?ID=${parametre.idPharmacie}`)
      .then((response) => {
        dispacth(STAT_STOCK(response.data));
      });
  }, []);
  
  let moyen= (critique)=> 3*critique;
  let pourcentage =(quantité,critique)=>((20*quantité)/critique);
 
  return (
    <>
      <div className="widgetSm" style={{marginLeft: '20px'}}>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                ETATS GLOBAL STOCK
              </h3>
            </div>
            
          </div>
        </div>
        <div className="block max-height-500pix overflow-y-auto">
          {/* Projects table */}
          <table >
            <thead >
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Produits
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">
                <div className="menu flex justify-between">
                <i className="fas fa-circle text-red-500 ml-2">faible</i> 
                <i className="fas fa-circle text-yellow-500 ml-2">Moyen</i> 
                <i className="fas fa-circle text-emerald-500 ml-2">Normal</i> 
                </div>
                </th>
              </tr>
            </thead>
            <tbody>
            {parametres.map(liste=>
            
            <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                {liste.nomCommercial}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  
                 {
                 liste.stock[0].quantiteDisponible>moyen(liste.stock[0].seuilMini)? ( <div className="flex items-center">
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-blueGray-200">
                        <div
                          style={{ width: `${pourcentage(liste.stock[0].quantiteDisponible,liste.stock[0].seuilMini)}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                        ></div>
                      </div>
                    </div>
                  </div>) : 
                  ( (liste.stock[0].quantiteDisponible>liste.stock[0].seuilMini)?
                    ( <div className="flex items-center">
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-blueGray-200">
                        <div
                          style={{ width: `${pourcentage(liste.stock[0].quantiteDisponible,liste.stock[0].seuilMini)}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                        ></div>
                      </div>
                    </div>
                  </div>)
                  :
                  ( <div className="flex items-center">
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-blueGray-200">
                        <div
                          style={{ width: `${pourcentage(liste.stock[0].quantiteDisponible,liste.stock[0].seuilMini)}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>))}
                </td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
