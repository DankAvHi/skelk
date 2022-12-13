import { TextSectionProps } from "./TextSection.d";
import styles from "./TextSection.module.css";

const TextSection = (props: TextSectionProps) => {
     return (
          <section className={styles.TextSection}>
               <h2 className={styles.heading}>{props.heading}</h2>
               {typeof props.paragraph === "string" ? (
                    <p className={styles.paragraph}>{props.paragraph}</p>
               ) : (
                    props.paragraph.map((paragraph, index) => (
                         <p key={index} className={styles.paragraph}>
                              {paragraph}
                         </p>
                    ))
               )}
          </section>
     );
};

export default TextSection;
