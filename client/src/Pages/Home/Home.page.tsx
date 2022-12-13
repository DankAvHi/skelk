import expandMoreImage from "../../assets/expandMore.svg";
import qrImage from "../../assets/QR_code.png";
import { ImageTextSection } from "../../components/UI/Sections/ImageTextSection/ImageTextSection";
import globalStyles from "../../styles/global.module.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import styles from "./Home.module.css";
import Footer from "./sections/Footer/Footer";
import OurBenefits from "./sections/OurBenefits/OurBenefits";
import WorkingScheme from "./sections/WorkingScheme/WorkingScheme";

const HomePage = () => {
     return (
          <>
               <div className={`${styles.Home} ${globalStyles.pageContainer}`}>
                    <Header />
                    <main className={styles.main}>
                         <Search />
                         <img src={expandMoreImage} alt="Ещё контент" />
                         <ImageTextSection
                              image={qrImage}
                              heading={"О нас"}
                              paragraph={[
                                   "Наша Компания - поставщик импортных электронных компонентов, микроэлектроники и оборудования. Возим товар напрямую из крупных складов Европы и Китая.",
                                   "Связаться с нами по любым вопросам вы можете по нашей почте или перейдя по QR коду рядом.",
                              ]}
                         />
                         <OurBenefits />
                         <WorkingScheme />
                    </main>
               </div>
               <Footer />
          </>
     );
};

export default HomePage;
