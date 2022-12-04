import { createContext } from "react";
import { TopPopupArray } from "./TopPopup.d";

type TopPopupContextType = {
     appTopPopupMesages: TopPopupArray;
     setAppTopPopupMesages: React.Dispatch<React.SetStateAction<TopPopupArray>>;
};

const initialContext: TopPopupContextType = {
     appTopPopupMesages: [],
     setAppTopPopupMesages: () => {},
};

const TopPopupContext = createContext<TopPopupContextType>(initialContext);

export default TopPopupContext;
