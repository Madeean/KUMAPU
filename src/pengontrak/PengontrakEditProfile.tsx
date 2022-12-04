import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import localforage from "localforage";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { url } from "../App";

import "./PengontrakEditProfile.css";

const PengontrakEditProfile: React.FC = () => {
  const history = useHistory();
  const nameRef = useRef<HTMLIonInputElement>(null);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const umurRef = useRef<HTMLIonInputElement>(null);

  const [token, setToken] = useState<string>("");

  const getData = () => {
    localforage.getItem("name").then((value: any) => {
      nameRef.current!.value = value.toString();
    });
    localforage.getItem("email").then((value: any) => {
      emailRef.current!.value = value.toString();
    });
    localforage.getItem("umur").then((value: any) => {
      umurRef.current!.value = value.toString();
    });
    localforage.getItem("token").then((value: any) => {
      setToken(value);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const editProfileUrl = url + "edit-profile-pengontrak";

  const editProfileHandler = () => {
    const name = nameRef.current!.value;
    const email = emailRef.current!.value;
    const umur = umurRef.current!.value;
    const bodyForm = new FormData();
    bodyForm.append("name", name?.toString()!);
    bodyForm.append("email", email?.toString()!);
    bodyForm.append("umur", umur?.toString()!);

    axios
      .post(editProfileUrl, bodyForm, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        localforage.setItem("email", response.data.user.email);
        localforage.setItem("token", response.data.token);
        localforage.setItem("name", response.data.user.name);
        localforage.setItem("foto_muka", response.data.user.foto_muka);
        localforage.setItem("umur", response.data.user.umur);
        history.push("/pengontrak/profile");
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color="medium">
          <IonButtons slot="start">
            <IonBackButton color="dark" defaultHref="/pengontrak/profile" />
          </IonButtons>
          <IonTitle className="ion-text-center profile-text-pengontrak-edit-profile">
            Edit Profile
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="background-pengontrak-edit-profile ion-padding">
        <IonItem>
          <IonLabel position="floating">Nama</IonLabel>
          <IonInput ref={nameRef} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type="email" ref={emailRef} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Umur</IonLabel>
          <IonInput type="number" ref={umurRef} />
        </IonItem>

        <div
          className="btn-edit-profile-pengontrak"
          onClick={editProfileHandler}
        >
          <IonButton>Edit Profile</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PengontrakEditProfile;
