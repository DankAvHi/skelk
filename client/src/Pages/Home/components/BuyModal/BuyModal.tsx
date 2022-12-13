import React, { useState } from "react";
import useProductApi from "../../../../api/product/useProduct.api";
import { ModalCustomProps } from "../../../../components/Modals/Modal";
import Modal from "../../../../components/Modals/Modal/Modal";
import useTopPopup from "../../../../components/TopPopup/TopPopup.hook";
import Button from "../../../../components/UI/Buttons/Button/Button";
import Input from "../../../../components/UI/Inputs/Input/Input";
import styles from "./BuyModal.module.css";

type BuyModalForm = {
     email: string;
     [key: string]: string;
};

const BuyModal = (props: ModalCustomProps & { partNumber: string }) => {
     const { order } = useProductApi();
     const { showTopPopup } = useTopPopup();

     const [form, setForm] = useState<BuyModalForm>({ email: "" });

     const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
          setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));

     const orderProduct = async (event: React.MouseEvent<HTMLButtonElement>) => {
          try {
               event.preventDefault();

               const isFormFilled = Object.keys(form).filter((field) => form[field].length > 0).length > 0;
               if (!isFormFilled) return showTopPopup({ message: { text: "Заполните все поля", type: "info" } });

               const data = await order({ partNumber: props.partNumber, email: form.email });

               if (data.succes) {
                    showTopPopup({ message: { text: "Успешно отправленно", type: "succes" } });
                    props.setIsOpen(false);
               }
          } catch (e) {
               showTopPopup({ message: { text: "Не удалось оформить заказ, повторите попытку позже", type: "error" } });
          }
     };

     return (
          <Modal {...{ ...props, classNameBorder: styles.border }}>
               <div className={styles.BuyModal}>
                    <h2 className={styles.heading}>{"Оформление заказа"}</h2>
                    <p className={styles.description}>{"Заполните форму, мы позже свяжемся с вами по почте"}</p>
                    <form className={styles.form}>
                         <Input
                              value={form.email}
                              onChange={inputOnChangeHandler}
                              classNameLabel={styles.label}
                              className={styles.input}
                              placeholder={"Введите свой адрес электронной почты"}
                              label={"Ваш Email"}
                              type={"email"}
                              name={"email"}
                         />
                         <Button onClick={orderProduct} className={styles.button}>
                              {"Отправить"}
                         </Button>
                    </form>
               </div>
          </Modal>
     );
};

export default BuyModal;
