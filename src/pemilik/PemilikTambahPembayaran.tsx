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
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

import ImageAdd from "../image/bx_image-add.png";
import "./PemilikTambahPembayaran.css";
const PemilikTambahPembayaran: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="navbar-tambah-pembayaran-pemilik" color="medium">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Riwayat Pembayaran</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonTitle>Pilih Nama Pengontrak</IonTitle>
              <IonList className="dropdown-tambah-pembayaran-pemilik">
                <IonItem>
                  <IonSelect
                    interface="popover"
                    placeholder="Pilih Nama Pengontrak"
                  >
                    <IonSelectOption value="made">made</IonSelectOption>
                    <IonSelectOption value="radit">radit</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonTitle className="ion-text-start">Tanggal Bayar</IonTitle>
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
              <div className="image-add-tambah-pembayaran-pemilik">
                <img src={ImageAdd} />
              </div>

              <div className="btn-kamera-gallery-tambah-pembayaran-pemilik">
                <IonButton color="medium">Kamera</IonButton>
                <IonButton color="favorite">Gallery</IonButton>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center ion-margin-top">
              <IonButton
                color="favorite"
                routerLink="/pemilik/pembayaran-berhasil"
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

export default PemilikTambahPembayaran;
