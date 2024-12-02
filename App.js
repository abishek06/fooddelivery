import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import Contact from "./src/components/contact.js";
import About from "./src/components/About.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu.js";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/restaurantmenu/:resId",
    element: <RestaurantMenu />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
