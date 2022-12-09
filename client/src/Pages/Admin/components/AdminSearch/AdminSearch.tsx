import React, { useState } from "react";
import useEditProductApi from "../../../../api/editProduct/useEditProduct.api";
import useProductApi from "../../../../api/product/useProduct.api";
import useTopPopup from "../../../../components/TopPopup/TopPopup.hook";
import Input from "../../../../components/UI/Inputs/Input/Input";
import { EditProductRequest } from "../../../../shared/types/editProduct";
import { ProductSearchRequest, ProductSearchResponse } from "../../../../shared/types/product";
import textStyles from "../../../../styles/text.module.css";
import styles from "./AdminSearch.module.css";
import EditForm from "./components/Results/components/EditForm/EditForm";
import Results from "./components/Results/Results";
import searchImage from "/static/search.svg";

const initialForm = {
     deliveryDate: "",
     description: "",
     idproduct: 0,
     manufacturer: "",
     partNumber: "",
     price: "",
};

const AdminSearch = () => {
     const { search, loading } = useProductApi();
     const { edit, loading: loadingEdit, deleteProduct } = useEditProductApi();
     const { showTopPopup } = useTopPopup();

     const [form, setForm] = useState<EditProductRequest>(initialForm);
     const [selectedProduct, setSelectedProduct] = useState<EditProductRequest | null>(null);
     const [products, setProduct] = useState<ProductSearchResponse>([]);
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
                         searchProducts();
                    }
               } catch (e) {
                    showTopPopup({ message: { text: "Не удалось удалить", type: "error" } });
               }
          };
     };

     const inputSearchOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setInput({ partNumber: event.target.value });
     };
     const inputSearchOnKeyDownHandler = async (event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") await searchProducts();
     };

     const inputFormOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setForm((prev) => ({
               ...prev,
               [event.target.name]: event.target.value,
          }));
     };

     const searchProducts = async () => {
          try {
               if (!input.partNumber.trim() || input.partNumber.trim().length < 3) {
                    return showTopPopup({ message: { text: "Введите для поиска минимум 3 символа", type: "info" } });
               }
               const products = await search(input);
               console.log(products);
               setProduct(products);
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
                    await searchProducts();
                    setForm(initialForm);
                    setSelectedProduct(null);
               }

               setSelectedProduct(null);
               setForm(initialForm);
               searchProducts();
          } catch (e) {
               showTopPopup({ message: { text: "Не удалось сохранить", type: "error" } });
          }
     };

     return (
          <>
               <div className={styles.AdminSearch}>
                    <p className={textStyles.silentText}>{"Введитие парт. номер нужной детали:"}</p>
                    <Input
                         onKeyDown={inputSearchOnKeyDownHandler}
                         value={input.partNumber}
                         onChange={inputSearchOnChangeHandler}
                         placeholder={"Парт. №"}
                         withButton={true}
                         buttonImage={searchImage}
                         buttonOnClick={searchProducts}
                    />

                    {isFirstSearch ? null : loading ? (
                         <p className={textStyles.silentText}>{"Загрузка..."}</p>
                    ) : products.length > 0 ? (
                         <Results
                              deleteButtonOnClickHandler={deleteButtonOnClickHandler}
                              selectButtonOnClickHandler={selectButtonOnClickHandler}
                              searchResults={products}
                         />
                    ) : (
                         <p className={textStyles.silentText}>{"По вашему запросу ничего не найдено"}</p>
                    )}
               </div>
               <EditForm
                    {...{
                         inputFormOnChangeHandler,
                         closeButtonOnClickHandler,
                         editButtonOnClickHandler,
                         form,
                         loadingEdit,
                         selectedProduct,
                    }}
               />
          </>
     );
};

export default AdminSearch;
