import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { Await } from "react-router-dom";
import { loginUser } from "../../../Services/user";


const initialState = {
    Clients: [],
    loading:false
};

const SignupUrl=`http://localhost:4000/Clients/signup`


export const SigupClient = createAsyncThunk('AddnewUser',
    async (newClient,thunkAPI) => {
                try {
            // console.log(res);
            await axios
            .post(SignupUrl, newClient)
            .then((data)=> console.log(data))
             return{ newClient }
        } catch (error) {
            thunkAPI.rejectWithValue({
                error:error.message
            })
        }
    }
);

// export const LoginClient = createAsyncThunk(
//     "Login Clients",
//     async (newClient,thunkAPI) =>{
//         try{
//             console.log("fgdgdgf", {newClient});

//             const response = await loginUser(newClient)
//             console.log(response);
//             return{Clients:response}
//          } catch (error){
//             console.log(error);
//             thunkAPI.rejectWithValue({
//                 error:error.message
//             })
//          }
//         }
// )

export const LoginClient = createAsyncThunk('user/login',
    async (values, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:4000/Clients/Login', values);

            console.log(response)
            return response.data
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(error.response.data.message)
        }
    }
)

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
            state.Clients=action.payload.Clients
            state.loading=false
        });
        builder.addCase(LoginClient.pending, (state, action) => {
            state.loading=true
       });
       
    }
});

export default clientsSlice.reducer;