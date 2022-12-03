"use client";

import React, { useState } from "react";
import Button from "../../Buttons/Button/Button";
import styles from "./Input.module.css";

const Input = (props: InputProps | InputWithButtonProps) => {
     const [input, setInput] = useState("");

     const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setInput(event.target.value);
     };

     if (props.withButton === true) {
          return (
               <div className={`${styles.InputContainer} ${props.containerClassName}`}>
                    <input
                         className={`${styles.Input} ${styles.Input_withButton} ${props.className}`}
                         placeholder={props.placeholder}
                         type={props.type}
                         name={props.name}
                         id={props.id}
                         value={props.value || input}
                         onChange={props.onChange || inputOnChangeHandler}
                    />
                    <Button className={`${styles.button} ${props.buttonClassName}`} onClick={props.buttonOnClick}>
                         {props.buttonText} {props.buttonImage && <img src={props.buttonImage} alt="" />}
                    </Button>
               </div>
          );
     }
     return (
          <input
               className={`${styles.Input} ${props.className}`}
               placeholder={props.placeholder}
               type={props.type}
               name={props.name}
               id={props.id}
               value={props.value || input}
               onChange={props.onChange || inputOnChangeHandler}
               onKeyDown={props.onKeyDown}
          />
     );
};

export default Input;
