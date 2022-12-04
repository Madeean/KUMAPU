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
import localforage from "localforage";
import React, { useEffect, useRef, useState } from "react";

import "./PemilikEditProfile.css";

import { url } from "../App";
import axios from "axios";
import { useHistory } from "react-router";

const PemilikEditProfile: React.FC = () => {
  const history = useHistory();
  const NameRef = useRef<HTMLIonInputElement>(null);
  const NamaKontrakanRef = useRef<HTMLIonInputElement>(null);
  const RoomsRef = useRef<HTMLIonInputElement>(null);
  const [token, setToken] = useState<string>();

  const GetData = async () => {
    const name = await localforage.getItem("name");
    const namaKontrakan = await localforage.getItem("nama_kontrakan");
    const rooms = await localforage.getItem("rooms");
    const token = await localforage.getItem("token");

    Promise.all([name, namaKontrakan, rooms, token]).then((values) => {
      NameRef.current!.value = values[0]?.toString();
      NamaKontrakanRef.current!.value = values[1]?.toString();
      RoomsRef.current!.value = values[2]?.toString();
      setToken(values[3]?.toString());
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  const UrlEditProfile = url + "edit-profile";

  const editProfile = () => {
    var bodyFormData = new FormData();
    bodyFormData.append("name", NameRef.current!.value?.toString()!);
    bodyFormData.append(
      "nama_kontrakan",
      NamaKontrakanRef.current!.value?.toString()!
    );
    bodyFormData.append("rooms", RoomsRef.current!.value?.toString()!);

    axios
      .post(UrlEditProfile, bodyFormData, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response) {
        localforage.setItem("name", NameRef.current!.value?.toString()!);
        localforage.setItem(
          "nama_kontrakan",
          NamaKontrakanRef.current!.value?.toString()!
        );
        localforage.setItem("rooms", RoomsRef.current!.value?.toString()!);
        history.push("/pemilik/profile");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color="medium">
          <IonButtons slot="start">
            <IonBackButton color="dark" defaultHref="/pemilik/profile" />
          </IonButtons>
          <IonTitle className="ion-text-center profile-text-pemilik-edit-profile">
            Edit Profile
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="background-pemilik-edit-profile ion-padding">
        <IonItem>
          <IonLabel position="floating">Nama</IonLabel>
          <IonInput ref={NameRef} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Nama Kontrakan</IonLabel>
          <IonInput ref={NamaKontrakanRef} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Ruangan yang dipunya</IonLabel>
          <IonInput type="number" ref={RoomsRef} />
        </IonItem>

        <div className="btn-edit-profile-pemilik">
          <IonButton onClick={editProfile}>Edit Profile</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PemilikEditProfile;
