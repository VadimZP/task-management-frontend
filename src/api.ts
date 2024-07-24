import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

export const ROUTES = {
  SIGN_UP: "/sign-up",
  SIGN_IN: "/sign-in",
  SIGN_OUT: "/sign-out",
};
