import { createSlice } from "@reduxjs/toolkit";

export const produitSlice = createSlice({
  name: "produit",
  initialState: {},
  reducers: {
    GET_PRODUIT: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const newProduitsSlice = createSlice({
  name: "pharmacie",
  initialState: {
    idProduit: 0,
    nomCommercial: null,
    dci: null,
    presentation: null,
    conditionnement: null,
    classePharmaceutique: null,
    stock: [],
    ormid: 0,
  },
  reducers: {
    NEW_PRODUITS: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const statstockslice = createSlice(
  { name: "statstock",
   initialState:[],
   reducers: {
     STAT_STOCK: (state, action) => {
     state = action.payload;
     return state;
     },
   },
  });   
export const { STAT_STOCK } = statstockslice.actions;

export const { GET_PRODUIT } = produitSlice.actions;
export const { NEW_PRODUITS } = newProduitsSlice.actions;
