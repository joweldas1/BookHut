import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Toaster } from 'react-hot-toast';
import {
  createBrowserRouter,
  NavLink,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import MainPage from "./Pages/MainPage/MainPage";
import ListedBooks from "./Pages/ListedBooks/ListedBooks";
import BookDetails from "./Component/BookDetails";
import ReadBooks from "./Component/ReadBooks";
import Wishlist from "./Component/Wihslist";
import ErrorComponent from "./Component/ErrorComponent";
import PageToRead from "./Pages/PageToRead/PageToRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement:<ErrorComponent></ErrorComponent>,

    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"book/:bookId",
        loader:()=>fetch("./book.json"),
        element:<BookDetails></BookDetails>,
      }
      ,
      {
        path:"/listedBooks",
        element:<ListedBooks></ListedBooks>,


        children:[
          {
            index:true,
            element:<ReadBooks></ReadBooks>,

          },
          {
            path:'wishlist',
            element:<Wishlist></Wishlist>,


          }
        ]
      },
      {
        path:"/pagesToRead",
        element:<PageToRead></PageToRead>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>
);