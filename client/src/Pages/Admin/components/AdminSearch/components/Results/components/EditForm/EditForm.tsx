import Button from "../../../../../../../../components/UI/Buttons/Button/Button";
import Input from "../../../../../../../../components/UI/Inputs/Input/Input";
import { EditProductRequest } from "../../../../../../../../shared/types/editProduct";
import styles from "./EditForm.module.css";

type EditFormProps = {
     selectedProduct: EditProductRequest | null;
     form: EditProductRequest;
     inputFormOnChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
     closeButtonOnClickHandler: () => void;
     editButtonOnClickHandler: () => Promise<void>;
     loadingEdit: boolean;
};

const EditForm = (props: EditFormProps) => {
     return (
          <div className={styles.EditForm}>
               <h3 className={styles.heading}>{`${props.selectedProduct ? `Редактирование` : `Создание`} товара`}</h3>

               <form className={styles.form}>
                    <Input
                         label={"Парт. №"}
                         placeholder={"Парт. №"}
                         className={styles.input}
                         value={props.form.partNumber}
                         name={"partNumber"}
                         onChange={props.inputFormOnChangeHandler}
                    />
                    <Input
                         label={"Бренд"}
                         placeholder={"Бренд"}
                         className={styles.input}
                         value={props.form.manufacturer}
                         name={"manufacturer"}
                         onChange={props.inputFormOnChangeHandler}
                    />
                    <Input
                         label={"Описание"}
                         placeholder={"Описание"}
                         className={styles.input}
                         value={props.form.description}
                         name={"description"}
                         onChange={props.inputFormOnChangeHandler}
                    />
                    <Input
                         label={"Дата доставки"}
                         placeholder={"Дата доставки"}
                         className={styles.input}
                         value={props.form.deliveryDate}
                         name={"deliveryDate"}
                         onChange={props.inputFormOnChangeHandler}
                    />
                    <Input
                         label={"Цена"}
                         placeholder={"Цена"}
                         className={styles.input}
                         value={props.form.price || ""}
                         type={"text"}
                         name={"price"}
                         onChange={props.inputFormOnChangeHandler}
                    />
               </form>
               <div className={styles.actions}>
                    <Button
                         onClick={props.editButtonOnClickHandler}
                         className={styles.action}
                         disabled={props.loadingEdit}
                    >
                         {"Сохранить"}
                    </Button>
                    <Button onClick={props.closeButtonOnClickHandler} className={styles.action}>
                         {"Отмена"}
                    </Button>
               </div>
          </div>
     );
};

export default EditForm;
