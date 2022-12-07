import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [
        // {
        //     name: 'Jose'
        // },
        // {
        //     name: 'Jose2'
        // },
        // {
        //     name: 'Jose3'
        // },
    ],
    // answer: {},
};


const url="https://stack-28e5a-default-rtdb.firebaseio.com/stack.json"

export const createNewPost = createAsyncThunk('posts/createNewPost',
    async (newPost, { dispatch }) => {
        console.log('new', newPost);
        try {
            // console.log(res);
            await axios.post("https://stack-28e5a-default-rtdb.firebaseio.com/stack.json", newPost)
            // dispatch(fetchPosts())
            // return res.data
        } catch (error) {
            console.log(error)
        }
    }
);

export const fetchPosts = createAsyncThunk('posts/fetchPosts', 
    async () => {
        try {
            const response = await axios.get(url);
            console.log({response});
            const dataArray=[]
            for(let key in response.data){
                console.log({key});
                dataArray.push({
        
                  id: response.data[key].id,
                  quiz: response.data[key].quiz,
                  answers: response.data[key].answers      
                });
        
              }
            return dataArray
        } catch (error) {
            console.log(error)
        }
    }
)

export const addAnswer = createAsyncThunk('postQuestions/addAnswer',
    async (values) => {
        try {
            const res = await axios.post('postansUrl', values);
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
)

export const postSlice = createSlice({
    name: 'postQuestionts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createNewPost.fulfilled, (state, action) => {
            // state.posts.push(action.payload);
        // state.posts=action.payload.posts
         });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        });
        builder.addCase(addAnswer.fulfilled, (state, action) => {
            state.posts.answers.push(action.payload)
        })
    }
});

export default postSlice.reducer;