import axios from "axios";
// import { redirect } from "react-router-dom";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response?.status == 401) {
      //   console.log(err);
      //   redirect("/login");
      localStorage.clear();
      return Promise.reject(err);
    }
  }
);

export default apiClient;
