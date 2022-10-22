import { createBrowserRouter } from "react-router-dom"; 
import App from "./pages/App";
import Pra1 from "./pages/practeice1";

export const route = createBrowserRouter ([
    {
        path:"/",
        element:<App />,
    },
    {
        path:"/Pra1",
        element:<Pra1 />,
    },
]);