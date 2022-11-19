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
import "./PemilikDaftarBelumLunas.css";

const PemilikDaftarBelumLunas: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonButtons slot="start">
            <IonBackButton color="dark" defaultHref="/pemilik/order" />
          </IonButtons>
          <IonTitle className="ion-text-center daftar-belum-lunas-text-pemilik">
            Daftar Belum Lunas
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard color="secondary">
          <IonCardHeader>
            <IonCardTitle>Made Raihan</IonCardTitle>
            <IonCardSubtitle>Kampung dadap</IonCardSubtitle>
            <IonTitle className="ion-text-end" color="danger">
              Belum Lunas
            </IonTitle>
            <IonTitle className="ion-text-center">
              Rp 100.000 / 200.000
            </IonTitle>
          </IonCardHeader>

          <IonCardContent className="ion-text-center">
            <IonButton routerLink="/pengontrak/detail-transaksi">
              Detail transaksi
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PemilikDaftarBelumLunas;
