import { useState } from "react";
import Button from "../../../../components/UI/Buttons/Button/Button";
import OrderBackCallModal from "../OrderBackCallModal/OrderBackCallModal";
import styles from "./Header.module.css";
import logoImage from "/static/logo.svg";

const Header = () => {
     const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);

     const orderBackCallButtonOnClickHandler = () => setIsOrderModalOpen(true);

     return (
          <>
               <header className={styles.Header}>
                    <div className={styles.info}>
                         <div className={styles.infoBlock}>
                              <div className={styles.infoLine}>
                                   <span className={styles.infoTitle}>{"Наш Email:"}</span>
                                   <span className={styles.infoText}>{"info@skelk.ru"}</span>
                              </div>
                              <div className={styles.infoLine}>
                                   <span className={styles.infoTitle}>{"Телефон:"}</span>
                                   <span className={styles.infoText}>{"+7 (495) 927-67-79"}</span>
                              </div>
                         </div>
                         <div className={styles.infoBlock}>
                              <div className={styles.infoLine}>
                                   <span className={styles.infoTitle}>{"Адрес:"}</span>
                                   <span className={styles.infoText}>{"г.Москва, ул Нагатинская 16"}</span>
                              </div>
                              <div className={styles.infoLine}>
                                   <span className={styles.infoTitle}>{"Время работы:"}</span>
                                   <span className={styles.infoText}>{"с 9:30 до 17:00"}</span>
                              </div>
                         </div>
                         <Button onClick={orderBackCallButtonOnClickHandler} className={styles.button}>
                              {"Заказать обратный звонок"}
                         </Button>
                    </div>

                    <img className={styles.logo} src={logoImage} alt={"Логотип"} />
                    <h1 className={styles.heading}>{"Скэлк - Склад электронных компонентов"}</h1>
               </header>
               <OrderBackCallModal isOpen={isOrderModalOpen} setIsOpen={setIsOrderModalOpen} />
          </>
     );
};

export default Header;
