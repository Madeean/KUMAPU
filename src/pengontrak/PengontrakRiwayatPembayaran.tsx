import {
  IonPage,
  IonHeader,
  IonBackButton,
  IonButtons,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import { search } from "ionicons/icons";
import React from "react";
import "./PengontrakRiwayatPembayaran.css";

const PengontrakRiwayatPembayaran: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar
          className="navbar-riwayat-pembayaran-pengontrak"
          color="medium"
        >
          <IonButtons slot="start">
            <IonBackButton defaultHref="/pengontrak/home" />
          </IonButtons>
          <IonTitle>Riwayat Pembayaran</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="search-input-riwayat-pembayaran-pengontrak">
          <IonItem>
            <IonLabel>
              <IonIcon src={search} />
            </IonLabel>
            <IonInput placeholder="Cari riwayat pembayaran"></IonInput>
          </IonItem>
        </div>

        <div className="card-riwayat-pembayaran-pengontrak">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonTitle>Made Reihan</IonTitle>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonTitle>Kampung dadap</IonTitle>
              </IonCol>
              <IonCol className="ion-text-center">
                <IonButton>Detail transaksi</IonButton>
              </IonCol>
            </IonRow>
            <IonTitle className="ion-text-center">25-10-2022</IonTitle>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default PengontrakRiwayatPembayaran;
