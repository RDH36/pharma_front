import { createSlice } from "@reduxjs/toolkit";

export const pharmacieSlice = createSlice({
  name: "pharmacie",
  initialState: {
    idPharmacie: 0,
    nomPharmacie: null,
    nifPharamacie: null,
    statitPharmacie: null,
    etatValidationCompte: null,
    adresse: null,
    telephonne: null,
    email: null,
    motDePasse: null,
    tourDeGarde: [],
    ormid: 0,
  },
  reducers: {
    PHARMACIE_CONNECTION: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const pharmacieProduitSlice = createSlice({
  name: "pharmacie",
  initialState: [],
  reducers: {
    PHARMACIE_PRODUITS: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const pharmacieFactureSlice = createSlice({
  name: "facturePharmacie",
  initialState: [
    {
      idFacture: 1,
      utilisateur: {
        idUtilisateur: 2,
        statutCompte: null,
        nom: null,
        prenom: null,
        adresse: null,
        telephonne: null,
        email: null,
        motDepasse: null,
        ormid: null,
      },
      dateCommande: null,
      quantiteProduit: null,
      etatPaiement: null,
      montantFacture: null,
      validationCommande: null,
      stock: {
        idStock: null,
        produit: {
          idProduit: null,
          nomCommercial: null,
          dci: null,
          presentation: null,
          conditionnement: null,
          classePharmaceutique: null,
          stock: [
            {
              idStock: null,
              produit: null,
              pharmacie: {
                idPharmacie: null,
                nomPharmacie: null,
                nifPharamacie: null,
                statitPharmacie: null,
                etatValidationCompte: null,
                adresse: null,
                telephonne: null,
                email: null,
                motDePasse: null,
                ormid: null,
              },
              quantiteDisponible: null,
              prixDeVente: 0.0,
              ormid: null,
            },
          ],
          ormid: null,
        },
        pharmacie: {
          idPharmacie: null,
          nomPharmacie: null,
          nifPharamacie: null,
          statitPharmacie: null,
          etatValidationCompte: null,
          adresse: null,
          telephonne: null,
          email: null,
          motDePasse: null,
          ormid: null,
        },
        quantiteDisponible: null,
        prixDeVente: 0.0,
        ormid: null,
      },
      ormid: null,
    },
  ],
  reducers: {
    PHARMACIE_FACTURE: (state, action) => {
      state = action.payload;
      return state;
    },PHARMA_RESET: (state, action) => {
      state = state.filter(t => t.idFacture !== action.payload)
      return state
    },
  },
});


export const pharmacieListSlice = createSlice({
    name:"pharmacielist",
    initialState:[],
    reducers:{
        LISTE_PHARMA:(state, action) => {
            state = action.payload
            return state
        }
    }
})

export const {LISTE_PHARMA} = pharmacieListSlice.actions
export const { PHARMACIE_PRODUITS } = pharmacieProduitSlice.actions;
export const { PHARMACIE_CONNECTION } = pharmacieSlice.actions;
export const { PHARMACIE_FACTURE, PHARMA_RESET } = pharmacieFactureSlice.actions;

export const pharmacieFactureEnAttenteSlice = createSlice({
  name: "facturePharmacie",
  initialState: [
    {
      idFacture: 1,
      utilisateur: {
        idUtilisateur: 2,
        statutCompte: null,
        nom: null,
        prenom: null,
        adresse: null,
        telephonne: null,
        email: null,
        motDepasse: null,
        ormid: null,
      },
      dateCommande: null,
      quantiteProduit: null,
      etatPaiement: null,
      montantFacture: null,
      validationCommande: null,
      stock: {
        idStock: null,
        produit: {
          idProduit: null,
          nomCommercial: null,
          dci: null,
          presentation: null,
          conditionnement: null,
          classePharmaceutique: null,
          stock: [
            {
              idStock: null,
              produit: null,
              pharmacie: {
                idPharmacie: null,
                nomPharmacie: null,
                nifPharamacie: null,
                statitPharmacie: null,
                etatValidationCompte: null,
                adresse: null,
                telephonne: null,
                email: null,
                motDePasse: null,
                ormid: null,
              },
              quantiteDisponible: null,
              prixDeVente: 0.0,
              ormid: null,
            },
          ],
          ormid: null,
        },
        pharmacie: {
          idPharmacie: null,
          nomPharmacie: null,
          nifPharamacie: null,
          statitPharmacie: null,
          etatValidationCompte: null,
          adresse: null,
          telephonne: null,
          email: null,
          motDePasse: null,
          ormid: null,
        },
        quantiteDisponible: null,
        prixDeVente: 0.0,
        ormid: null,
      },
      ormid: null,
    },
  ],
  reducers: {
    PHARMACIE_FACTURE_ENATTENTE: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { PHARMACIE_FACTURE_ENATTENTE } = pharmacieFactureSlice.actions;