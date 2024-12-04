import { createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface initialStateTypes {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState: initialStateTypes = {
  isSidebarCollapsed:false,
  isDarkMode:false,
}




export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers:{
        setIsSIdebarCollapsed: (state,action: PayloadAction<boolean>) =>{
            state.isSidebarCollapsed = action.payload;
        },
        setIsDarkMode : (state,action: PayloadAction<boolean>) =>{
            state.isSidebarCollapsed = action.payload;
    },
},
});

export const {setIsSIdebarCollapsed,setIsDarkMode} = globalSlice.actions;
export default globalSlice.reducer;

