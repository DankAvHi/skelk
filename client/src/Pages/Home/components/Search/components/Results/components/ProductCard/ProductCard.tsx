import { product } from "@prisma/client";
import Button from "../../../../../../../../components/UI/Buttons/Button/Button";
import { productSearchProperties } from "../../../../Search.data";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
     searchResult: product & { [key: string]: any };
};

const ProductCard = (props: ProductCardProps) => (
     <div className={styles.ProductCard}>
          {Object.keys(props.searchResult).map(
               (property) =>
                    !(property === "idproduct") && (
                         <div key={property} className={styles.property}>
                              <span className={styles.title}>{productSearchProperties[property]}</span>
                              <span className={styles.text}>{props.searchResult[property]}</span>
                         </div>
                    )
          )}
          <div className={styles.property}>
               <Button className={styles.button}>{"Купить"}</Button>
          </div>
     </div>
);

export default ProductCard;
