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
  const pindahTambahPembayaran = () => {};
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
            onClick={pindahTambahPembayaran}
            icon="checkmarkCircle"
            title="Daftar Belum Lunas"
          />
          <GRIDpemilikOrder
            onClick={pindahDaftarOrangNgontrak}
            icon="list"
            title="Daftar Orang Ngontrak"
          />
          <GRIDpemilikOrder
            onClick={pindahTambahPembayaran}
            icon="closeCircle"
            title="Daftar Belum Bayar Bulanan"
          />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PemilikOrder;
