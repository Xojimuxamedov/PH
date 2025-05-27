import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./styles/main.scss";
import Navbar from "./components/navbar/Navbar";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Navbar />}>

      </Route>
    </Routes>
  </BrowserRouter>
);
