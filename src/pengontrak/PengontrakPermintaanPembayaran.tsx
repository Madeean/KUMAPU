import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./PengontrakPermintaanPembayaran.css";

const PengontrakPermintaanPembayaran: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="favorite">
          <IonTitle className="ion-text-center title-permintaan-pembayaran-pengontrak">
            Permintaan Pembayaran
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-margin-top card-permintaan-pembayaran-pengontrak">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonTitle>Made Reihan</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>23-11-2022</IonTitle>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonTitle>Menunggu Konfirmasi</IonTitle>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PengontrakPermintaanPembayaran;
