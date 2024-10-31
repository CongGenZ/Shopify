import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name:"theme",
    initialState:{
        isLightMode:true
        ,
    },
    reducers:{
        toggletheme:(state)=>{
            state.isLightMode = !state.isLightMode
        }
    }
});
export const {toggletheme} = themeSlice.actions

export default themeSlice.reducer;