import textStyles from "../../styles/text.module.css";
import Button from "../UI/Buttons/Button/Button";
import Input from "../UI/Inputs/Input/Input";
import { SearchMock } from "./Search.mock";
import styles from "./Search.module.css";
import searchImage from "/static/search.svg";

const Search = () => {
     return (
          <div className={styles.Search}>
               <p className={textStyles.silentText}>{"Введитие парт. номер нужной детали:"}</p>
               <Input placeholder={"Парт. №"} withButton={true} buttonImage={searchImage} />
               <section className={styles.searchResults}>
                    <div className={styles.searchTitle}>
                         <div className={styles.searchTitleProperty}>
                              <span className={styles.searchTitlePropertyText}>{"Парт. №"}</span>
                         </div>
                         <div className={styles.searchTitleProperty}>
                              <span className={styles.searchTitlePropertyText}>{"Бренд"}</span>
                         </div>
                         <div className={styles.searchTitleProperty}>
                              <span className={styles.searchTitlePropertyText}>{"Описание"}</span>
                         </div>
                         <div className={styles.searchTitleProperty}>
                              <span className={styles.searchTitlePropertyText}>{"Срок поставки"}</span>
                         </div>
                         <div className={styles.searchTitleProperty}>
                              <span className={styles.searchTitlePropertyText}>{"Цена"}</span>
                         </div>
                         <div className={styles.searchTitleProperty}>
                              <span className={styles.searchTitlePropertyText}>{"Операция"}</span>
                         </div>
                    </div>
                    {SearchMock.map((searchResult) => (
                         <div key={searchResult.id} className={styles.searchResult}>
                              <div className={styles.searchResultProperty}>
                                   <span className={styles.searchResultText}>{searchResult.partNumber}</span>
                              </div>
                              <div className={styles.searchResultProperty}>
                                   <span className={styles.searchResultText}>{searchResult.manufacturer}</span>
                              </div>
                              <div className={styles.searchResultProperty}>
                                   <span className={styles.searchResultText}>{searchResult.description}</span>
                              </div>
                              <div className={styles.searchResultProperty}>
                                   <span className={styles.searchResultText}>{searchResult.deliveryDate}</span>
                              </div>
                              <div className={styles.searchResultProperty}>
                                   <span className={styles.searchResultText}>{searchResult.price}р.</span>
                              </div>
                              <div className={styles.searchResultProperty}>
                                   <Button className={styles.SearchResultButton}>{"Купить"}</Button>
                              </div>
                         </div>
                    ))}
               </section>
          </div>
     );
};

export default Search;
