import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { listOutline } from "ionicons/icons";

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
      <IonContent>
        <IonItem lines="none">
          <IonLabel className="pembayaran-terbaru-pengontrak-home">
            Jumlah Orang:
          </IonLabel>
          <IonLabel>2/10</IonLabel>
          <IonIcon icon={listOutline} slot="end" />
        </IonItem>
        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <IonCardHeader>
            <IonCardTitle>Atanasius Raditya Herkristito</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <IonCardHeader>
            <IonCardTitle>Made Reihan Diva S</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <IonCardHeader>
            <IonCardTitle>Daniel Kurniawan</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <IonCardHeader>
            <IonCardTitle>Dwi Rianto</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <IonCardHeader>
            <IonCardTitle>Bryan Rezki</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default PemilikDaftarOrangNgontrak;
