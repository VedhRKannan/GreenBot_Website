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
      <div>
        <h2
          style={{
            display: "flex",
            alignItems: "left",
            marginLeft: "180px",
            marginTop: "100px",
            height: "15vh",
          }}
        >
          {" "}
          Schematic{" "}
        </h2>
        <h2
          className={styles.image}
          style={{
            marginTop: "-70px",
          }}
        >
          {/* Make img smaller*/}
          <img
            src="greenbot_schematic.png"
            alt="Schematic of GreenBot"
            width="500px"
            height="300px"
          />
        </h2>
      </div>
      <div
        className={styles.card}
        style={{
          marginTop: "-300px",
        }}
      >
        <h2> The Hardware behind Greenbot consists of:</h2>
        <ol>
          <li> Arduino Uno </li>
          <li> Raspberry Pi 4b </li>
          <li> Camera Module </li>
          <li> 2x 12V DC Motor </li>
        </ol>
      </div>
      <div>
        <h2
          style={{
            display: "flex",
            alignItems: "left",
            marginLeft: "1350px",
            marginTop: "-325px",
            height: "15vh",
          }}
        >
          {" "}
          Relay Module{" "}
        </h2>
        <h2
          className={styles.image}
          style={{
            marginTop: "-85px",
            marginLeft: "1300px",
          }}
        >
          {/* Make img smaller*/}
          <img
            src="relay-module.png"
            alt="Diagram of Relay Module"
            width="300px"
            height="300px"
          />
        </h2>
      </div>
      <div
        className={styles.footer}
        style={{ marginTop: "80px", fontWeight: "bold" }}
      >
        <a href="https://www.vedhkannan.com"> About me... </a>
      </div>
    </>
  );
}
