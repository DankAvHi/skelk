import { product } from "@prisma/client";
import { EditProductRequest } from "../../../../../../shared/types/editProduct";
import ProductCard from "./components/ProductCard/ProductCard";
import SearchProperties from "./components/SearchProperties/SearchProperties";
import styles from "./Results.module.css";

type ResultsProps = {
     searchResults: product[];
     deleteButtonOnClickHandler: (idproduct: number) => () => Promise<void>;
     selectButtonOnClickHandler: (product: EditProductRequest) => () => void;
};

const Results = (props: ResultsProps) => (
     <section className={styles.Results}>
          <SearchProperties />

          {props.searchResults.map((searchResult) => (
               <ProductCard
                    deleteButtonOnClickHandler={props.deleteButtonOnClickHandler}
                    selectButtonOnClickHandler={props.selectButtonOnClickHandler}
                    key={searchResult.idproduct}
                    searchResult={searchResult}
               />
          ))}
     </section>
);

export default Results;
