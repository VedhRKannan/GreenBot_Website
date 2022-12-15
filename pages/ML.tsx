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
        <div className={styles.code}>
          <CopyBlock
            text="const int watertime = 25;
            const int Motor = 7;
            #define BUTTON_PIN 2
            int buttonState = 0;
            
            void setup() {
            pinMode(Motor, OUTPUT); //Declaring the motor pin as an Output
            pinMode(BUTTON_PIN, HIGH); // Ensuring that power is always flowing to the button
            
            
            }
            
            void loop() {
            buttonState = digitalRead(BUTTON_PIN); //Functions 
            
              digitalWrite(Motor, HIGH); //nts motor off
              delay(1000);
              digitalWrite(Motor, LOW); //nts motor on
              delay(10000); 
            
              if (buttonState == HIGH and Motor == HIGH ) { // Boolean operatives
                digitalWrite(Motor, LOW); // If the above statement is True then cut power to the Motor
              }
              else if (buttonState == HIGH and Motor == LOW) { //If the above statement is False and this is True then supply Power to the Motor
                digitalWrite(Motor, HIGH); 
              }
              delay(10,000);  // This is how long the override switch will last for
            }"
            language="python"
            showLineNumbers="true"
            wrapLines
            theme={dracula}
          />
        </div>
      </div>
    </>
  </>
);

export default ML;
