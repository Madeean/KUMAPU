import {
  IonButton,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React from "react";
import "./RegisterPengontrak.css";

import ImageAdd from "../../image/bx_image-add.png";

const RegisterPengontrak: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonList className="container-register-pengontrak">
            <IonItem>
              <IonSelect
                interface="popover"
                placeholder="Pilih nama kontrakan mu"
              >
                <IonSelectOption value="Kontrakan radit">
                  Kontrakan radit
                </IonSelectOption>
                <IonSelectOption value="kontrakan made">
                  kontrakan made
                </IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Nama</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Umur</IonLabel>
            <IonInput type="number" />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Alamat sesuai KTP</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Alamat kontrakan sekarang</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Harga perbulan</IonLabel>
            <IonInput />
          </IonItem>
          <div className="image-add-register-pengontrak">
            <img src={ImageAdd} />
          </div>

          <div className="btn-kamera-gallery-register-pengontrak">
            <IonButton color="medium">Kamera</IonButton>
            <IonButton color="favorite">Gallery</IonButton>
          </div>

          <IonButton
            className="ion-margin-top btnregister-register-pengontrak"
            routerLink="/pengontrak"
          >
            Register
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
export default RegisterPengontrak;
