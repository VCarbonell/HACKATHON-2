import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL ?? "http://192.168.1.30:5000/api",
});

export default api;
