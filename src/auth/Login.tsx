import React from "react";
import {
  IonCard,
  IonPage,
  IonText,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonItemDivider,
  IonImg,
} from "@ionic/react";
import logo from "../image/SplashScreen.png";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard className="ion-text-center card">
          <IonItem className="item">
            <IonImg src={logo} alt="centered" class="logo-image" />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonButton>Login</IonButton>
          </IonItem>
          <IonItemDivider />
          <IonText>Don't have an account?</IonText>
          <IonItem>
            <IonButton>Register</IonButton>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Login;
