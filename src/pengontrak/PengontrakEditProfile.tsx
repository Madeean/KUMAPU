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

import "./PengontrakEditProfile.css";

const PengontrakEditProfile: React.FC = () => {
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
          <IonInput />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type="email" />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Umur</IonLabel>
          <IonInput type="number" />
        </IonItem>

        <div className="btn-edit-profile-pengontrak">
          <IonButton>Edit Profile</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PengontrakEditProfile;
