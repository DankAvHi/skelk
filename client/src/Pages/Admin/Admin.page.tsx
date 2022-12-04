import React, { useState } from "react";
import useAuthApi from "../../api/admin/useAuth.api";
import useEditProductsApi from "../../api/editProducts/useEditProducts.api";
import Search from "../../components/Search/Search";
import useTopPopup from "../../components/TopPopup/TopPopup.hook";
import Button from "../../components/UI/Buttons/Button/Button";
import Input from "../../components/UI/Inputs/Input/Input";
import { useAuth } from "../../hooks/auth.hook";
import { EditProductRequest } from "../../shared/types/editProducts";
import globalStyles from "../../styles/global.module.css";
import styles from "./Admin.module.css";
import LoginForm from "./components/LoginForm/LoginForm";

const initialForm = {
     deliveryDate: "",
     description: "",
     idproducts: 0,
     manufacturer: "",
     partNumber: "",
     price: 0,
};

const AdminPage = () => {
     const { isAuthenticated } = useAuth();
     const { logout } = useAuthApi();
     const { edit, error } = useEditProductsApi();
     const { showTopPopup } = useTopPopup();

     const [form, setForm] = useState<EditProductRequest>(initialForm);
     const [selectedProduct, setSelectedProduct] = useState<EditProductRequest | null>(null);

     const logoutButtonOnClickHandler = async () => {
          await logout();
          window.location.reload();
     };

     const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
     };

     const selectButtonOnClickHandler = (product: EditProductRequest) => {
          return () => {
               setForm(product);
               setSelectedProduct(product);
          };
     };
     const deleteButtonOnClickHandler = async () => {};

     const closeButtonOnClickHandler = () => {
          setForm(initialForm);
          setSelectedProduct(null);
     };

     const editButtonOnClickHandler = async () => {
          const data = await edit(form);

          if (data.succes) {
               showTopPopup({ message: { text: "Успешно измененно", type: "succes" } });
          }

          setForm(initialForm);
          setSelectedProduct(null);
     };

     return (
          <div className={`${styles.Admin} ${globalStyles.pageContainer}`}>
               {isAuthenticated ? (
                    <>
                         <div className={styles.controls}>
                              <Button onClick={logoutButtonOnClickHandler}>{"Выйти"}</Button>
                         </div>

                         <Search
                              isAdmin
                              selectButtonOnClickHandler={selectButtonOnClickHandler}
                              deleteButtonOnClickHandler={deleteButtonOnClickHandler}
                         />

                         {selectedProduct && (
                              <div className={styles.edit}>
                                   <h3 className={styles.heading}>{"Редактирование товара"}</h3>

                                   <form className={styles.form}>
                                        <Input
                                             label={"Парт. №"}
                                             placeholder={"Парт. №"}
                                             className={styles.input}
                                             value={form.partNumber}
                                             name={"partNumber"}
                                             onChange={inputOnChangeHandler}
                                        />
                                        <Input
                                             label={"Бренд"}
                                             placeholder={"Бренд"}
                                             className={styles.input}
                                             value={form.manufacturer}
                                             name={"manufacturer"}
                                             onChange={inputOnChangeHandler}
                                        />
                                        <Input
                                             label={"Описание"}
                                             placeholder={"Описание"}
                                             className={styles.input}
                                             value={form.description}
                                             name={"description"}
                                             onChange={inputOnChangeHandler}
                                        />
                                        <Input
                                             label={"Дата доставки"}
                                             placeholder={"Дата доставки"}
                                             className={styles.input}
                                             value={form.deliveryDate}
                                             name={"deliveryDate"}
                                             onChange={inputOnChangeHandler}
                                        />
                                        <Input
                                             label={"Цена"}
                                             placeholder={"Цена"}
                                             className={styles.input}
                                             value={form.price}
                                             name={"price"}
                                             onChange={inputOnChangeHandler}
                                        />
                                   </form>
                                   <div className={styles.actions}>
                                        <Button onClick={editButtonOnClickHandler} className={styles.action}>
                                             {"Сохранить"}
                                        </Button>
                                        <Button onClick={closeButtonOnClickHandler} className={styles.action}>
                                             {"Отмена"}
                                        </Button>
                                   </div>
                              </div>
                         )}
                    </>
               ) : (
                    <LoginForm />
               )}
          </div>
     );
};

export default AdminPage;
