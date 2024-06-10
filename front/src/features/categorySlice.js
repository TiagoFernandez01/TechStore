import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const categoriesSlice = createSlice ({
    name: "categories",
    initialState: {
        allCategories: [],
    },
    reducers:{
        setCategories: (state, action) => {
            state.allCategories = action.payload;
        }
    }
});

export const {setCategories} = categoriesSlice.actions;
export default categoriesSlice.reducer;

export const getAllCategories = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3000/categories")
        dispatch(setCategories(response.data))
    } catch (error) {
        console.log(error);
    }
}