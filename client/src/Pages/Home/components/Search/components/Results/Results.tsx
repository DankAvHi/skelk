import { product } from "@prisma/client";
import ProductCard from "./components/ProductCard/ProductCard";
import SearchProperties from "./components/SearchProperties/SearchProperties";
import styles from "./Results.module.css";

type ResultsProps = {
     searchResults: product[];
};

const Results = (props: ResultsProps) => (
     <section className={styles.Results}>
          <SearchProperties />

          {props.searchResults.map((searchResult) => (
               <ProductCard key={searchResult.idproduct} searchResult={searchResult} />
          ))}
     </section>
);

export default Results;
