import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonRow, IonText, IonTitle } from "@ionic/react";
import React from "react";
import tambahBayar from "../pengontrak/PengontrakPermintaanPembayaran";

const PengontrakHome: React.FC = () => {
  return (
    <>
    <IonContent><br></br>
      <div>
        <IonTitle>
          <IonText>Good Morning,</IonText>
          <h5>Made Reihan</h5>
        </IonTitle>
      </div>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonText>Pembayaran Terbaru</IonText>
          </IonCol>
          <IonCol>
            <div></div>
          </IonCol>
          <IonCol>
            <IonIcon name="history"></IonIcon>
            <IonButton>Riwayat</IonButton>{/* onclick */}
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonCard id="card">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonText>Made Reihan</IonText>
            </IonCol>
          </IonRow>
          <h5>Kampung dadap No.5</h5>
        </IonGrid>
      </IonCard>
      <div>
        <IonIcon name="plus" onClick={tambahBayar}></IonIcon>
        <IonText>Tambah Pembayaran</IonText>  
      </div>
    
      </IonContent>
      </>
  );
};

export default PengontrakHome;
