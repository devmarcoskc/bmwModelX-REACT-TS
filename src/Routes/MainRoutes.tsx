import { useRoutes } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ContactUs from "../Pages/ContactUs";
import LocalStorage from "../Pages/LocalStorage";
import RequestPage from "../Pages/RequestPage";
import BMWX6 from "../Pages/X6";
import BMWX1 from "../Pages/X1";
import BMWX4 from "../Pages/x4";

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/Login', element: <Login/>},
        {path: '/Contato', element: <ContactUs/>},
        {path: '/Concessionária', element: <LocalStorage/>},
        {path: '/Proposta', element: <RequestPage/>},
        {path: '/BMWE71', element: <BMWX6/>},
        {path: '/BMWE84', element: <BMWX1/>},
        {path: '/BMWG02', element: <BMWX4/>},
    ])
}