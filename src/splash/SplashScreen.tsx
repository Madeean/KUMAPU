import { IonContent, IonImg, IonPage } from "@ionic/react";
import React, { useEffect } from "react";
import logo from "../image/SplashScreen.png";

import "./SplashScreen.css";
import { useHistory } from "react-router";

const SplashScreen: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/login");
    }, 3000);
  }, []);

  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <div className="centered-element">
            <img src={logo} alt="centered" />
            <h1 className="text-gede ion-text-center">
              Welome to
              <br />
              KUMAPU
            </h1>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SplashScreen;
