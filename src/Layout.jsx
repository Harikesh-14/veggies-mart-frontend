import React from "react";
import TopHeader from "./components/containers/TopHeader/TopHeader";
import { Outlet } from "react-router-dom";
import Navbar from "./components/containers/Navbar/Navbar";
import Footer from "./components/containers/Footer/Footer";

function Layout() {
  return (
    <main>
      <TopHeader />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
