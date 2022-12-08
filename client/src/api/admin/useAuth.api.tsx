import { useCallback } from "react";
import { LOGIN_API, LOGOUT_API, VERIFY_API } from "../../../../src/shared/api/auth.api.shared";
import { LoginRequest } from "../../../../src/shared/types/auth";
import { LoginResponseClient, LogoutResponseClient, VerifyResponseClient } from "../../shared/types/auth";
import useFetch from "../useFetch.api";

const useAuthApi = () => {
     const { fetcher, loading, error } = useFetch();
     const login = useCallback(
          async (req: LoginRequest): LoginResponseClient =>
               await fetcher({ url: LOGIN_API, body: req, method: "POST" }),
          []
     );
     const verify = useCallback(async (): VerifyResponseClient => await fetcher({ url: VERIFY_API }), []);
     const logout = useCallback(
          async (): LogoutResponseClient => await fetcher({ url: LOGOUT_API, method: "DELETE" }),
          []
     );

     return { login, verify, logout, loading, error };
};

export default useAuthApi;
