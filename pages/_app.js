import "./style/global.css";

// @ts-nocheck
import Footer from "../components/footer";
import React from "react";
import { useConfig } from "nextra-theme-docs";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  // const { darkMode } = useConfig();
  // console.log("darkmode", darkMode);
  return (
    <div className=" ">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
