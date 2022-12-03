import React, { useState } from "react";
import { LoginRequest } from "../../../../../../src/shared/types/auth";
import useAuthApi from "../../../../api/admin/useAuth.api";
import Button from "../../../../components/UI/Buttons/Button/Button";
import Input from "../../../../components/UI/Inputs/Input/Input";
import { useAuth } from "../../../../hooks/auth.hook";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
     const { login: loginAPI } = useAuthApi();
     const { login } = useAuth();

     const [form, setForm] = useState<LoginRequest>({ login: "", password: "" });

     const formOnSubmitHandler = async (event: React.FormEvent) => {
          event.preventDefault();

          const data = await loginAPI(form);

          if (data.succes) {
               login();
               window.location.reload();
          }
     };

     const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
     };

     return (
          <form className={styles.LoginForm} onSubmit={formOnSubmitHandler}>
               <Input name={"login"} value={form.login} onChange={inputOnChangeHandler} className={styles.input} />
               <Input
                    type="password"
                    name={"password"}
                    value={form.password}
                    onChange={inputOnChangeHandler}
                    className={styles.input}
               />
               <Button>{"Войти"}</Button>
          </form>
     );
};

export default LoginForm;
