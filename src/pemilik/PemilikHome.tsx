import {
  IonButton,
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
  IonPage,
  IonRow,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { refresh, add } from "ionicons/icons";
import React from "react";
import { useHistory } from "react-router";
import "./PemilikHome.css";

const PemilikHome: React.FC = () => {
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
            <IonSearchbar animated={true} placeholder="Cari Orang Kontrakan" />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow></IonRow>
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
          <IonCard color="secondary">
            <IonCardHeader>
              <IonCardTitle>Made Raihan</IonCardTitle>
              <IonCardSubtitle>Kampung dadap</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent className="ion-text-center">
              <IonButton routerLink="/pemilik/detail-transaksi">
                Detail transaksi
              </IonButton>
            </IonCardContent>
          </IonCard>
          <IonCard color="secondary">
            <IonCardHeader>
              <IonCardTitle>Made Raihan</IonCardTitle>
              <IonCardSubtitle>Kampung dadap</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent className="ion-text-center">
              <IonButton routerLink="/pemilik/detail-transaksi">
                Detail transaksi
              </IonButton>
            </IonCardContent>
          </IonCard>
          <IonCard color="secondary">
            <IonCardHeader>
              <IonCardTitle>Made Raihan</IonCardTitle>
              <IonCardSubtitle>Kampung dadap</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent className="ion-text-center">
              <IonButton routerLink="/pemilik/detail-transaksi">
                Detail transaksi
              </IonButton>
            </IonCardContent>
          </IonCard>
          <IonCard color="secondary">
            <IonCardHeader>
              <IonCardTitle>Made Raihan</IonCardTitle>
              <IonCardSubtitle>Kampung dadap</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent className="ion-text-center">
              <IonButton routerLink="/pemilik/detail-transaksi">
                Detail transaksi
              </IonButton>
            </IonCardContent>
          </IonCard>
          <div className="card-pengontrak-home">
            {/* <IonGrid>
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
                  <IonButton routerLink="/pemilik/detail-transaksi">
                    Detail transaksi
                  </IonButton>
                </IonCol>
              </IonRow>
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
                  <IonButton routerLink="/pemilik/detail-transaksi">
                    Detail transaksi
                  </IonButton>
                </IonCol>
              </IonRow>
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
                  <IonButton routerLink="/pemilik/detail-transaksi">
                    Detail transaksi
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonTitle className="ion-text-center">25-10-2022</IonTitle>
            </IonGrid> */}
          </div>

          {/* <div className="ion-margin-top">
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
          </div> */}

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

export default PemilikHome;
