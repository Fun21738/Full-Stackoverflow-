import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    Answers: [ ]
};


const url="http://localhost:4000/Answers/addAns"

export const createNewAnswer = createAsyncThunk('postAnswers/createNewAnswer',
    async (data,thunkAPI) => {
      console.log(data)        
        try {
          const Token = localStorage.getItem("Clients")
          
          const response = await axios.post(url, data, {
            headers:{
              Authorization:`Bearer ${Token}`
            }
          }).then (data=>data.json());
             console.log(data)
            
             console.log(response);
            return {}
        } catch (error) {
            thunkAPI.rejectWithValue({
              console:error.message
            })
        }
    }
);



export const fetchAnswers = createAsyncThunk('posts/fetchPosts', 
    async (answer,thunkAPI) => {
        try {
            const res = await axios.get('http://localhost:4000/Answers/answers');
            
            // const answer=res.data;
            return res.data 
        } catch (error) {
          thunkAPI.rejectWithValue({
            error:error.message
          })
        }
    }
)



export const answerSlice = createSlice({
    name: 'postAnswers',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(createNewAnswer.fulfilled, (state, action) => {
         state.loading=false
         });

         builder.addCase(createNewAnswer.pending, (state, action) => {
          
          state.loading =true
          state.Answers =[]
        });

        builder.addCase(fetchAnswers.fulfilled, (state, action) => {
           state.Answers=action.payload.Answers
           state.loading=false
           console.log(action.payload.Answers);
           
        });
        builder.addCase(fetchAnswers.pending,(state,action)=>{
          state.loading=true
         })
    }
});

export default answerSlice.reducer;