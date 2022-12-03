import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "../Pages/Admin/Admin.page";
import HomePage from "../Pages/Home/Home.page";

const useAppRoutes = () => {
     return (
          <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/admin" element={<AdminPage />} />

               <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
     );
};

export default useAppRoutes;
