import {
  IonCard,
  IonCardContent,
  IonCol,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
} from "@ionic/react";
import {
  addCircle,
  add,
  checkmarkCircle,
  list,
  closeCircle,
  arrowForward,
  star,
  documentText,
} from "ionicons/icons";
import React from "react";
import "./GRIDpemilikOrder.css";

const GRIDpemilikOrder: React.FC<{
  title: string;
  icon: string;
  onClick: () => void;
}> = (props) => {
  const checkIcon = () => {
    if (props.icon === "add") {
      return add;
    } else if (props.icon === "checkmarkCircle") {
      return checkmarkCircle;
    } else if (props.icon === "list") {
      return list;
    } else if (props.icon === "closeCircle") {
      return closeCircle;
    } else if (props.icon == "documentText") {
      return documentText;
    }
  };

  return (
    <IonCard color="secondary" onClick={props.onClick}>
      <IonCardContent className="ion-text-center">
        <IonItem lines="none">
          <IonIcon icon={checkIcon()} slot="start" />
          <IonLabel>{props.title}</IonLabel>
          <IonIcon icon={arrowForward} slot="end" />
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default GRIDpemilikOrder;
