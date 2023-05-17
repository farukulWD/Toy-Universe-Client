import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/MainLayout/Main";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>
    }
])

export default router;