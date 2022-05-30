import { createSlice} from "@reduxjs/toolkit";

export const panierCountSlice = createSlice({
    name:"panierCount",
    initialState:{
        count : 0,
        totalValue : 0,
        etatPrix : true,
    },
    reducers:{
        ADD:(state, action) => {
            state.count++
            return state
        },
        REMOVE : (state, action) => {
            state.count--
            return state
        }, 
        CLEAR: (state, action) => {
            state.count = 0
            state.totalValue = 0
            return state
        },
        TOTAL : (state, action) => {
            state.totalValue = action.payload
            return state
        },
        ETATPRIX: (state, action) => {
            state.etatPrix = false
            return state
        }
    }
})

export const {ADD, REMOVE, CLEAR, TOTAL, ETATPRIX} = panierCountSlice.actions