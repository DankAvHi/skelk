import { useAuth } from "../../hooks/auth.hook";
import globalStyles from "../../styles/global.module.css";
import styles from "./Admin.module.css";
import LoginForm from "./components/LoginForm/LoginForm";

const AdminPage = () => {
     const { isAuthenticated } = useAuth();

     return (
          <div className={`${styles.Admin} ${globalStyles.pageContainer}`}>
               {isAuthenticated ? <div>auth</div> : <LoginForm />}
          </div>
     );
};

export default AdminPage;
