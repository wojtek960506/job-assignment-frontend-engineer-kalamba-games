import axios from "axios";
import { useAuthStore } from "login/store";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(config => {
  const token = useAuthStore.getState().authToken;

  if (token) config.headers.Authorization = `Token: ${token}`;

  return config;
});

// TODO add some interceptor for errors
