import React, { useState } from "react";
import useProductsApi from "../../api/products/useProducts.api";
import { ProductsSearchRequest, ProductsSearchResponse } from "../../shared/types/products";
import textStyles from "../../styles/text.module.css";
import Button from "../UI/Buttons/Button/Button";
import Input from "../UI/Inputs/Input/Input";
import styles from "./Search.module.css";
import searchImage from "/static/search.svg";

const Search = () => {
     const { search, loading } = useProductsApi();

     const [products, setProducts] = useState<ProductsSearchResponse>([]);
     const [input, setInput] = useState<ProductsSearchRequest>({ partNumber: "" });
     const [isFirstSearch, setIsFirstSearch] = useState<boolean>(true);

     const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setInput({ partNumber: event.target.value });
     };

     const searchButtonOnClickHandler = async () => {
          const products = await search(input);

          setProducts(products);
          setIsFirstSearch(false);
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
                    <section className={styles.searchResults}>
                         <div className={styles.searchTitle}>
                              <div className={styles.searchTitleProperty}>
                                   <span className={styles.searchTitlePropertyText}>{"Парт. №"}</span>
                              </div>
                              <div className={styles.searchTitleProperty}>
                                   <span className={styles.searchTitlePropertyText}>{"Бренд"}</span>
                              </div>
                              <div className={styles.searchTitleProperty}>
                                   <span className={styles.searchTitlePropertyText}>{"Описание"}</span>
                              </div>
                              <div className={styles.searchTitleProperty}>
                                   <span className={styles.searchTitlePropertyText}>{"Срок поставки"}</span>
                              </div>
                              <div className={styles.searchTitleProperty}>
                                   <span className={styles.searchTitlePropertyText}>{"Цена"}</span>
                              </div>
                              <div className={styles.searchTitleProperty}>
                                   <span className={styles.searchTitlePropertyText}>{"Операция"}</span>
                              </div>
                         </div>
                         {products.map((searchResult) => (
                              <div key={searchResult.idproducts} className={styles.searchResult}>
                                   <div className={styles.searchResultProperty}>
                                        <span className={styles.searchResultText}>{searchResult.partNumber}</span>
                                   </div>
                                   <div className={styles.searchResultProperty}>
                                        <span className={styles.searchResultText}>{searchResult.manufacturer}</span>
                                   </div>
                                   <div className={styles.searchResultProperty}>
                                        <span className={styles.searchResultText}>{searchResult.description}</span>
                                   </div>
                                   <div className={styles.searchResultProperty}>
                                        <span className={styles.searchResultText}>{searchResult.deliveryDate}</span>
                                   </div>
                                   <div className={styles.searchResultProperty}>
                                        <span className={styles.searchResultText}>{searchResult.price}р.</span>
                                   </div>
                                   <div className={styles.searchResultProperty}>
                                        <Button className={styles.SearchResultButton}>{"Купить"}</Button>
                                   </div>
                              </div>
                         ))}
                    </section>
               ) : (
                    <p className={textStyles.silentText}>{"По вашему запросу ничего не найдено"}</p>
               )}
          </div>
     );
};

export default Search;
