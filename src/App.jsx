import { Carousel } from "@material-tailwind/react";
import React from "react";
import Header from "./components/Header";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/Home";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Mainlayout />}>
        <Route index  element={<Home />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
