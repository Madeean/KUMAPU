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
import React from "react";

import "./PemilikEditProfile.css";

const pemilikEditProfile: React.FC = () => {
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
          <IonInput />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Nama Kontrakan</IonLabel>
          <IonInput />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Ruangan yang dipunya</IonLabel>
          <IonInput type="number" />
        </IonItem>

        <div className="btn-edit-profile-pemilik">
          <IonButton>Edit Profile</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default pemilikEditProfile;
