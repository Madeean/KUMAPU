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
import localforage from "localforage";
import React, { useEffect, useState } from "react";
import "./PemilikDaftarBelumLunas.css";
import { url } from "../App";
import axios from "axios";

const PemilikDaftarBelumLunas: React.FC = () => {
  const [token, setToken] = useState<string>();
  const [data, setData] = useState<any[]>();

  const UrlGetPembayaranBelumLunas = url + "get-pembayaran-belum-lunas-pemilik";

  const getData = async () => {
    const token = await localforage.getItem("token");
    setToken(token?.toString());

    axios
      .get(UrlGetPembayaranBelumLunas, {
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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonButtons slot="start">
            <IonBackButton color="dark" defaultHref="/pemilik/order" />
          </IonButtons>
          <IonTitle className="ion-text-center daftar-belum-lunas-text-pemilik">
            Daftar Belum Lunas
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={getData}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {data?.map((item) => (
          <IonCard color="secondary" key={item.id}>
            <IonCardHeader>
              <IonCardTitle>{item.nama_pengontrak}</IonCardTitle>
              <IonCardSubtitle>
                {item.user[0].alamat_kontrakan_sekarang}
              </IonCardSubtitle>
              <IonTitle className="ion-text-end" color="danger">
                {item.status_lunas}
              </IonTitle>
              <IonTitle className="ion-text-center">
                {`Rp. ${item.jumlah_bayar} / Rp. ${item.user[0].harga_perbulan}`}
              </IonTitle>
            </IonCardHeader>

            <IonCardContent className="ion-text-center">
              <IonButton routerLink={"/pemilik/detail-transaksi/" + item.id}>
                Detail transaksi
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default PemilikDaftarBelumLunas;
