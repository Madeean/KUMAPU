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
import React from "react";
import ProfilePage from "../image/ProfilePage.png";
import { pencil } from "ionicons/icons";

import "./PemilikProfile.css";

const PemilikProfile: React.FC = () => {
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
              <IonTitle>Made Reihan</IonTitle>
              <IonTitle>Made@gmail.com</IonTitle>
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
          <IonButton routerLink="/login">Logout</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PemilikProfile;
