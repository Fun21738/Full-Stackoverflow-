import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    Comments: [ ]
};

const url="http://localhost:4000/Comments/comment"

export const createNewComments = createAsyncThunk('postComments/createNewPost',
    async (data,thunkAPI) => {   
      console.log(data);     
        try {
          const Token = localStorage.getItem("Clients");
        
          const response = await axios
          .post (url,data, {
            headers: {
              Authorization:`Bearer ${Token}`,
            },
          })
          .then((data)=>data.json());
            console.log(data)
            console.log(response);
              return {}
        } catch (error) {
            thunkAPI.rejectWithValue({
              console:error.message,
            })
        }
    }
);



export const fetchComments = createAsyncThunk('postComments/fetchComments', 
    async (Opinionsid,thunkAPI)=>{
        try {
            const res = await axios.get(`http://localhost:4000/Comments/get/${Opinionsid}`
            );
        
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({
              error:error.message,
            });
        }
    }
);



export const CommentsSlice = createSlice({
    name:'PostComments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createNewComments.fulfilled, (state, action) => {
           state.loading =false;
        state.posts=action.payload.Answers
         });

         builder.addCase(createNewComments.pending, (state, action) => {
          state.loading = true;
          state.Comments = [];
        });

        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.posts = action.payload
        })
    }
});

export default CommentsSlice.reducer;