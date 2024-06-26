import React from "react";
import TopHeader from "./components/containers/TopHeader/TopHeader";
import { Outlet } from "react-router-dom";
import Navbar from "./components/containers/Navbar/Navbar";
import Footer from "./components/containers/Footer/Footer";
import Header from "./components/containers/Header/Header";

function Layout() {
  return (
    <main>
      <TopHeader />
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
