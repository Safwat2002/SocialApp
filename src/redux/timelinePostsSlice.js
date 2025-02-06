import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const timelinePostsSlice = createSlice({
    name:"timelinePosts",

    initialState:{
        posts:null,
        status:"",
        error:""
    },

    reducers:{

    },

    extraReducers: (builder) => {
        builder.addCase(getTimelinePosts.pending, (state)=>{
            state.status = "pending"
        }).addCase(getTimelinePosts.fulfilled, (state, action)=>{
            state.posts = action.payload
            state.status = 'fulfilled'
        }).addCase(getTimelinePosts.rejected, (state, action)=>{
            state.error = action.error.message;
            state.status = "error"
        })

    }
})

export const getTimelinePosts = createAsyncThunk(
    "timelinePosts/getTimelinePosts",
    async () => {
        const res = await axios.get("/posts/timeline/all")
        return res.data;
    }

)

export default timelinePostsSlice.reducer
