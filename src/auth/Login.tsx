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
  useIonLoading,
  useIonAlert,
} from "@ionic/react";
import logo from "../image/SplashScreen.png";
import "./Login.css";
import { url } from "../App";
import axios, { Axios } from "axios";
import * as localforage from "localforage";
import { useHistory } from "react-router";

const Login: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const history = useHistory();
  const [present, dismiss] = useIonLoading();
  const emailRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  let urlLogin = url + "login";
  const login = async () => {
    present({ message: "Loading...", spinner: "circles" });
    let email = emailRef.current?.value;
    let password = passwordRef.current?.value;
    var bodyFormData = new FormData();
    bodyFormData.append("email", email?.toString()!);
    bodyFormData.append("password", password?.toString()!);
    axios
      .post(urlLogin, bodyFormData)
      .then(async (response) => {
        console.log(response.data);
        await localforage.setItem("email", response.data.user.email);
        await localforage.setItem("token", response.data.token);
        await localforage.setItem("name", response.data.user.name);
        await localforage.setItem("foto_muka", response.data.user.foto_muka);
        await localforage.setItem("umur", response.data.user.umur);
        await localforage.setItem("tokenFCM", response.data.user.tokenFCM);
        await localforage.setItem(
          "nama_kontrakan",
          response.data.user.nama_kontrakan
        );
        await localforage.setItem("rooms", response.data.user.rooms);
        dismiss();

        if (response.data.user.role == "pengontrak") {
          history.push("/pengontrak");
        } else {
          history.push("/pemilik");
        }
      })
      .catch((error) => {
        console.log(error);
        dismiss();
        presentAlert({
          header: "Email atau Password salah",
          buttons: ["OK"],
        });
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
