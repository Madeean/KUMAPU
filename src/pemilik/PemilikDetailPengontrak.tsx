import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItemDivider,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./PemilikDetailPengontrak.css";

import kucingtopi from "../image/kucingtopi.png";

const PemilikDetailPengontrak: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="navbar-detail-pengontrak-pemilik" color="medium">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle className="ion-text-center">Detail Pengontrak</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="ion-text-center card-gambar-detail-pengontrak">
          <img
            alt="detail Pegontrak"
            src={kucingtopi}
            width="500"
            height="250"
          />
        </IonCard>
        <div className="informasi-detail-transaksi-pengontrak">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonTitle>Nama Pengontrak</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>Made Reihan</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>Umur</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>20</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>

            <IonRow>
              <IonCol>
                <IonTitle>Alamat KTP</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>bsd</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>
                  alamat sekarang /
                  <br />
                  Nomor Kontrakan
                </IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>kampung ddp no.5</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>bayaran perbulan</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>Rp. 100.000</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>Tanggal bergabung</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>22-09-10</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default PemilikDetailPengontrak;
