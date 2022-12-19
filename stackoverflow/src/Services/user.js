import axios from "axios";

// headers{authorization:token}

const loginUrl = `http://localhost:4000/Clients/Login`;

export const loginUser = async (Clients) => {
// const response =await axios.post(loginUrl)
    return await axios.post(loginUrl, Clients).then((response) => {
      //a condition to see if a user has a token
      if(response.data.token) {
        //storing my data using chrome
        //passing in the name of the storage, convert the data into json and response to the data
        sessionStorage.setItem("Clients", JSON.stringify(response.data));
      }
      return response.data;
    });
  };
//getting user by his/ her id
export const getUserID = async (userId) => {
    const response = await axios.get(`${loginUrl}/${userId}`);
    return response;
};