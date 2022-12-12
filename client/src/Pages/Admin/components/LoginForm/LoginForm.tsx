import React, { useState } from "react";
import { LoginRequest } from "../../../../../../src/shared/types/auth";
import useAuthApi from "../../../../api/admin/useAuth.api";
import useTopPopup from "../../../../components/TopPopup/TopPopup.hook";
import Button from "../../../../components/UI/Buttons/Button/Button";
import Input from "../../../../components/UI/Inputs/Input/Input";
import { useAuth } from "../../../../hooks/auth.hook";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
     const { login: loginAPI } = useAuthApi();
     const { login } = useAuth();
     const { showTopPopup } = useTopPopup();

     const [form, setForm] = useState<LoginRequest>({ login: "", password: "" });

     const formOnSubmitHandler = async (event: React.FormEvent) => {
          try {
               event.preventDefault();

               const data = await loginAPI(form);

               if (data.succes) {
                    login();
                    window.location.reload();
               }
          } catch (e: unknown) {
               console.error(e);
               showTopPopup({
                    message: {
                         text:
                              String((e as { status: string }).status)[0] === "5"
                                   ? "Ошибка при входе, сервер недоступен"
                                   : "Ошибка при входе, неверные логин или пароль",
                    },
               });
          }
     };

     const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
     };

     return (
          <form className={styles.LoginForm} onSubmit={formOnSubmitHandler}>
               <Input
                    label="Логин"
                    placeholder="Логин"
                    name={"login"}
                    value={form.login}
                    onChange={inputOnChangeHandler}
                    className={styles.input}
               />
               <Input
                    label="Пароль"
                    placeholder="Пароль"
                    type="password"
                    name={"password"}
                    value={form.password}
                    onChange={inputOnChangeHandler}
                    className={styles.input}
               />
               <Button className={styles.button}>{"Войти"}</Button>
          </form>
     );
};

export default LoginForm;
