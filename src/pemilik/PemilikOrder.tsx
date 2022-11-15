import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addCircle, pencil } from "ionicons/icons";
import React from "react";
import GRIDpemilikOrder from "./components/GRIDpemilikOrder";

import "./PemilikOrder.css";
const PemilikOrder: React.FC = () => {
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
          <GRIDpemilikOrder icon="add" title="Tambah Pembayaran" />
          <GRIDpemilikOrder icon="checkmarkCircle" title="Daftar Belum Lunas" />
          <GRIDpemilikOrder icon="list" title="Daftar Orang Ngontrak" />
          <GRIDpemilikOrder
            icon="closeCircle"
            title="Daftar Belum Bayar Bulanan"
          />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PemilikOrder;
