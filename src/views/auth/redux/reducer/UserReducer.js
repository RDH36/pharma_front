import { configureStore, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "authentification",
  initialState: {
    adresse: null,
    email: null,
    facture: [],
    idUtilisateur: 0,
    motDepasse: null,
    nom: null,
    ormid: 0,
    prenom: null,
    statutCompte: null,
    telephonne: null,
  },
  reducers: {
    USER_CONNECTION: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const recherchePharmacieSlice = createSlice({
  name: "pharmacie",
  initialState: [],
  reducers: {
    RECHERCHE_PHARMACIE: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const dernierProduitAjouteSlice = createSlice({
  name: "dernierProduitAjoute",
  initialState: [],
  reducers: {
    DERNIER_PRODUIT_AJOUTE: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { USER_CONNECTION } = userSlice.actions;
export const { RECHERCHE_PHARMACIE } = recherchePharmacieSlice.actions;
export const { DERNIER_PRODUIT_AJOUTE } = dernierProduitAjouteSlice.actions;
