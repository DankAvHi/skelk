import { productSearchProperties } from "../../../../AdminSearch.data";
import styles from "./SearchProperties.module.css";

const SearchProperties = () => (
     <div className={styles.SearchProperties}>
          {Object.keys(productSearchProperties).map((property) => (
               <div key={property} className={styles.property}>
                    <span className={styles.text}>{productSearchProperties[property]}</span>
               </div>
          ))}
     </div>
);

export default SearchProperties;
