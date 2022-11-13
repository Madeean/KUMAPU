import React from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
  IonToolbar,
} from "@ionic/react";

import "./Register.css";
import RegisterPemilikKontrakan from "./Components/RegisterPemilikKontrakan";
import RegisterPengontrak from "./Components/RegisterPengontrak";
import { arrowBack } from "ionicons/icons";

const Register: React.FC = () => {
  const [registerType, setRegisterType] = React.useState<string>("");

  return (
    <IonPage>
      <IonContent className="ion-padding ion-text-center">
        <IonList className="container-register">
          <IonItem>
            <IonSelect
              onIonChange={(e) => setRegisterType(e.detail.value)}
              interface="popover"
              placeholder="Select Register Type"
              className="gantiWarna-register"
            >
              <IonSelectOption value="Register Pemilik Kontrakan">
                Register Pemilik Kontrakan
              </IonSelectOption>
              <IonSelectOption value="Register Pengontrak">
                Register Pengontrak
              </IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
        {registerType == "Register Pemilik Kontrakan" ? (
          <RegisterPemilikKontrakan />
        ) : registerType == "Register Pengontrak" ? (
          <RegisterPengontrak />
        ) : (
          <div></div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Register;
