import axios from "axios";

const http = axios.create({
  baseURL: process.env.URL,
  timeout: 4000,
  withCredentials: true,
});

export default http;
