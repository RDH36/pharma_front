import { createSlice} from "@reduxjs/toolkit";

export const validationSlice = createSlice({
    name:"produit",
    initialState:{
        validation : false
    },
    reducers:{
        SEND_MAIL:(state, action) => {
            state.validation = true
            return state
        }
    }
})

export const {SEND_MAIL} = validationSlice.actions