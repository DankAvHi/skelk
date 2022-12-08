import styles from "./TextSection.module.css";

type TextSectionProps = {
     heading: string;
     paragraph: string;
};

const TextSection = (props: TextSectionProps) => {
     return (
          <section className={styles.textSection}>
               <h2 className={styles.heading}>{props.heading}</h2>
               <p className={styles.paragraph}>{props.paragraph}</p>
          </section>
     );
};

export default TextSection;
