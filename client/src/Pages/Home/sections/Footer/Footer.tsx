import { useState } from "react";
import miniLogoImage from "../../../../assets/miniLogo.svg";
import Button from "../../../../components/UI/Buttons/Button/Button";
import OrderBackCallModal from "../../components/OrderBackCallModal/OrderBackCallModal";
import styles from "./Footer.module.css";

const Footer = () => {
     const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);

     const orderBackCallButtonOnClickHandler = () => setIsOrderModalOpen(true);

     return (
          <>
               <footer className={styles.Footer}>
                    <div className={styles.container}>
                         <img className={styles.logo} src={miniLogoImage} alt={"Логотип"} />
                         <div className={styles.orderCall}>
                              <p className={styles.phoneNumber}>{"+7 (495) 927-67-79"}</p>
                              <Button onClick={orderBackCallButtonOnClickHandler} className={styles.button}>
                                   {"Заказать звонок"}
                              </Button>
                         </div>
                    </div>
               </footer>
               <OrderBackCallModal isOpen={isOrderModalOpen} setIsOpen={setIsOrderModalOpen} />
          </>
     );
};

export default Footer;
