import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add, refresh } from "ionicons/icons";
import React from "react";
import { useHistory } from "react-router";
import tambahBayar from "../pengontrak/PengontrakPermintaanPembayaran";
import "./PengontrakHome.css";

const PengontrakHome: React.FC = () => {
  const history = useHistory();
  const pindahRiwayatPembayaran = () => {
    history.push("/pengontrak/riwayat-pembayaran");
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar color="favorite">
            <IonTitle className="title-pengontrak-home">
              <IonText>Good Morning,</IonText>
              <h5>Made Reihan</h5>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonText className="pembayaran-terbaru-pengontrak-home">
                  Pembayaran Terbaru
                </IonText>
              </IonCol>
              <IonCol>
                <div></div>
              </IonCol>
              <IonCol>
                <div className="btn-riwayat-pengontrak-home">
                  <IonButtons onClick={pindahRiwayatPembayaran} slot="center">
                    <IonIcon src={refresh} />
                    <IonTitle>Riwayat</IonTitle>
                  </IonButtons>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>

          {/* <IonCard id="card">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonText>Made Reihan</IonText>
                </IonCol>
              </IonRow>
              <h5>Kampung dadap No.5</h5>
            </IonGrid>
          </IonCard> */}
          <div className="card-pengontrak-home">
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
                  <IonButton routerLink="/pengontrak/detail-transaksi">
                    Detail transaksi
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonTitle className="ion-text-center">25-10-2022</IonTitle>
            </IonGrid>
          </div>

          <div className="ion-margin-top">
            <IonGrid>
              <IonRow className="ion-align-items-center">
                <IonCol className="ion-text-center">
                  <IonButton
                    className="btn-tambah-pembayaran-pengontrak-home"
                    routerLink="/pengontrak/tambah-pembayaran"
                  >
                    <IonIcon src={add} />
                    <IonTitle>Tambah Pembayaran</IonTitle>
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>

          {/* <div className="icon-tambah-pembayaran-pengontrak-home">
            <IonButtons slot="center">
              <IonButtons slot="center">
                <IonIcon src={add} />
                <IonTitle>Tambah Pembayaran</IonTitle>
              </IonButtons>
            </IonButtons>
          </div> */}
        </IonContent>
      </IonPage>
    </>
  );
};

export default PengontrakHome;
