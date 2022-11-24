import React, { useRef } from "react";
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
import { url } from "../App";
import axios, { Axios } from "axios";
import * as localforage from "localforage";
import { useHistory } from "react-router";

const Login: React.FC = () => {
  const history = useHistory();
  const emailRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  let urlLogin = url + "login";
  const login = async () => {
    let email = emailRef.current?.value;
    let password = passwordRef.current?.value;
    var bodyFormData = new FormData();
    bodyFormData.append("email", email?.toString()!);
    bodyFormData.append("password", password?.toString()!);
    console.log(email);
    axios
      .post(urlLogin, bodyFormData)
      .then((response) => {
        console.log(response.data);
        localforage.setItem("email", response.data.user.email);
        localforage.setItem("token", response.data.token);
        localforage.setItem("name", response.data.user.name);
        localforage.setItem("foto_muka", response.data.user.foto_muka);
        localforage.setItem("umur", response.data.user.umur);
        localforage.setItem(
          "nama_kontrakan",
          response.data.user.nama_kontrakan
        );
        if (response.data.user.role == "pengontrak") {
          history.push("/pengontrak");
        } else {
          history.push("/pemilik");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <IonPage>
      <IonContent>
        <IonCard className="ion-text-center card">
          <IonItem className="item">
            <IonImg src={logo} alt="centered" class="logo-image" />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput ref={emailRef} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" ref={passwordRef} />
          </IonItem>
          <IonItem>
            <IonButton onClick={login}>Login</IonButton>
          </IonItem>
          <IonItemDivider />
          <IonText>Don't have an account?</IonText>
          <IonItem>
            <IonButton routerLink="/register">Register</IonButton>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Login;
