import React, { useState } from "react";
import useProductApi from "../../../../api/product/useProduct.api";
import useTopPopup from "../../../../components/TopPopup/TopPopup.hook";
import Input from "../../../../components/UI/Inputs/Input/Input";
import { ProductSearchRequest, ProductSearchResponse } from "../../../../shared/types/product";
import textStyles from "../../../../styles/text.module.css";
import Results from "./components/Results/Results";
import styles from "./Search.module.css";
import searchImage from "/static/search.svg";

const Search = () => {
     const { search, loading } = useProductApi();
     const { showTopPopup } = useTopPopup();

     const [products, setProducts] = useState<ProductSearchResponse>([]);
     const [input, setInput] = useState<ProductSearchRequest>({ partNumber: "" });
     const [isFirstSearch, setIsFirstSearch] = useState<boolean>(true);

     const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setInput({ partNumber: event.target.value });
     };

     const searchButtonOnClickHandler = async () => {
          try {
               if (!input.partNumber.trim() || input.partNumber.trim().length < 3) {
                    return showTopPopup({ message: { text: "Введите для поиска минимум 3 символа", type: "info" } });
               }
               const products = await search(input);

               setProducts(products);
               setIsFirstSearch(false);
          } catch (e) {
               console.error(e);
               showTopPopup({ message: { text: "Не удалось загрузить результаты", type: "error" } });
          }
     };

     return (
          <div className={styles.Search}>
               <p className={textStyles.silentText}>{"Введитие парт. номер нужной детали:"}</p>
               <Input
                    value={input.partNumber}
                    onChange={inputOnChangeHandler}
                    placeholder={"Парт. №"}
                    withButton={true}
                    buttonImage={searchImage}
                    buttonOnClick={searchButtonOnClickHandler}
               />

               {isFirstSearch ? null : loading ? (
                    <p className={textStyles.silentText}>{"Загрузка..."}</p>
               ) : products.length > 0 ? (
                    <Results searchResults={products} />
               ) : (
                    <p className={textStyles.silentText}>{"По вашему запросу ничего не найдено"}</p>
               )}
          </div>
     );
};

export default Search;
