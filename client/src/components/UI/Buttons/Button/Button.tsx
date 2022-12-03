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
               props.external ? (
                    <a href={props.href} className={`${styles.Button} ${props.className}`}>
                         {props.children}
                    </a>
               ) : (
                    <Link to={props.href || "#"} className={`${styles.Button} ${props.className}`}>
                         {props.children}
                    </Link>
               );
          }
     }
     return (
          <button className={`${styles.Button} ${props.className}`} disabled={props.disabled}>
               {props.children}
          </button>
     );
};

export default Button;
