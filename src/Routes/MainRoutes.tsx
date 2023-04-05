import { useRoutes } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ContactUs from "../Pages/ContactUs";
import Locals from "../Pages/Locals";
import RequestPage from "../Pages/RequestPage";
import BMWX6 from "../Pages/X6";
import BMWX1 from "../Pages/X1";
import BMWX4 from "../Pages/x4";

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/Login', element: <Login/>},
        {path: '/Contato', element: <ContactUs/>},
        {path: '/Concessionária', element: <Locals/>},
        {path: '/Proposta', element: <RequestPage/>},
        {path: '/BMWE 71', element: <BMWX6/>},
        {path: '/BMWE 84', element: <BMWX1/>},
        {path: '/BMWG 02', element: <BMWX4/>},
    ])
}