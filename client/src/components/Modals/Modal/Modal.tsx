import React, { useEffect } from "react";
import useScrollLock from "../../../hooks/scrollLock";
import { ModalProps } from "../Modal";
import closeImage from "./assets/close.svg";
import styles from "./Modal.module.css";

const Modal = (props: ModalProps) => {
     const { lockScroll, unlockScroll } = useScrollLock();

     useEffect(() => {
          lockScroll();

          return () => unlockScroll();
     }, [lockScroll, unlockScroll]);

     const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
          event.stopPropagation();
     };

     return (
          <div className={styles.Modal} onClick={props.closeFunction}>
               <div className={styles.border} onClick={stopPropagation}>
                    <button className={styles.closeButton} onClick={props.closeFunction}>
                         <img className={styles.closeImage} src={closeImage} alt="" />
                    </button>
               </div>
               {props.children}
          </div>
     );
};

export default Modal;
