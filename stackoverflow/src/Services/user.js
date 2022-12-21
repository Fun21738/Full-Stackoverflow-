import axios from "axios";

// headers{authorization:token}

const loginUrl = `http://localhost:4000/Clients/Login`;


export const getUserID = async (userId) => {
    const response = await axios.get(`${loginUrl}/${userId}`);
    return response;
};