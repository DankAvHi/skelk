import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = (props: ButtonProps | AnchorProps) => {
     if (props.type === "link") {
          if (props.disabled) {
               return (
                    <button className={`${styles.Button} ${props.className}`} disabled={true}>
                         {props.children}
                    </button>
               );
          } else {
               return props.external ? (
                    <a href={props.href} className={`${styles.Button} ${props.className}`} onClick={props.onClick}>
                         {props.children}
                    </a>
               ) : (
                    <Link
                         to={props.href || "#"}
                         className={`${styles.Button} ${props.className}`}
                         onClick={props.onClick}
                    >
                         {props.children}
                    </Link>
               );
          }
     }

     return (
          <button className={`${styles.Button} ${props.className}`} disabled={props.disabled} onClick={props.onClick}>
               {props.children}
          </button>
     );
};

export default Button;
