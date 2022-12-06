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
  useIonLoading,
} from "@ionic/react";
import axios from "axios";
import localforage from "localforage";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { url } from "../App";

import "./PengontrakEditProfile.css";

const PengontrakEditProfile: React.FC = () => {
  const [present, dismiss] = useIonLoading();

  const history = useHistory();
  const nameRef = useRef<HTMLIonInputElement>(null);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const umurRef = useRef<HTMLIonInputElement>(null);

  const [token, setToken] = useState<string>("");

  const getData = async () => {
    // await localforage.getItem("name").then((value: any) => {
    //   nameRef.current!.value = value.toString();
    // });
    // localforage.getItem("email").then((value: any) => {
    //   emailRef.current!.value = value.toString();
    // });
    // localforage.getItem("umur").then((value: any) => {
    //   umurRef.current!.value = value.toString();
    // });
    // localforage.getItem("token").then((value: any) => {
    //   setToken(value);
    // });
    const nameSP = await localforage.getItem("name");
    const emailSP = await localforage.getItem("email");
    const umurSP = await localforage.getItem("umur");
    const tokenSP = await localforage.getItem("token");

    Promise.all([nameSP, emailSP, umurSP, tokenSP]).then((values: any) => {
      nameRef.current!.value = values[0].toString();
      emailRef.current!.value = values[1].toString();
      umurRef.current!.value = values[2].toString();
      setToken(values[3].toString());
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const editProfileUrl = url + "edit-profile-pengontrak";

  const editProfileHandler = () => {
    present({ message: "Loading...", spinner: "circles" });
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
      .then(async (response) => {
        await localforage.removeItem("name");
        await localforage.removeItem("email");
        await localforage.removeItem("umur");

        await localforage.setItem("email", response.data.user.email);
        await localforage.setItem("name", response.data.user.name);
        await localforage.setItem("umur", response.data.user.umur);
        dismiss();
        history.push("/pengontrak/profile");
        window.location.reload();
      })
      .catch((response) => {
        console.log(response);
        dismiss();
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
