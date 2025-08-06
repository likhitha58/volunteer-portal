// src/axios/AxiosConfig.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // change this based on your backend
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // if you're using cookies for auth
});

export default instance;
