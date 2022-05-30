import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import {
  userSlice,
  recherchePharmacieSlice,
  dernierProduitAjouteSlice,
} from "../reducer/UserReducer";
import { produitAllSlice } from "../reducer/AllProduit";
import { panierCountSlice } from "../reducer/CountPanier";
import {
  pharmacieSlice,
  pharmacieProduitSlice,
  pharmacieFactureSlice,
} from "../reducer/PharmacieReducer";

import {statstockslice} from "../reducer/ProduitReducer";
import { produitSlice, newProduitsSlice } from "../reducer/ProduitReducer";
import {
  pharmacieConfirmeSlice,
  pharmacieEnAttenteSlice,
  clientListeSlice,
  pharmacieValidationSlice,
  pharmacieBlockSlice,
  nombrePharmaAttenteSlice,
  nombrePharmaConfirmeSlice,
  nombreutilisateurSlice,
  pharmacieDeGardeSlice,
} from "../reducer/AdminReducer";

import { panierSlice } from "../reducer/PanierReducer";
import { validationSlice } from "../reducer/validationReducer";
import { pharmacieListSlice } from "../reducer/PharmacieReducer";

const reducers = combineReducers({
  connection: userSlice.reducer,
  pharmacieConnection: pharmacieSlice.reducer,
  pharmacieProduit: pharmacieProduitSlice.reducer,
  listeProduit: produitSlice.reducer,
  panier: panierSlice.reducer,
  panierCount: panierCountSlice.reducer,
  pharmacieConfirme: pharmacieConfirmeSlice.reducer,
  pharmacieBlock: pharmacieBlockSlice.reducer,
  pharmacieValidation: pharmacieValidationSlice.reducer,
  pharmacieEnAttente: pharmacieEnAttenteSlice.reducer,
  utilisateur: clientListeSlice.reducer,

  recherchePharmcie: recherchePharmacieSlice.reducer,
  dernierProduitAjoute: dernierProduitAjouteSlice.reducer,

  nombrePharmaAttente: nombrePharmaAttenteSlice.reducer,
  nombrePharmaConfirme: nombrePharmaConfirmeSlice.reducer,
  nombreUtilisateur: nombreutilisateurSlice.reducer,
  pharmacieValidation: pharmacieValidationSlice.reducer,
  pharmacieEnAttente: pharmacieEnAttenteSlice.reducer,
  utilisateur: clientListeSlice.reducer,
  produitAll: produitAllSlice.reducer,
  pharmacieDeGarde: pharmacieDeGardeSlice.reducer,
  newProduits: newProduitsSlice.reducer,
  validation : validationSlice.reducer,
  listePharma: pharmacieListSlice.reducer,
  pharmacieFacture: pharmacieFactureSlice.reducer,
  statstock:statstockslice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
