import { createSlice } from "@reduxjs/toolkit";

export const pharmacieConfirmeSlice = createSlice({
  name: "pharmacie",
  initialState: [],
  reducers: {
    PHARMACIE_CONFIRME: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const pharmacieDeGardeSlice = createSlice({
  name: "pharmacie",
  initialState: [],
  reducers: {
    PHARMACIE_GARDE: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const pharmacieValidationSlice = createSlice({
  name: "pharmacie",
  initialState: [],
  reducers: {
    PHARMACIE_VALIDATION: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const pharmacieBlockSlice = createSlice({
  name: "pharmacie",
  initialState: [],
  reducers: {
    PHARMACIE_BLOCK: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const pharmacieEnAttenteSlice = createSlice({
  name: "pharmacie",
  initialState: [],
  reducers: {
    PHARMACIE_ATTENTE: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const clientListeSlice = createSlice({
  name: "client",
  initialState: [],
  reducers: {
    CLIENT_LISTE: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const produitSlice = createSlice({
  name: "pharmacie",
  initialState: {},
  reducers: {
    GET_PRODUIT: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const nombrePharmaConfirmeSlice = createSlice({
  name: "pharmacie",
  initialState: 0,
  reducers: {
    NBR_PHARMA_ACTIF: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const nombrePharmaAttenteSlice = createSlice({
  name: "pharmacie",
  initialState: 0,
  reducers: {
    NBR_PHARMA_ATTENTE: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const nombreutilisateurSlice = createSlice({
  name: "utilisateur",
  initialState: 0,
  reducers: {
    NBR_UTILISATEUR: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { GET_PRODUIT } = produitSlice.actions;
export const { NBR_UTILISATEUR } = nombreutilisateurSlice.actions;
export const { PHARMACIE_CONFIRME } = pharmacieConfirmeSlice.actions;
export const { CLIENT_LISTE } = clientListeSlice.actions;
export const { PHARMACIE_ATTENTE } = pharmacieEnAttenteSlice.actions;
export const { PHARMACIE_VALIDATION } = pharmacieValidationSlice.actions;
export const { PHARMACIE_BLOCK } = pharmacieBlockSlice.actions;
export const { NBR_PHARMA_ACTIF } = nombrePharmaConfirmeSlice.actions;
export const { NBR_PHARMA_ATTENTE } = nombrePharmaAttenteSlice.actions;
export const { PHARMACIE_GARDE } = pharmacieDeGardeSlice.actions;
