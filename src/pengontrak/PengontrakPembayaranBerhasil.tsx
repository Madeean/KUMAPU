import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import React from "react";
import checklist from "../image/cheklist.png";

const PengontrakPembayaranBerhasil: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="ion-text-center">
          <h1>Tambah Pembayaran Berhasil</h1>
          <img src={checklist} width="150" height="150" />
          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonButton routerLink="/pengontrak/tambah-pembayaran">
                  Ke halaman tambah pembayaran
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonText>Atau</IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonButton routerLink="/pengontrak/home">
                  Kembali ke halaman utama
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PengontrakPembayaranBerhasil;
