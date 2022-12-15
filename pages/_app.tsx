import Navbar from "../components/Navbar";
import "../styles/globals.css";
import React from "react";
import "@code-hike/mdx/dist/index.css";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: any;
}) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
