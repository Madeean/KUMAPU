import React, { useEffect, useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
  useIonLoading,
} from "@ionic/react";

import { url } from "../App";
import localforage from "localforage";
import axios from "axios";
import { useHistory } from "react-router";

const PemilikRequestPembayaran: React.FC = () => {
  const [present, dismiss] = useIonLoading();

  const [token, setToken] = useState<string>();
  const [data, setData] = useState<any[]>();

  const UrlGetRequestPembayaran = url + "get-request-pemilik";

  const getData = async () => {
    const tokenSP = await localforage.getItem("token");
    setToken(tokenSP?.toString());

    if (tokenSP != null) {
      getPembayaran(tokenSP?.toString());
    } else {
      getData();
    }
  };

  const getPembayaran = async (token: string) => {
    axios
      .get(UrlGetRequestPembayaran, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getData();
  }, []);

  const history = useHistory();

  const TolakPembayaran = (id: any) => {
    present({ message: "Loading...", spinner: "circles" });

    const UrlTolakPembayaran = url + "tolak-pembayaran/" + id;
    axios
      .post(
        UrlTolakPembayaran,
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        // reload page
        dismiss();
        getData();
      })
      .catch((error) => {
        dismiss();
      });
  };
  const TerimaPembayaran = (id: any) => {
    present({ message: "Loading...", spinner: "circles" });

    const UrlTolakPembayaran = url + "terima-pembayaran/" + id;
    axios
      .post(
        UrlTolakPembayaran,
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        // reload page
        dismiss();
        getData();
      })
      .catch((error) => {
        dismiss();
      });
  };

  const refresh = (event: CustomEvent<RefresherEventDetail>) => {
    getPembayaran(token?.toString()!);
    event.detail.complete();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonButtons slot="start">
            <IonBackButton color="dark" defaultHref="/pemilik/order" />
          </IonButtons>
          <IonTitle className="ion-text-center daftar-belum-lunas-text-pemilik">
            Daftar Request Pembayaran
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {data?.map((item) => (
          <IonCard color="secondary" className="ion-margin-top" key={item.id}>
            <IonCardHeader>
              <IonCardTitle>{item.nama_pengontrak}</IonCardTitle>
              <IonTitle className="ion-text-center">
                {"bulan ke- " + item.bulan}
              </IonTitle>
            </IonCardHeader>

            <IonCardContent className="ion-text-center">
              <IonButton
                onClick={() => TolakPembayaran(item.id)}
                color="danger"
              >
                Tolak Pembayaran
              </IonButton>
              <IonButton routerLink={"/pemilik/detail-transaksi/" + item.id}>
                Detail transaksi
              </IonButton>
              <IonButton
                onClick={() => TerimaPembayaran(item.id)}
                color="medium"
              >
                Terima Pembayaran
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default PemilikRequestPembayaran;
