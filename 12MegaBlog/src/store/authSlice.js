import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  status: false,
  userData: null,
};

let authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state,action)=>{

        state.status=true;
        state.userData=action.payload.userData;
    },
    logout: (state,action)=>{
        state.status=true;
        state.userData=null;
    }
  },
});

export const{login,logout}=authSlice.actions; 
export default authSlice.reducer;
