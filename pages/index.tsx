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
              could take farmers and gardeners hours to complete! <br />
              These tasks include:{" "}
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
              Irrigation{" "}
            </h2>
            <h2
              className={styles.image}
              style={{
                marginTop: "-70px",
              }}
            >
              {/* Make img smaller*/}
              <img
                src="watering.jpg"
                alt="Plant being watered"
                width="300px"
                height="300px"
              />
            </h2>
          </div>
          <div>
            <h2
              style={{
                display: "flex",
                alignItems: "left",
                marginLeft: "500px",
                marginTop: "-400px",
                height: "15vh",
              }}
            >
              {" "}
              Disease Detection{" "}
            </h2>
            <h2
              className={styles.image}
              style={{
                marginLeft: "445px",
                marginTop: "-70px",
              }}
            >
              {/* Make img smaller*/}
              <img
                src="ann.png"
                alt="Neural Network"
                width="320px"
                height="320px"
              />
            </h2>
            <div>
              <h2
                style={{
                  display: "flex",
                  alignItems: "left",
                  marginLeft: "900px",
                  marginTop: "-425px",
                  height: "15vh",
                }}
              >
                {" "}
                Soil Moisture Detection{" "}
              </h2>
              <h2
                className={styles.image}
                style={{
                  marginTop: "-70px",
                  marginLeft: "875px",
                }}
              >
                {/* Make img smaller*/}
                <img
                  src="soil.jpg"
                  alt="Soil Moisture"
                  width="300px"
                  height="300px"
                />
              </h2>
              <div>
                <h2
                  style={{
                    display: "flex",
                    alignItems: "left",
                    marginLeft: "1350px",
                    marginTop: "-403px",
                    height: "15vh",
                  }}
                >
                  {" "}
                  Food Dispension{" "}
                </h2>
                <h2
                  className={styles.image}
                  style={{
                    marginTop: "-70px",
                    marginLeft: "1300px",
                  }}
                >
                  {/* Make img smaller*/}
                  <img
                    src="food.jpg"
                    alt="Plant Food"
                    width="300px"
                    height="300px"
                  />
                </h2>
              </div>
            </div>
          </div>
        </>
      </>
      <div
        className={styles.footer}
        style={{ marginTop: "-10px", fontWeight: "bold" }}
      >
        <a href="https://www.vedhkannan.com" target="_blank">
          {" "}
          About me...{" "}
        </a>
      </div>
    </>
  );
}
{
  (" ");
}
