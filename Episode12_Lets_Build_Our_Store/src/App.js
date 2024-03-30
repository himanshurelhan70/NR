import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from 'react'

// ! /////////
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error"
const Grocery = lazy(() => import('./components/Grocery'))
import UserContext from "./utils/UserContext";

// ! //////////////
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {

  // call some authentication api and get user info
  // and finally use this userinfo in the provider


  // const [userName, setUserName] = useState("Jaadu");

  return (

    <Provider store={appStore} >
      {/* <UserContext.Provider value={{ loggedInUser: userName, setUserName }}> */}
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      {/* </UserContext.Provider> */}
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <Grocery />
        </Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />
  }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
