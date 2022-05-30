import { createSlice} from "@reduxjs/toolkit";

export const produitAllSlice = createSlice({
    name:"produit",
    initialState:[],
    reducers:{
        ALL_PRODUIT:(state, action) => {
            state = action.payload
            return state
        }
    }
})

export const {ALL_PRODUIT} = produitAllSlice.actions