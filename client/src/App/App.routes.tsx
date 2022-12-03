import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Home/Home.page";

const useAppRoutes = (isAuth: boolean) => {
     if (isAuth) {
     }
     return (
          <Routes>
               <Route path="/" element={<HomePage />} />

               <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
     );
};

export default useAppRoutes;
