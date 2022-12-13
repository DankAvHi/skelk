import React, { useState } from "react";
import useFeedbackApi from "../../../../api/feedback/useFeedback.api";
import { ModalCustomProps } from "../../../../components/Modals/Modal";
import Modal from "../../../../components/Modals/Modal/Modal";
import useTopPopup from "../../../../components/TopPopup/TopPopup.hook";
import Button from "../../../../components/UI/Buttons/Button/Button";
import Input from "../../../../components/UI/Inputs/Input/Input";
import { OrderBackCallRequest } from "../../../../shared/types/feedback";
import styles from "./OrderBackCallModal.module.css";

const OrderBackCallModal = (props: ModalCustomProps) => {
     const { orderBackCall: orderBackCallApi } = useFeedbackApi();
     const { showTopPopup } = useTopPopup();

     const [form, setForm] = useState<OrderBackCallRequest>({ phoneNumber: "", name: "" });

     const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
          setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));

     const orderBackCall = async (event: React.MouseEvent<HTMLButtonElement>) => {
          try {
               event.preventDefault();

               const isFormFilled = Object.keys(form).filter((field) => form[field].length > 0).length > 0;
               if (!isFormFilled) return showTopPopup({ message: { text: "Заполните все поля", type: "info" } });

               const data = await orderBackCallApi(form);

               if (data.succes) {
                    showTopPopup({ message: { text: "Ваша заявка отправленна", type: "succes" } });
                    props.setIsOpen(false);
               }
          } catch (e) {
               showTopPopup({
                    message: { text: "Не удалось заказать обратный звонок, повторите попытку позже", type: "error" },
               });
          }
     };

     return (
          <Modal {...{ ...props, classNameBorder: styles.border }}>
               <div className={styles.OrderBackCallModal}>
                    <h2 className={styles.heading}>{"Заказать обратный звонок"}</h2>
                    <p className={styles.description}>{"Введите свой ноиер телефона, мы вам перезвоним"}</p>
                    <form className={styles.form}>
                         <Input
                              value={form.name}
                              onChange={inputOnChangeHandler}
                              classNameLabel={styles.label}
                              className={styles.input}
                              placeholder={"ФИО"}
                              label={"Ваше ФИО"}
                              name={"name"}
                         />
                         <Input
                              value={form.phoneNumber}
                              onChange={inputOnChangeHandler}
                              classNameLabel={styles.label}
                              className={styles.input}
                              placeholder={"Номер телефона"}
                              label={"Ваш номер"}
                              type={"tel"}
                              name={"phoneNumber"}
                         />
                         <Button onClick={orderBackCall} className={styles.button}>
                              {"Отправить"}
                         </Button>
                    </form>
               </div>
          </Modal>
     );
};

export default OrderBackCallModal;
