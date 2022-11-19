import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./PemilikDaftarBelumBayarBulanan.css";

const PemilikDaftarBelumBayarBulanan: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonButtons slot="start">
            <IonBackButton color="dark" defaultHref="/pemilik/order" />
          </IonButtons>
          <IonTitle className="ion-text-center daftar-belum-bayar-bulanan-text-pemilik">
            Daftar Belum Lunas
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard color="secondary">
          <IonCardHeader>
            <IonCardTitle>Made Raihan</IonCardTitle>
            <IonCardSubtitle>Kampung dadap</IonCardSubtitle>

            <IonTitle className="ion-text-center">Bulan ke - 10</IonTitle>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PemilikDaftarBelumBayarBulanan;
