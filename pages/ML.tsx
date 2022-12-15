import React from "react";
import styles from "../styles/Home.module.css";
import { CopyBlock, dracula } from "react-code-blocks";

const ML = () => (
  <>
    <title>ML</title>
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>✨Machine Learning✨</h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "15vh",
        }}
      >
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

export default ML;
