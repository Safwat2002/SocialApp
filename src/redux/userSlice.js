import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name:"user",
    
    initialState:{
        userData:null,
        status:"",
        error:null,
    },

    reducers:{
        logout: (state) => {
            state.userData = null;
            state.status = "";
            state.error = null;
            state.userImg = null
        }
    },

    extraReducers:(builder) => {
        builder.addCase(fetchUserData.pending, (state) => {
            state.status = "pending"
        }).addCase(fetchUserData.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.status = "success"
        }).addCase(fetchUserData.rejected, (state, action)=> {
            state.status = "error";
            state.error = action.error.message
        }).addCase(refreshData.fulfilled, (state, action)=>{
            state.userData = action.payload
        })
    }
})

export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async (credintials) => {
        const res = await axios.post("/auth/login", credintials);
        return res.data;
    }

)

export const refreshData = createAsyncThunk(
    'user/refreshData',
    async () => {
        const res = await axios.get("/users/me/info");
        return res.data;
    }

)



export default userSlice.reducer;
export const {logout} = userSlice.actions;