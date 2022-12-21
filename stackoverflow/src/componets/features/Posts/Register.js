import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { Await } from "react-router-dom";
// import { loginUser } from "../../../Services/user";


const initialState = {
    Clients: [],
    loading:false
};

const SignupUrl=`http://localhost:4000/Clients/signup`


export const SigupClient = createAsyncThunk('AddnewUser',
    async (newClient,thunkAPI) => {
                try {
            // console.log(res);
            await axios.post(SignupUrl, newClient).then((data)=> console.log(data))
             return{ newClient }
        } catch (error) {
            thunkAPI.rejectWithValue({
                error:error.message
            })
        }
    }
);

export const LoginClient = createAsyncThunk('user/login',
    async (newClient, thunkAPI) =>{
        // console.log(newClient)
    // console.log(newClient);
    try {
      const response=  await (await axios.post ( "http://localhost:4000/Clients/Login",newClient))

        localStorage.setItem("Clients", response.data.token);
      console.log(response.data.token)
      return response.data
    } catch (error) {
            thunkAPI.rejectWithValue({
                error:error.message
    })
    }
}
);
    
export const clientsSlice = createSlice({
    name: 'Clients',
    initialState,
    reducers: {},   
    extraReducers: (builder) => {
        builder.addCase(SigupClient.pending, (state, action) => {
        state.loading=true
       });
         builder.addCase(SigupClient.fulfilled, (state, action) => {
         state.Clients=action.payload.Clients
         state.loading=false
       });

        builder.addCase(LoginClient.fulfilled, (state, action) => {
            state.Clients=action.payload
            // console.log(action.payload);
            state.loading=false
        });
        builder.addCase(LoginClient.pending, (state, action) => {
            state.loading=true
       });
       
    }
});

export default clientsSlice.reducer;