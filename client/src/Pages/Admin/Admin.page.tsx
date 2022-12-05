import useAuthApi from "../../api/admin/useAuth.api";
import AdminSearch from "../../components/AdminSearch/AdminSearch";
import Button from "../../components/UI/Buttons/Button/Button";
import { useAuth } from "../../hooks/auth.hook";
import globalStyles from "../../styles/global.module.css";
import styles from "./Admin.module.css";
import LoginForm from "./components/LoginForm/LoginForm";

const AdminPage = () => {
     const { isAuthenticated } = useAuth();
     const { logout } = useAuthApi();

     const logoutButtonOnClickHandler = async () => {
          await logout();
          window.location.reload();
     };

     return (
          <div className={`${styles.Admin} ${globalStyles.pageContainer}`}>
               {isAuthenticated ? (
                    <>
                         <div className={styles.controls}>
                              <Button onClick={logoutButtonOnClickHandler}>{"Выйти"}</Button>
                         </div>

                         <AdminSearch />
                    </>
               ) : (
                    <LoginForm />
               )}
          </div>
     );
};

export default AdminPage;
