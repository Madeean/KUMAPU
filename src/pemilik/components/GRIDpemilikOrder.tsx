import { IonCol, IonIcon, IonRow, IonTitle } from "@ionic/react";
import {
  addCircle,
  add,
  checkmarkCircle,
  list,
  closeCircle,
  arrowForward,
} from "ionicons/icons";
import React from "react";
import "./GRIDpemilikOrder.css";

const GRIDpemilikOrder: React.FC<{ title: string; icon: string }> = (props) => {
  const checkIcon = () => {
    if (props.icon === "add") {
      return add;
    } else if (props.icon === "checkmarkCircle") {
      return checkmarkCircle;
    } else if (props.icon === "list") {
      return list;
    } else if (props.icon === "closeCircle") {
      return closeCircle;
    }
  };

  return (
    <div className="pembungkus-grid-pemilik-order">
      <IonRow>
        <IonCol size="1">
          <IonIcon icon={checkIcon()} />
        </IonCol>
        <IonCol size="10">
          <IonTitle>{props.title}</IonTitle>
        </IonCol>
        <IonCol size="1">
          <IonIcon icon={arrowForward} />
        </IonCol>
      </IonRow>
    </div>
  );
};

export default GRIDpemilikOrder;
