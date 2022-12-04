import { useCallback } from "react";
import { LOGIN_API, LOGOUT_API, VERIFY_API } from "../../../../src/shared/api/auth.api.shared";
import { BooleanResponseClient } from "../../../../src/shared/types/api.response";
import { LoginRequest } from "../../../../src/shared/types/auth";
import useFetch from "../useFetch.api";

const useAuthApi = () => {
     const { fetcher, loading } = useFetch();
     const login = useCallback(
          async (req: LoginRequest): BooleanResponseClient =>
               await fetcher({ url: LOGIN_API, body: req, method: "POST" }),
          []
     );
     const verify = useCallback(async (): BooleanResponseClient => await fetcher({ url: VERIFY_API }), []);
     const logout = useCallback(
          async (): BooleanResponseClient => await fetcher({ url: LOGOUT_API, method: "DELETE" }),
          []
     );

     return { login, verify, logout, loading };
};

export default useAuthApi;
