import miniLogoImage from "../../../../assets/miniLogo.svg";
import Button from "../../../../components/UI/Buttons/Button/Button";
import styles from "./Footer.module.css";

const Footer = () => (
     <footer className={styles.Footer}>
          <div className={styles.container}>
               <img className={styles.logo} src={miniLogoImage} alt={"Логотип"} />
               <div className={styles.orderCall}>
                    <p className={styles.phoneNumber}>{"+7 906-024-26-93"}</p>
                    <Button className={styles.button}>{"Заказать звонок"}</Button>
               </div>
          </div>
     </footer>
);

export default Footer;
