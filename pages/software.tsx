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
        <pre className="line-numbers">
          <code
            className="language-python"
            style={{ marginLeft: "100px", marginTop: "" }}
          >
            print("Hello World")
          </code>
        </pre>
        <div className={styles.description}>
          <h4>
            {" "}
            GreenBot employs a State of the Art Machine Learning Model trained
            on the Plant Village Dataset to capture and stop diseases in the
            crop as early as possible.{" "}
          </h4>
        </div>
      </div>
    </>
  </>
);

export default Software;
