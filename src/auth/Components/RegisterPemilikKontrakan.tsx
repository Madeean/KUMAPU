import {
  IonButton,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  useIonAlert,
  useIonLoading,
} from "@ionic/react";
import axios from "axios";
import localforage from "localforage";
import React, { useRef } from "react";
import { useHistory } from "react-router";
import { url } from "../../App";

const RegisterPemilikKontrakan: React.FC = () => {
  const [present, dismiss] = useIonLoading();
  const [presentAlert] = useIonAlert();
  const history = useHistory();
  const namaRef = useRef<HTMLIonInputElement>(null);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const namaKontrakanRef = useRef<HTMLIonInputElement>(null);
  const ruanganRef = useRef<HTMLIonInputElement>(null);

  let registerUrl = url + "register";

  const registerHandler = () => {
    present({ message: "Loading...", spinner: "circles" });

    var bodyformm = new FormData();
    bodyformm.append("name", namaRef.current!.value!.toString());
    bodyformm.append("email", emailRef.current!.value!.toString());
    bodyformm.append("password", passwordRef.current!.value!.toString());
    bodyformm.append(
      "nama_kontrakan",
      namaKontrakanRef.current!.value!.toString()
    );
    bodyformm.append("rooms", ruanganRef.current!.value!.toString());
    bodyformm.append("role", "pemilik");

    axios
      .post(registerUrl, bodyformm)
      .then((response) => {
        localforage.setItem("email", response.data.user.email);
        localforage.setItem("token", response.data.token);
        localforage.setItem("name", response.data.user.name);
        localforage.setItem("foto_muka", response.data.user.foto_muka);
        localforage.setItem("umur", response.data.user.umur);
        localforage.setItem(
          "nama_kontrakan",
          response.data.user.nama_kontrakan
        );
        localforage.setItem("rooms", response.data.user.rooms);

        dismiss();

        history.push("/pemilik");
      })
      .catch((error) => {
        console.log(error);
        dismiss();
        presentAlert({
          header: "register gagal, silahkan pakai data lain",
          buttons: ["OK"],
        });
      });
  };

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Nama</IonLabel>
            <IonInput ref={namaRef} />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" ref={emailRef} />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Nama kontrakan</IonLabel>
            <IonInput ref={namaKontrakanRef} />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">
              Berapa ruangan yang dipunya?
            </IonLabel>
            <IonInput type="number" ref={ruanganRef} />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" ref={passwordRef} />
          </IonItem>

          <IonButton onClick={registerHandler} className="ion-margin-top">
            Register
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
export default RegisterPemilikKontrakan;
