import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import globalStyles from "../../styles/global.module.css";
import styles from "./Home.module.css";

const HomePage = () => {
     return (
          <div className={`${styles.Home} ${globalStyles.pageContainer}`}>
               <Header />
               <main>
                    <Search />
               </main>
          </div>
     );
};

export default HomePage;
