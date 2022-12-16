import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Hardware() {
  return (
    <>
      <>
        <title>Hardware</title>
      </>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#50C878",
            fontSize: "50px",
            height: "8vh",
          }}
        >
          {" "}
          Hardware 🤖
        </h1>
      </div>
    </>
  );
}
