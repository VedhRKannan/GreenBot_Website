import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
//This is the Home page

export default function Home() {
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
                          color: "#50C878",
                          fontSize: "50px",
                          borderBottom: "5px solid #50C878",
                          height: "8vh",
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
                  height: "25vh",
                }}
              ></div>
            </>
          </>
          <div>
            <h4 className={styles.description} style={{ marginTop: "-200px" }}>
              {" "}
              GreenBot is a plantcare device capable of automating tasks that
              could take farmers and gardeners hours to complete! These tasks
              include:{" "}
            </h4>
          </div>
          <div>
            <h2
              style={{
                display: "flex",
                alignItems: "left",
                marginLeft: "100px",
                marginTop: "100px",
                height: "15vh",
              }}
            >
              {" "}
              Watering{" "}
            </h2>
            <h2 className={styles.image} style={{ marginTop: "-30px" }}>
              <img src="/watering.png" alt="Plant being watered" />
            </h2>
          </div>
        </>
      </>
      <div className={styles.footer} style={{ marginTop: "-30px" }}>
        <a href="https://www.vedhkannan.com"> About me... </a>
      </div>
    </>
  );
}
{
  (" ");
}
