import React from "react";
import styles from "../styles/Home.module.css";

const Software = () => (
  <>
    <title>Software</title>
    <>
      <div className={styles.container}>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#50C878",
            fontSize: "50px",
            height: "8vh",
            marginBottom: "1px",
          }}
        >
          Software
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "15vh",
        }}
      >
        <h4 className={styles.description}>
          {" "}
          GreenBot employs a State of the Art Machine Learning Model along with
          high quality firmware to ensure nothing but the best in terms of
          functionality and speed.{" "}
        </h4>
      </div>
      <div
        className={styles.card}
        style={{ marginLeft: "60px", marginTop: "-10px" }}
      >
        <h4
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          Here we setup all the variables{" "}
        </h4>
        <img src="/var.png" alt="Variables" width={250} height={200} />
      </div>
      <div
        className={styles.card}
        style={{ marginLeft: "630px", marginTop: "-315px" }}
      >
        <h4
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          Here we setup inputs and outputs{" "}
        </h4>
        <img src="/setup.png" alt="void setup()" width={250} height={200} />
      </div>
      <div
        className={styles.card}
        style={{ marginLeft: "1200px", marginTop: "-330px" }}
      >
        <h4
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          Here we loop!{" "}
        </h4>
        <img src="/void_loop.png" alt="void loop()" width={240} height={225} />
      </div>

      <div
        className={styles.footer}
        style={{ marginTop: "80px", fontWeight: "bold" }}
      >
        <a href="https://www.vedhkannan.com" target="_blank">
          {" "}
          About me...{" "}
        </a>
      </div>
    </>
  </>
);

export default Software;
