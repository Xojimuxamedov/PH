import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./styles/main.scss";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Header />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
