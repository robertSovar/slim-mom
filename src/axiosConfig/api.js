import axios from "axios";

export const api = axios.create({
  baseURL: "https://git.heroku.com/slim-mom-backend.git",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  api.defaults.headers.common.Authorization = "";
};
