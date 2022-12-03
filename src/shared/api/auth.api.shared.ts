import { API_ROUTE } from "./api.shared";
export const AUTH_ROUTE = "/auth";

export const LOGIN_ROUTE = "/login";
export const LOGOUT_ROUTE = "/logout";
export const VERIFY_ROUTE = "/verify";

export const LOGIN_API = API_ROUTE + AUTH_ROUTE + LOGIN_ROUTE;
export const LOGOUT_API = API_ROUTE + AUTH_ROUTE + LOGOUT_ROUTE;
export const VERIFY_API = API_ROUTE + AUTH_ROUTE + VERIFY_ROUTE;
