import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

import "./PemilikDaftarOrangNgontrak.css";

const PemilikDaftarOrangNgontrak: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/pemilik/order" color="dark" />
          </IonButtons>
          <IonTitle className="ion-text-center daftar-orang-ngontrak-text-pemilik">
            Daftar Orang Ngontrak
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};
export default PemilikDaftarOrangNgontrak;
