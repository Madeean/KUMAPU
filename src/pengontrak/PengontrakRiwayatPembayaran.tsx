import {
  IonPage,
  IonHeader,
  IonBackButton,
  IonButtons,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/react";
import { search } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./PengontrakRiwayatPembayaran.css";

import { url } from "../App";
import axios from "axios";
import localforage from "localforage";

const PengontrakRiwayatPembayaran: React.FC = () => {
  const history = useHistory();
  const [token, setToken] = useState<string>();
  const [data, setData] = useState<any[]>();
  const [searchValue, setSearchValue] = useState("");

  const getDataNama = async () => {
    try {
      const token = await localforage.getItem("token");
      // This code runs once the value has been loaded
      // from the offline store.
      Promise.all([token]).then((values) => {
        setToken(values[0]?.toString());
      });

      await axios
        .get(historyPembayaranUrl, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          setData(response.data.data);
        })
        .catch((response) => {});
    } catch (err) {}

    // setTimeout(() => {
    //   getHistoryPembayaran();
    // }, 1000);
    return false;
  };

  const historyPembayaranUrl = url + "get-pembayaran-diterima-pengontrak";

  // const getHistoryPembayaran = async () => {
  //   const TokenNow = token;
  //   await axios
  //     .get(historyPembayaranUrl, {
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: "Bearer " + TokenNow,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data.data);
  //       setData(response.data.data);
  //     })
  //     .catch((response) => {
  //       console.log(response);
  //     });
  // };

  useEffect(() => {
    getDataNama();
  }, []);

  const refresh = (event: CustomEvent<RefresherEventDetail>) => {
    getDataNama();
    event.detail.complete();
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar
          className="navbar-riwayat-pembayaran-pengontrak"
          color="medium"
        >
          <IonButtons slot="start">
            <IonBackButton defaultHref="/pengontrak/home" />
          </IonButtons>
          <IonTitle>Riwayat Pembayaran</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="search-input-riwayat-pembayaran-pengontrak">
          <IonItem>
            <IonLabel>
              <IonIcon src={search} />
            </IonLabel>
            <IonInput
              placeholder="Cari riwayat pembayaran"
              onIonChange={(e) => setSearchValue(e.detail.value!)}
            ></IonInput>
          </IonItem>
        </div>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        {searchValue == ""
          ? data?.map((item) => (
              <div className="card-riwayat-pembayaran-pengontrak" key={item.id}>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonTitle>{item.user[0].name}</IonTitle>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="6">
                      <IonTitle>
                        {item.user[0].alamat_kontrakan_sekarang}
                      </IonTitle>
                    </IonCol>
                    <IonCol className="ion-text-center">
                      <IonButton
                        routerLink={"/pengontrak/detail-transaksi/" + item.id}
                      >
                        Detail transaksi
                      </IonButton>
                    </IonCol>
                  </IonRow>
                  <IonTitle className="ion-text-center">
                    {item.tanggal_bayar}
                  </IonTitle>
                </IonGrid>
              </div>
            ))
          : data
              ?.filter((item) =>
                item.user[0].name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
              .map((item) => (
                <div
                  className="card-riwayat-pembayaran-pengontrak"
                  key={item.id}
                >
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <IonTitle>{item.user[0].name}</IonTitle>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="6">
                        <IonTitle>
                          {item.user[0].alamat_kontrakan_sekarang}
                        </IonTitle>
                      </IonCol>
                      <IonCol className="ion-text-center">
                        <IonButton
                          routerLink={"/pengontrak/detail-transaksi/" + item.id}
                        >
                          Detail transaksi
                        </IonButton>
                      </IonCol>
                    </IonRow>
                    <IonTitle className="ion-text-center">
                      {item.tanggal_bayar}
                    </IonTitle>
                  </IonGrid>
                </div>
              ))}
      </IonContent>
    </IonPage>
  );
};
export default PengontrakRiwayatPembayaran;
