import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addCircle, pencil, star } from "ionicons/icons";
import React from "react";
import GRIDpemilikOrder from "./components/GRIDpemilikOrder";

import "./PemilikOrder.css";
import { useHistory } from "react-router";
const PemilikOrder: React.FC = () => {
  const history = useHistory();
  const pindahTambahPembayaran = () => {
    history.push("/pemilik/tambah-pembayaran");
  };
  const PemilikBelumBayarBulanan = () => {
    history.push("/pemilik/daftar-belum-bayar-bulanan");
  };
  const pindahDaftarBelumLunas = () => {
    history.push("/pemilik/daftar-belum-lunas");
  };
  const pindahDaftarOrangNgontrak = () => {
    history.push("/pemilik/order/daftarorangngontrak");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonTitle className="ion-text-center profile-text-pemilik-profile">
            Order
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="title-GRIDPemilikOrder">
          <GRIDpemilikOrder
            onClick={pindahTambahPembayaran}
            icon="add"
            title="Tambah Pembayaran"
          />
          <GRIDpemilikOrder
            onClick={pindahDaftarBelumLunas}
            icon="checkmarkCircle"
            title="Daftar Belum Lunas"
          />
          <GRIDpemilikOrder
            onClick={pindahDaftarOrangNgontrak}
            icon="list"
            title="Daftar Orang Ngontrak"
          />
          <GRIDpemilikOrder
            onClick={PemilikBelumBayarBulanan}
            icon="closeCircle"
            title="Daftar Belum Bayar Bulanan"
          />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PemilikOrder;
