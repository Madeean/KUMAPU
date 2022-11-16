import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./PengontrakTambahPembayaran.css";
import ImageAdd from "../image/bx_image-add.png";

const PengontrakTambahPembayaran: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar
          className="navbar-tambah-pembayaran-pengontrak"
          color="medium"
        >
          <IonButtons slot="start">
            <IonBackButton defaultHref="/pengontrak/home" />
          </IonButtons>
          <IonTitle>Riwayat Pembayaran</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonTitle>Tanggal Bayar</IonTitle>
              <IonButton>Pilih Tanggal</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonItem>
                <IonLabel position="floating">Jumlah Bayar</IonLabel>
                <IonInput />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center ion-margin-top">
              <IonTitle>Bukti Bayar</IonTitle>
              <div className="image-add-tambah-pembayaran-pengontrak">
                <img src={ImageAdd} />
              </div>

              <div className="btn-kamera-gallery-tambah-pembayaran-pengontrak">
                <IonButton color="medium">Kamera</IonButton>
                <IonButton color="favorite">Gallery</IonButton>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center ion-margin-top">
              <IonButton
                color="favorite"
                routerLink="/pengontrak/pembayaran-berhasil"
              >
                Tambah Pembayaran
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default PengontrakTambahPembayaran;
