import React, { useState } from "react";
import useEditProductApi from "../../api/editProduct/useEditProduct.api";
import useProductApi from "../../api/product/useProduct.api";
import { EditProductRequest } from "../../shared/types/editProduct";
import { ProductSearchRequest, ProductSearchResponse } from "../../shared/types/product";
import textStyles from "../../styles/text.module.css";
import useTopPopup from "../TopPopup/TopPopup.hook";
import Button from "../UI/Buttons/Button/Button";
import Input from "../UI/Inputs/Input/Input";
import styles from "./AdminSearch.module.css";
import searchImage from "/static/search.svg";

const initialForm = {
     deliveryDate: "",
     description: "",
     idproduct: 0,
     manufacturer: "",
     partNumber: "",
     price: 0,
};

const AdminSearch = () => {
     const { search, loading } = useProductApi();
     const { edit, loading: loadingEdit, deleteProduct } = useEditProductApi();
     const { showTopPopup } = useTopPopup();

     const [form, setForm] = useState<EditProductRequest>(initialForm);
     const [selectedProduct, setSelectedProduct] = useState<EditProductRequest | null>(null);
     const [product, setProduct] = useState<ProductSearchResponse>([]);
     const [input, setInput] = useState<ProductSearchRequest>({ partNumber: "" });
     const [isFirstSearch, setIsFirstSearch] = useState<boolean>(true);

     const selectButtonOnClickHandler = (product: EditProductRequest) => {
          return () => {
               setForm(product);
               setSelectedProduct(product);
          };
     };
     const deleteButtonOnClickHandler = (idproduct: number) => {
          return async () => {
               try {
                    const data = await deleteProduct({ idproduct });

                    if (data.succes) {
                         showTopPopup({ message: { text: "Успешно удалено", type: "succes" } });
                         searchButtonOnClickHandler();
                    }
               } catch (e) {
                    showTopPopup({ message: { text: "Не удалось удалить", type: "error" } });
               }
          };
     };

     const inputSearchOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setInput({ partNumber: event.target.value });
     };

     const inputFormOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setForm((prev) => ({
               ...prev,
               [event.target.name]: event.target.name === "price" ? Number(event.target.value) : event.target.value,
          }));
     };

     const searchButtonOnClickHandler = async () => {
          try {
               if (!input) {
                    return showTopPopup({ message: { text: "Введите запрос", type: "info" } });
               }
               const product = await search(input);

               setProduct(product);
               setIsFirstSearch(false);
          } catch (e) {
               console.error(e);
               showTopPopup({ message: { text: "Не удалось загрузить результаты", type: "error" } });
          }
     };

     const closeButtonOnClickHandler = () => {
          setForm(initialForm);
          setSelectedProduct(null);
     };

     const editButtonOnClickHandler = async () => {
          try {
               if (!selectedProduct) {
                    const isAllFieldsComplete =
                         Object.keys(form).filter((key) => key !== "idproduct" && !!form[key]).length ===
                         Object.keys(form).length - 1;

                    if (!isAllFieldsComplete) {
                         return showTopPopup({ message: { text: "Заполните все поля", type: "info" } });
                    }
               }

               const data = await edit(form);

               if (data.succes) {
                    showTopPopup({ message: { text: "Отправленно", type: "succes" } });
                    setForm(initialForm);
                    setSelectedProduct(null);
               }
               if (!selectedProduct && !input) searchButtonOnClickHandler();

               setSelectedProduct(null);
               setForm(initialForm);
          } catch (e) {
               showTopPopup({ message: { text: "Не удалось сохранить", type: "error" } });
          }
     };

     return (
          <>
               <div className={styles.AdminSearch}>
                    <p className={textStyles.silentText}>{"Введитие парт. номер нужной детали:"}</p>
                    <Input
                         value={input.partNumber}
                         onChange={inputSearchOnChangeHandler}
                         placeholder={"Парт. №"}
                         withButton={true}
                         buttonImage={searchImage}
                         buttonOnClick={searchButtonOnClickHandler}
                    />

                    {isFirstSearch ? null : loading ? (
                         <p className={textStyles.silentText}>{"Загрузка..."}</p>
                    ) : product.length > 0 ? (
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
                              {product.map((searchResult) => (
                                   <div key={searchResult.idproduct} className={styles.searchResult}>
                                        <div className={styles.searchResultProperty}>
                                             <span className={styles.searchResultText}>{searchResult.partNumber}</span>
                                        </div>
                                        <div className={styles.searchResultProperty}>
                                             <span className={styles.searchResultText}>
                                                  {searchResult.manufacturer}
                                             </span>
                                        </div>
                                        <div className={styles.searchResultProperty}>
                                             <span className={styles.searchResultText}>{searchResult.description}</span>
                                        </div>
                                        <div className={styles.searchResultProperty}>
                                             <span className={styles.searchResultText}>
                                                  {searchResult.deliveryDate}
                                             </span>
                                        </div>
                                        <div className={styles.searchResultProperty}>
                                             <span className={styles.searchResultText}>{searchResult.price}р.</span>
                                        </div>
                                        <div className={styles.searchResultProperty}>
                                             <Button
                                                  onClick={selectButtonOnClickHandler(searchResult)}
                                                  className={`${styles.AdminSearchResultButton} ${styles.AdminSearchResultButton_Admin}`}
                                             >
                                                  {"Изменить"}
                                             </Button>
                                             <Button
                                                  onClick={deleteButtonOnClickHandler(searchResult.idproduct)}
                                                  className={`${styles.AdminSearchResultButton} ${styles.AdminSearchResultButton_Admin}`}
                                             >
                                                  {"Удалить"}
                                             </Button>
                                        </div>
                                   </div>
                              ))}
                         </section>
                    ) : (
                         <p className={textStyles.silentText}>{"По вашему запросу ничего не найдено"}</p>
                    )}
               </div>
               <div className={styles.edit}>
                    <h3 className={styles.heading}>{`${selectedProduct ? `Редактирование` : `Создание`} товара`}</h3>

                    <form className={styles.form}>
                         <Input
                              label={"Парт. №"}
                              placeholder={"Парт. №"}
                              className={styles.input}
                              value={form.partNumber}
                              name={"partNumber"}
                              onChange={inputFormOnChangeHandler}
                         />
                         <Input
                              label={"Бренд"}
                              placeholder={"Бренд"}
                              className={styles.input}
                              value={form.manufacturer}
                              name={"manufacturer"}
                              onChange={inputFormOnChangeHandler}
                         />
                         <Input
                              label={"Описание"}
                              placeholder={"Описание"}
                              className={styles.input}
                              value={form.description}
                              name={"description"}
                              onChange={inputFormOnChangeHandler}
                         />
                         <Input
                              label={"Дата доставки"}
                              placeholder={"Дата доставки"}
                              className={styles.input}
                              value={form.deliveryDate}
                              name={"deliveryDate"}
                              onChange={inputFormOnChangeHandler}
                         />
                         <Input
                              label={"Цена"}
                              placeholder={"Цена"}
                              className={styles.input}
                              value={form.price}
                              name={"price"}
                              onChange={inputFormOnChangeHandler}
                              type="number"
                         />
                    </form>
                    <div className={styles.actions}>
                         <Button onClick={editButtonOnClickHandler} className={styles.action} disabled={loadingEdit}>
                              {"Сохранить"}
                         </Button>
                         <Button onClick={closeButtonOnClickHandler} className={styles.action}>
                              {"Отмена"}
                         </Button>
                    </div>
               </div>
          </>
     );
};

export default AdminSearch;
