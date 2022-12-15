import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  // make a login page
  return (
    <>
      <>
        <>
          <>
            <>
              <>
                <>
                  <>
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
                          height: "15vh",
                        }}
                      >
                        {" "}
                        GreenBot 🪴
                      </h1>
                    </div>
                  </>
                </>
              </>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "15vh",
                }}
              ></div>
            </>
          </>
          <div className={styles.card}>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "15vh",
              }}
            >
              {" "}
              GreenBot is a plantcare machine capable of automating tasks that
              could take farmers and gardeners hours to complete!These tasks
              include:{" "}
            </p>
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "20vh",
              }}
            >
              <li>Watering plants</li>
              <li>Pruning plants</li>
            </ul>
          </div>
        </>
      </>
      <div className={styles.footer}>
        <a className={styles.card} href="https://www.vedhkannan.com">
          {" "}
          More about me...{" "}
        </a>
      </div>
    </>
  );
}
{
  (" ");
}
