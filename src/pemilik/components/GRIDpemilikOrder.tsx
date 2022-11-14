import { IonCol, IonIcon, IonRow, IonTitle } from "@ionic/react";
import { addCircle, pencil } from "ionicons/icons";
import React from "react";

const GRIDpemilikOrder: React.FC = () => {
  return (
    <div className="pembungkus-grid-pemilik-order">
      <IonRow>
        <IonCol size="2">
          <IonIcon icon={pencil} />
        </IonCol>
        <IonCol size="8">
          <IonTitle>Tambah Pembayaran</IonTitle>
        </IonCol>
        <IonCol size="2">
          <IonIcon icon={addCircle} />
        </IonCol>
      </IonRow>
    </div>
  );
};

export default GRIDpemilikOrder;
