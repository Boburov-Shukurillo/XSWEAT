import React, { useEffect, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import { Products } from "./data";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
const App = () => {
  const [PrductData, setProductData] = useState([...Products]);
  const [cart, setCart] = useState([]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <Mainlayout
            cart={cart}
            setCart={setCart}
            PrductData={PrductData}
            setProductData={setProductData}
          />
        }
      >
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              setCart={setCart}
              PrductData={PrductData}
              setProductData={setProductData}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              PrductData={PrductData}
              setProductData={setProductData}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <Detail
              cart={cart}
              setCart={setCart}
              PrductData={PrductData}
              setProductData={setProductData}
            />
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
