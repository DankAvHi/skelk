import { createContext } from "react";
import { TopPopupArray } from "../components/TopPopup/TopPopup.d";

type AppContextType = {
     appTopPopupMesages: TopPopupArray;
     setAppTopPopupMesages: React.Dispatch<React.SetStateAction<TopPopupArray>>;
};

const initialState: AppContextType = {
     appTopPopupMesages: [],
     setAppTopPopupMesages: () => {
          return null;
     },
};
const AppContext = createContext(initialState);
export default AppContext;
