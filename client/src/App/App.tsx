import { useState } from "react";
import TopPopup from "../components/TopPopup/TopPopup";
import { TopPopupArray } from "../components/TopPopup/TopPopup.d";
import AppContext from "./App.context";
import useAppRoutes from "./App.routes";
function App() {
     const routes = useAppRoutes();
     const [appTopPopupMesages, setAppTopPopupMesages] = useState<TopPopupArray>([]);

     return (
          <AppContext.Provider value={{ appTopPopupMesages, setAppTopPopupMesages }}>
               {appTopPopupMesages.length
                    ? appTopPopupMesages.map((message) => (
                           <TopPopup
                                key={Math.random()}
                                text={message.text}
                                type={message.type}
                                duration={message.duration}
                           />
                      ))
                    : null}
               {routes}
          </AppContext.Provider>
     );
}

export default App;
