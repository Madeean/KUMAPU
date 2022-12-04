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
} from "@ionic/react";

import { url } from "../App";
import localforage from "localforage";
import axios from "axios";
import { useHistory } from "react-router";

const PemilikRequestPembayaran: React.FC = () => {
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
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const history = useHistory();

  const TolakPembayaran = (id: any) => {
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
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const TerimaPembayaran = (id: any) => {
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
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
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
