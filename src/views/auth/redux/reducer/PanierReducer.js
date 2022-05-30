import { createSlice} from "@reduxjs/toolkit";

export const panierSlice = createSlice({
    name:"panier",
    initialState:
        [
        ],
    reducers:{
        ADD_PRODUITS:(state, action) => {
            const newProduit = {
                id : Date.now(),
                produit : action.payload,
                qte: 1
            }
            state.push(newProduit)
        },
        PLUS_QTE: (state, action) => {
            const produit = state.find(t => t.id === action.payload)
            produit.qte++
            return state
        },
        MOINS_QTE: (state, action) => {
            const produit = state.find(t => t.id === action.payload)
            produit.qte--
            return state
        },
        REMOVE_PRODUIT: (state, action) => {
            state = state.filter(t => t.id !== action.payload)
            return state
        }, 
        VIDER_PANIER: (state, action) => {
            state = []
            return state
        }
    }
})


export const {ADD_PRODUITS, PLUS_QTE, MOINS_QTE, REMOVE_PRODUIT, VIDER_PANIER} = panierSlice.actions