import React, { useState } from "react";
import useEditProductApi from "../../../../api/editProduct/useEditProduct.api";
import useTopPopup from "../../../../components/TopPopup/TopPopup.hook";
import Button from "../../../../components/UI/Buttons/Button/Button";
import textStyles from "../../../../styles/text.module.css";
import styles from "./TableFilePicker.module.css";

const TableFilePicker = () => {
     const { importProductsFromTableFile, loading } = useEditProductApi();
     const { showTopPopup } = useTopPopup();

     const [file, setFile] = useState<File | null>(null);

     const filePickerOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setFile(event.target.files?.length ? event.target.files[0] : null);
     };
     const submitButtonOnClickHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          if (!file) {
               return showTopPopup({ message: { text: "Загрузите файл", type: "info" } });
          }

          const formData = new FormData();
          formData.append("file", file);
          formData.append("fileName", file.name);

          const data = await importProductsFromTableFile(formData);
          if (data.succes) {
               setFile(null);
               showTopPopup({ message: { text: "Успешно загруженно", type: "succes" } });
          }
     };

     return (
          <>
               {!loading ? (
                    <form className={styles.TableFilePicker}>
                         <h2 className={styles.heading}>{"Загрузить файл с таблицей"}</h2>
                         <input
                              onChange={filePickerOnChangeHandler}
                              className={styles.file}
                              type="file"
                              name="file"
                              id="file"
                              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                         />
                         <Button onClick={submitButtonOnClickHandler} className={styles.submit}>
                              {"Отправить файл"}
                         </Button>
                    </form>
               ) : (
                    <h2 className={textStyles.silentText}>{"Загрузка"}</h2>
               )}
          </>
     );
};

export default TableFilePicker;
