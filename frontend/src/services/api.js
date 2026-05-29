import axios from "axios";

const API = axios.create({

  baseURL: "https://onlinebankingsystem-qguw.onrender.com/api",

  headers: {
    "Content-Type": "application/json",
  },

});

API.interceptors.request.use((req) => {

  const token = localStorage.getItem("token");

  if (token) {

    req.headers.Authorization = `Bearer ${token}`;

  }

  return req;

});

API.interceptors.response.use(

  (response) => response,

  async (error) => {

    return Promise.reject(error);

  }

);

export default API;