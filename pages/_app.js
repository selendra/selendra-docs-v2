import "./style/global.css";

// @ts-nocheck
import Footer from "../components/footer";
import React from "react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div className=" ">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
