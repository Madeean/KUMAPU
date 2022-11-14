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
        <IonGrid>
          <IonRow>
            <IonCol>
              <img src={ProfilePage} className="image-pengontrak-profile" />
            </IonCol>
            <IonCol>
              <IonTitle>Made Reihan</IonTitle>
              <IonTitle>+629243423</IonTitle>
              <IonTitle>Made@gmail.com</IonTitle>
            </IonCol>
            <IonCol size="auto">
              <IonButtons>
                <IonButton className="btn-edit-pengontrak-profile">
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
          <IonButton>Logout</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default PengontrakProfile;
