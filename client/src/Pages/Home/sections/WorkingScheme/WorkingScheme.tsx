import { useState } from "react";
import Button from "../../../../components/UI/Buttons/Button/Button";
import OrderBackCallModal from "../../components/OrderBackCallModal/OrderBackCallModal";
import styles from "./WorkingScheme.module.css";

const WorkingScheme = () => {
     const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);

     const orderBackCallButtonOnClickHandler = () => setIsOrderModalOpen(true);
     return (
          <>
               <section className={styles.WorkingScheme}>
                    <h2 className={styles.heading}>{"Схема работы"}</h2>

                    <div className={styles.steps}>
                         <div className={styles.step}>
                              <p className={styles.number}>{"1"}</p>

                              <p className={styles.title}>{"Заявка или звонок"}</p>
                              <p className={styles.description}>
                                   {
                                        "Оставьте заявку через форму обратной связи, по почте или позвоните на телефон компании"
                                   }
                              </p>
                         </div>
                         <div className={styles.step}>
                              <p className={styles.number}>{"2"}</p>

                              <p className={styles.title}>{"Выставление счета"}</p>
                              <p className={styles.description}>
                                   {
                                        "Отдел снабжения проработает Ваш запрос в течении дня. Далее Ваш личный менеджер вышлет коммерческое предложение с ценами и сроками поставки"
                                   }
                              </p>
                         </div>
                    </div>
                    <div className={styles.steps}>
                         <div className={styles.step}>
                              <p className={styles.number}>{"3"}</p>

                              <p className={styles.title}>{"Обратная связь"}</p>
                              <p className={styles.description}>
                                   {"Менеджер свяжется с Вами в ближайшее время для уточнение деталей заказа"}
                              </p>
                         </div>
                         <div className={styles.step}>
                              <p className={styles.number}>{"4"}</p>

                              <p className={styles.title}>{"Отгрузка продукции"}</p>
                              <p className={styles.description}>
                                   {
                                        "Отгрузка по частичной или полной предоплате, а также постоплате. Заключение договора"
                                   }
                              </p>
                         </div>
                    </div>

                    <Button onClick={orderBackCallButtonOnClickHandler} className={styles.button}>
                         {"Оставить заявку"}
                    </Button>
               </section>
               <OrderBackCallModal isOpen={isOrderModalOpen} setIsOpen={setIsOrderModalOpen} />
          </>
     );
};

export default WorkingScheme;
