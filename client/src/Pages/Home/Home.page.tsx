import qrImage from "../../../public/static/QR_code.png";
import expandMoreImage from "../../assets/expandMore.svg";
import { ImageTextSection } from "../../components/UI/Sections/ImageTextSection/ImageTextSection";
import globalStyles from "../../styles/global.module.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import styles from "./Home.module.css";

const HomePage = () => {
     return (
          <div className={`${styles.Home} ${globalStyles.pageContainer}`}>
               <Header />
               <main className={styles.main}>
                    <Search />
                    <img src={expandMoreImage} alt="Ещё контент" />
                    <ImageTextSection
                         image={qrImage}
                         heading={"О нас"}
                         paragraph={
                              "Наша компания - Поставщик импортных электронных компонентов, микроэлектроники и оборудования для производственных предприятий России. Связаться с нами по любым вопросам вы можете по нашей почте, или перейдя по QR коду рядом, связатся с нами в чате Whatsapp"
                         }
                    />
               </main>
          </div>
     );
};

export default HomePage;
