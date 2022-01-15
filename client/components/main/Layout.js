import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />

      <body className="bg-gray-200 h-screen">
        <Navbar />

        <main className="container">{children}</main>

        <Footer />
      </body>
    </>
  );
};

export default Layout;
