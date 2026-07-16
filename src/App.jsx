import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Cursor from "./components/Cursor/Cursor.jsx";
import AppRouter from "./router/AppRouter.jsx";
import ProductCategory from "./pages/ProductCategory.jsx";

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

