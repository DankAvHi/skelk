import bestPriceImage from "../../../../assets/best-price.jpg";
import certImage from "../../../../assets/cert.jpg";
import manyChipsImage from "../../../../assets/manyChips.jpg";
import styles from "./OurBenefits.module.css";

const OurBenefits = () => (
     <section className={styles.OurBenefits}>
          <h2 className={styles.heading}>{"Наши преимущества перед конкурентами"}</h2>

          <div className={styles.benefits}>
               <div className={styles.benefit}>
                    <div className={styles.card}>
                         <img className={styles.image} src={manyChipsImage} alt="" />
                    </div>
                    <p className={styles.text}>{"Широкий ассортимент товаров"}</p>
               </div>
               <div className={styles.benefit}>
                    <div className={styles.card}>
                         <img className={styles.image} src={certImage} alt="" />
                    </div>
                    <p className={styles.text}>{"Высокая квалификация сотрудников"}</p>
               </div>
               <div className={styles.benefit}>
                    <div className={styles.card}>
                         <img className={styles.image} src={bestPriceImage} alt="" />
                    </div>
                    <p className={styles.text}>{"Гибкая ценовая политика"}</p>
               </div>
          </div>
     </section>
);

export default OurBenefits;
