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
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./PengontrakProfile.css";
import ProfilePage from "../image/ProfilePage.png";
import { pencil } from "ionicons/icons";
import localforage from "localforage";

import { url } from "../App";
import axios from "axios";
import { useHistory } from "react-router";

const PengontrakProfile: React.FC = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [foto_muka, setFoto_muka] = useState<string>();
  const [token, setToken] = useState<string>();

  const getData = () => {
    localforage.getItem("name").then((value: any) => {
      setName(value.toString());
    });
    localforage.getItem("email").then((value: any) => {
      setEmail(value.toString());
    });
    localforage.getItem("foto_muka").then((value: any) => {
      setFoto_muka(value.toString());
    });
    localforage.getItem("token").then((value: any) => {
      setToken(value.toString());
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const logoutUrl = url + "logout";
  const history = useHistory();
  const logoutHandler = () => {
    axios
      .post(logoutUrl, {}, { headers: { Authorization: "Bearer " + token } })
      .then((response) => {
        localforage.clear();
        history.push("/login");
      })
      .catch((response) => {});
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonTitle className="ion-text-center profile-text-pengontrak-profile">
            My Profile
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol size="2">
              <img src={foto_muka} className="image-pengontrak-profile" />
            </IonCol>
            <IonCol className="nama-pengontrak-profile" size="8">
              <IonTitle>{name}</IonTitle>
              <IonTitle>{email}</IonTitle>
            </IonCol>
            <IonCol size="2">
              <IonButtons>
                <IonButton
                  className="btn-edit-pengontrak-profile"
                  routerLink="/pengontrak/profile/edit"
                >
                  <IonIcon
                    src={pencil}
                    className="ion-icon-pengontrak-profile"
                  />
                </IonButton>
              </IonButtons>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div className="btn-logout-pengontrak-profile">
          <IonButton onClick={logoutHandler}>Logout</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default PengontrakProfile;
