import { product } from "@prisma/client";
import { useState } from "react";
import Button from "../../../../../../../../components/UI/Buttons/Button/Button";
import BuyModal from "../../../../../BuyModal/BuyModal";
import { productSearchProperties } from "../../../../Search.data";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
     searchResult: product & { [key: string]: string | number | null };
};

const ProductCard = (props: ProductCardProps) => {
     const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);

     const buyButtonOnClickHandler = () => setIsOrderModalOpen(true);

     return (
          <>
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
                         <Button onClick={buyButtonOnClickHandler} className={styles.button}>
                              {"Купить"}
                         </Button>
                    </div>
               </div>

               <BuyModal
                    {...{
                         isOpen: isOrderModalOpen,
                         setIsOpen: setIsOrderModalOpen,
                         partNumber: props.searchResult.partNumber,
                    }}
               ></BuyModal>
          </>
     );
};

export default ProductCard;
