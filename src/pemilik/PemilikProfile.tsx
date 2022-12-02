import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import ProfilePage from "../image/ProfilePage.png";
import { pencil } from "ionicons/icons";

import "./PemilikProfile.css";
import localforage from "localforage";

import { url } from "../App";
import axios from "axios";
import { useHistory } from "react-router";

const PemilikProfile: React.FC = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [fotoMuka, setfotoMuka] = useState<string>();
  const [token, setToken] = useState<string>();

  const history = useHistory();

  const getData = async () => {
    const name = await localforage.getItem("name");
    const email = await localforage.getItem("email");
    const token = await localforage.getItem("token");

    Promise.all([name, email, token]).then((values) => {
      setName(values[0]?.toString());
      setEmail(values[1]?.toString());
      setToken(values[2]?.toString());
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const UrlLogout = url + "logout";

  const logout = () => {
    axios
      .post(
        UrlLogout,
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        localforage.clear();

        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonTitle className="ion-text-center profile-text-pemilik-profile">
            My Profile
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol size="2">
              <img src={ProfilePage} className="image-pemilik-profile" />
            </IonCol>
            <IonCol className="nama-pemilik-profile" size="8">
              <IonTitle>{name}</IonTitle>
              <IonTitle>{email}</IonTitle>
            </IonCol>
            <IonCol size="2">
              <IonButtons>
                <IonButton
                  routerLink="/pemilik/profile/edit"
                  className="btn-edit-pemilik-profile"
                >
                  <IonIcon src={pencil} className="ion-icon-pemilik-profile" />
                </IonButton>
              </IonButtons>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div className="btn-logout-pemilik-profile">
          <IonButton onClick={logout}>Logout</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PemilikProfile;
