import {
  IonButton,
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
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
} from "@ionic/react";
import axios from "axios";
import { refresh, add } from "ionicons/icons";
import localforage from "localforage";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { url } from "../App";
import "./PemilikHome.css";

const PemilikHome: React.FC = () => {
  const history = useHistory();
  const pindahRiwayatPembayaran = () => {
    history.push("/pengontrak/riwayat-pembayaran");
  };

  const [name, setName] = useState<string>();
  const [token, setToken] = useState<string>();
  const [data, setData] = useState<any[]>();
  const [searchValue, setSearchValue] = useState("");

  const historyPembayaranUrl = url + "get-pembayaran-diterima-pemilik";

  const getData = async () => {
    const tokenSP = await localforage.getItem("token");
    const nameSP = await localforage.getItem("name");
    // This code runs once the value has been loaded
    // from the offline store.

    Promise.all([tokenSP, nameSP]).then((values) => {
      setToken(values[0]?.toString());
      setName(values[1]?.toString());
    });

    if (tokenSP != null) {
      getdata(tokenSP.toString());
    } else {
      getData();
    }
  };

  const getdata = async (token: string) => {
    const get = await axios.get(historyPembayaranUrl, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    });
    setData(get.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const refresh = (event: CustomEvent<RefresherEventDetail>) => {
    getdata(token?.toString()!);
    event.detail.complete();
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar color="favorite">
            <IonTitle className="title-pengontrak-home">
              <IonText>Hello,</IonText>
              <h5>{name}</h5>
            </IonTitle>
            <IonSearchbar
              animated={true}
              placeholder="Cari Orang Kontrakan"
              onIonChange={(e) => setSearchValue(e.detail.value!)}
            />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonRefresher slot="fixed" onIonRefresh={refresh}>
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>
          <IonGrid>
            <IonRow></IonRow>
          </IonGrid>

          {/* <IonCard id="card">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonText>Made Reihan</IonText>
                </IonCol>
              </IonRow>
              <h5>Kampung dadap No.5</h5>
            </IonGrid>
          </IonCard> */}
          {searchValue == ""
            ? data?.map((item) => (
                <IonCard color="secondary" key={item.id}>
                  <IonCardHeader>
                    <IonCardTitle>{item.nama_pengontrak}</IonCardTitle>
                    <IonCardSubtitle>
                      {item.user[0].alamat_kontrakan_sekarang}
                    </IonCardSubtitle>
                  </IonCardHeader>

                  <IonCardContent className="ion-text-center">
                    <IonButton
                      routerLink={"/pemilik/detail-transaksi/" + item.id}
                    >
                      Detail transaksi
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              ))
            : data
                ?.filter((item) =>
                  item.nama_pengontrak
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                )
                .map((item) => (
                  <IonCard color="secondary" key={item.id}>
                    <IonCardHeader>
                      <IonCardTitle>{item.nama_pengontrak}</IonCardTitle>
                      <IonCardSubtitle>
                        {item.user[0].alamat_kontrakan_sekarang}
                      </IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent className="ion-text-center">
                      <IonButton
                        routerLink={"/pemilik/detail-transaksi/" + item.id}
                      >
                        Detail transaksi
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                ))}

          {/* <IonCard color="secondary">
            <IonCardHeader>
              <IonCardTitle>Made Raihan</IonCardTitle>
              <IonCardSubtitle>Kampung dadap</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent className="ion-text-center">
              <IonButton routerLink="/pemilik/detail-transaksi">
                Detail transaksi
              </IonButton>
            </IonCardContent>
          </IonCard>
          <IonCard color="secondary">
            <IonCardHeader>
              <IonCardTitle>Made Raihan</IonCardTitle>
              <IonCardSubtitle>Kampung dadap</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent className="ion-text-center">
              <IonButton routerLink="/pemilik/detail-transaksi">
                Detail transaksi
              </IonButton>
            </IonCardContent>
          </IonCard>
          <IonCard color="secondary">
            <IonCardHeader>
              <IonCardTitle>Made Raihan</IonCardTitle>
              <IonCardSubtitle>Kampung dadap</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent className="ion-text-center">
              <IonButton routerLink="/pemilik/detail-transaksi">
                Detail transaksi
              </IonButton>
            </IonCardContent>
          </IonCard> */}
          {/* <div className="card-pengontrak-home"> */}
          {/* <IonGrid>
              <IonRow>
                <IonCol>
                  <IonTitle>Made Reihan</IonTitle>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                  <IonTitle>Kampung dadap</IonTitle>
                </IonCol>
                <IonCol className="ion-text-center">
                  <IonButton routerLink="/pemilik/detail-transaksi">
                    Detail transaksi
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonTitle>Made Reihan</IonTitle>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                  <IonTitle>Kampung dadap</IonTitle>
                </IonCol>
                <IonCol className="ion-text-center">
                  <IonButton routerLink="/pemilik/detail-transaksi">
                    Detail transaksi
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonTitle>Made Reihan</IonTitle>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                  <IonTitle>Kampung dadap</IonTitle>
                </IonCol>
                <IonCol className="ion-text-center">
                  <IonButton routerLink="/pemilik/detail-transaksi">
                    Detail transaksi
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonTitle className="ion-text-center">25-10-2022</IonTitle>
            </IonGrid> */}
          {/* </div> */}

          {/* <div className="ion-margin-top">
            <IonGrid>
              <IonRow className="ion-align-items-center">
                <IonCol className="ion-text-center">
                  <IonButton
                    className="btn-tambah-pembayaran-pengontrak-home"
                    routerLink="/pengontrak/tambah-pembayaran"
                  >
                    <IonIcon src={add} />
                    <IonTitle>Tambah Pembayaran</IonTitle>
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div> */}

          {/* <div className="icon-tambah-pembayaran-pengontrak-home">
            <IonButtons slot="center">
              <IonButtons slot="center">
                <IonIcon src={add} />
                <IonTitle>Tambah Pembayaran</IonTitle>
              </IonButtons>
            </IonButtons>
          </div> */}
        </IonContent>
      </IonPage>
    </>
  );
};

export default PemilikHome;
