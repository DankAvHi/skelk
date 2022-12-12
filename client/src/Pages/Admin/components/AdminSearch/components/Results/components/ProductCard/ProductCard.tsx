import { product } from "@prisma/client";
import Button from "../../../../../../../../components/UI/Buttons/Button/Button";
import { EditProductRequest } from "../../../../../../../../shared/types/editProduct";
import { productSearchProperties } from "../../../../AdminSearch.data";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
     searchResult: product & { [key: string]: string };
     deleteButtonOnClickHandler: (idproduct: number) => () => Promise<void>;
     selectButtonOnClickHandler: (product: EditProductRequest) => () => void;
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
               <Button
                    onClick={props.selectButtonOnClickHandler(props.searchResult)}
                    className={`${styles.button} ${styles.button_Admin}`}
               >
                    {"Изменить"}
               </Button>
               <Button
                    onClick={props.deleteButtonOnClickHandler(props.searchResult.idproduct)}
                    className={`${styles.button} ${styles.button_Admin}`}
               >
                    {"Удалить"}
               </Button>
          </div>
     </div>
);

export default ProductCard;
