import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { listOutline } from "ionicons/icons";
import { url } from "../App";
import "./PemilikDaftarOrangNgontrak.css";
import localforage from "localforage";
import axios from "axios";

const PemilikDaftarOrangNgontrak: React.FC = () => {
  const [token, setToken] = useState<string>();
  const [rooms, setRooms] = useState<string>();
  const [data, setData] = useState<any[]>();
  const [jumlahOrang, SetJumlahOrang] = useState<number>(0);

  const UrlGetDaftarOrangNgontrak = url + "get-user-kontrakan";

  const getData = async () => {
    const token = await localforage.getItem("token");
    const rooms = await localforage.getItem("rooms");
    // This code runs once the value has been loaded
    // from the offline store.

    Promise.all([token, rooms]).then((values) => {
      setToken(values[0]?.toString());
      setRooms(values[1]?.toString());
    });

    axios
      .get(UrlGetDaftarOrangNgontrak, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        // console.log(response.data.user.length);
        SetJumlahOrang(response.data.user.length);
        setData(response.data.user);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getData();
  }, []);

  const refresh = (event: CustomEvent<RefresherEventDetail>) => {
    getData();
    event.detail.complete();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/pemilik/order" color="dark" />
          </IonButtons>
          <IonTitle className="ion-text-center daftar-orang-ngontrak-text-pemilik">
            Daftar Orang Ngontrak
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonItem lines="none">
          <IonLabel className="pembayaran-terbaru-pengontrak-home">
            Jumlah Orang:
          </IonLabel>
          <IonLabel>{jumlahOrang + " / " + rooms}</IonLabel>
        </IonItem>
        <IonGrid>
          <IonRow>
            {data?.map((item) => (
              <IonCol size="6" key={item.id}>
                <IonCard routerLink={"/pemilik/detail-pengontrak/" + item.id}>
                  <img alt={item.name} src={item.foto_muka} />
                  <IonCardHeader>
                    <IonCardTitle>{item.name}</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default PemilikDaftarOrangNgontrak;
