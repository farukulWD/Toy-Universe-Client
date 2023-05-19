import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/MainLayout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import {AllToy} from "../Pages/AllToy/AllToy";
import PrivetRoute from "./PrivetRoute";
import MyToy from "../Pages/MyToy/MyToy";
import AddToy from "../Pages/AddToy/AddToy";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allToy",
        element: <AllToy></AllToy>,
      },
      {
        path:"/myToy",
        element:<PrivetRoute><MyToy></MyToy></PrivetRoute>
      },
      {
        path:"/addToy",
        element:<PrivetRoute><AddToy></AddToy></PrivetRoute>
      },
      {
        path:"/toyDetails/:id",
        element:<PrivetRoute><ToyDetails></ToyDetails></PrivetRoute>,
        loader:({params})=> fetch(`http://localhost:5000/singleToy/${params.id}`)
      }
    ],
  },
]);

export default router;
