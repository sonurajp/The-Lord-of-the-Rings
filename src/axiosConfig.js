import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

instance.interceptors.request.use((config) => {
  // Add the Bearer token to the Authorization header
  const accessToken = import.meta.env.VITE_API_KEY;
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export default instance;
