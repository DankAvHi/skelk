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

     const close = () => {
          props.setIsOpen(false);
     };

     if (props.isOpen)
          return (
               <div className={`${styles.Modal} ${props.classNameBackground}`} onClick={props.closeFunction || close}>
                    <div className={`${styles.border} ${props.classNameBorder}`} onClick={stopPropagation}>
                         <button
                              className={`${styles.closeButton} ${props.classNameButton}`}
                              onClick={props.closeFunction || close}
                         >
                              <img
                                   className={`${styles.closeImage} ${props.classNameCloseImage}`}
                                   src={closeImage}
                                   alt=""
                              />
                         </button>
                    </div>
                    <div
                         className={`${styles.childrenContainer} ${props.classNameChildrenContainer}`}
                         onClick={stopPropagation}
                    >
                         {props.children}
                    </div>
               </div>
          );

     return null;
};

export default Modal;
