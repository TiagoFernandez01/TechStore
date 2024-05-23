import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
        
    }
})

export default productSlice.reducer;

