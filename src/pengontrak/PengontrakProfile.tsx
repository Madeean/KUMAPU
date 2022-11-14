import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./PengontrakProfile.css";
import ProfilePage from "../image/ProfilePage.png";
import { pencil } from "ionicons/icons";

const PengontrakProfile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonTitle className="ion-text-center profile-text-pengontrak-profile">
            My Profile
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol size="2">
              <img src={ProfilePage} className="image-pengontrak-profile" />
            </IonCol>
            <IonCol className="nama-pengontrak-profile" size="8">
              <IonTitle>Made Reihan</IonTitle>
              <IonTitle>+629243423</IonTitle>
              <IonTitle>Made@gmail.com</IonTitle>
            </IonCol>
            <IonCol size="2">
              <IonButtons>
                <IonButton
                  className="btn-edit-pengontrak-profile"
                  routerLink="/pengontrak/profile/edit"
                >
                  <IonIcon
                    src={pencil}
                    className="ion-icon-pengontrak-profile"
                  />
                </IonButton>
              </IonButtons>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div className="btn-logout-pengontrak-profile">
          <IonButton routerLink="/login">Logout</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default PengontrakProfile;
