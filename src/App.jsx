import { Carousel } from "@material-tailwind/react";
import React, { useState } from "react";
import Header from "./components/Header";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { data } from "./data";
import Katalog from "./pages/Katalog";
import Liked from "./pages/Liked";
import Cart from "./pages/Cart";

const App = () => {
  const [database, setDatabase] = useState([...data]);
  const [filterProduct, setFilterProduct] = useState("");
  console.log(filterProduct);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Mainlayout filterProduct={filterProduct} setFilterProduct={setFilterProduct} />}>
        <Route index element={<Home data={database} filterProduct={filterProduct} setFilterProduct={setFilterProduct} />} />
        <Route path="/katalog" element={<Katalog  data={database} filterProduct={filterProduct} setFilterProduct={setFilterProduct} />} />
        <Route path="/product/:id" element={<Detail data={database} />} />
        <Route path="/liked" element={<Liked data={database} />} />
        <Route path="/korzinka" element={<Cart data={database} />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
