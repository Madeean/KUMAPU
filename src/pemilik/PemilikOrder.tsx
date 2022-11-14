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
        <IonGrid>
          <GRIDpemilikOrder />
          <GRIDpemilikOrder />
          <GRIDpemilikOrder />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PemilikOrder;
