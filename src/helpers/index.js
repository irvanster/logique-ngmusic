import axios from "axios";
export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URI}`,
});

api.interceptors.request.use((config) => {
  return config;
});
