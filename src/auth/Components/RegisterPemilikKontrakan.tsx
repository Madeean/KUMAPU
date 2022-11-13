import {
  IonButton,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
} from "@ionic/react";
import React from "react";

const RegisterPemilikKontrakan: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Nama</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Nama kontrakan</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">
              Berapa ruangan yang dipunya?
            </IonLabel>
            <IonInput type="number" />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" />
          </IonItem>

          <IonButton className="ion-margin-top">Register</IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
export default RegisterPemilikKontrakan;
