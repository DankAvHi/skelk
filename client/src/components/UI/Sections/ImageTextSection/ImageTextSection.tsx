import TextSection from "../TextSection/TextSection";
import { TextSectionProps } from "../TextSection/TextSection.d";
import styles from "./ImageTextSection.module.css";

type ImageTextSectionProps = TextSectionProps & {
     image: string;
};

export function ImageTextSection(props: ImageTextSectionProps) {
     return (
          <section className={styles.ImageTextSection}>
               <TextSection heading={props.heading} paragraph={props.paragraph} />
               <img className={styles.image} src={props.image} alt="" />
          </section>
     );
}
