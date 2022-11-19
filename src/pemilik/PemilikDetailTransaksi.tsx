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
import "./PemilikDetailTransaksi.css";
import kucingtopi from "../image/kucingtopi.png";

const PemilikDetailTransaksi: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="navbar-detail-transaksi-pemilik" color="medium">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle className="ion-text-center">Detail Transaksi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="ion-text-center card-gambar-detail-transaksi">
          <img
            alt="detail transaksi"
            src={kucingtopi}
            width="500"
            height="250"
          />
        </IonCard>
        <div className="informasi-detail-transaksi-pemilik">
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
                <IonTitle>
                  Alamat /<br />
                  Nomor Kontrakan
                </IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>Kampung ddp</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>Status Bulan Ini</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle color="danger">Belum Lunas</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>
                  Jumlah yang harus
                  <br />
                  dibayar bulan ini
                </IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle color="danger">Rp. 200.000</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>
                  Jumlah yang harus
                  <br />
                  dibayar bulan ini
                </IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>Rp. 200.000</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>
                  Jumlah yang
                  <br />
                  dibayar bulan ini
                </IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>Rp. 100.000</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>Tanggal Pembayaran</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>22-09-10</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>Pembayaran untuk bulan</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>Bulan ke-10</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PemilikDetailTransaksi;
