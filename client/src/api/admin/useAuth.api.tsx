import { LOGIN_API, LOGOUT_API, VERIFY_API } from "../../../../src/shared/api/auth.api.shared";
import { BOOLEAN_RESPONSE } from "../../../../src/shared/types/api.response";
import { LoginRequest } from "../../../../src/shared/types/auth";
import fetcher from "../fetcher";

const useAuthApi = () => {
     const login = async ({ login, password }: LoginRequest): BOOLEAN_RESPONSE =>
          await fetcher(LOGIN_API, {
               body: JSON.stringify({ login, password }),
               method: "POST",
               headers: { "Content-Type": "application/json" },
          });
     const verify = async (): BOOLEAN_RESPONSE => await fetcher(VERIFY_API, { method: "GET" });
     const logout = async (): BOOLEAN_RESPONSE => await fetcher(LOGOUT_API, { method: "DELETE" });

     return { login, verify, logout };
};

export default useAuthApi;
