import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    Comments: [ ]
};


const url="https://stack-28e5a-default-rtdb.firebaseio.com/stack.json"

export const createNewPost = createAsyncThunk('posts/createNewPost',
    async ({posts, newAnswer}, { dispatch }) => {        
        try {
          await axios.put(url, {});
          let res = null;
            posts.forEach(async(item) => {
              if (item.id === newAnswer.id){
                res = await axios.post(url, newAnswer);
              }
              else{
                await axios.post(url, item);
              }
            });
            console.log(res.data)
            dispatch(fetchPosts())
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }
);



export const fetchPosts = createAsyncThunk('posts/fetchPosts', 
    async () => {
        try {
            const response = await axios.get(url);
            console.log({response})
            const dataArray=[]
            for(let key in response.data){

                dataArray.push({
        
                  id: key,
                  postQuestion: response.data[key].quiz, 
                  postAnswer: response.data[key].Answers,     
                });
        
              }
            return dataArray
        } catch (error) {
            console.log(error)
        }
    }
)



export const answerSlice = createSlice({
    name:'PostComments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createNewPost.fulfilled, (state, action) => {
        //     state.posts.push(action.payload);
        state.posts=action.payload.Answers
         });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
    }
});

export default answerSlice.reducer;