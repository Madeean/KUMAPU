import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add, refresh } from "ionicons/icons";
import localforage from "localforage";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import tambahBayar from "../pengontrak/PengontrakPermintaanPembayaran";
import "./PengontrakHome.css";

import { url } from "../App";
import axios from "axios";

const PengontrakHome: React.FC = () => {
  const history = useHistory();
  const pindahRiwayatPembayaran = () => {
    history.push("/pengontrak/riwayat-pembayaran");
  };
  const [name, setName] = useState<string>();
  const [token, setToken] = useState<string>();
  const [data, setData] = useState<any[]>();

  const getDataNama = async () => {
    localforage.getItem("name").then((value: any) => {
      setName(value.toString());
    });
    localforage.getItem("token").then((value: any) => {
      setToken(value);
    });

    await getHistoryPembayaran();
  };

  const historyPembayaranUrl = url + "get-pembayaran-diterima-pengontrak";

  const getHistoryPembayaran = async () => {
    console.log(token);
    await axios
      .get(
        "http://madeekan.madee.my.id/api/get-pembayaran-diterima-pengontrak",
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    getDataNama();
  });

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar color="favorite">
            <IonTitle className="title-pengontrak-home">
              <IonText>Hello,</IonText>
              <h5>{name}</h5>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonText className="pembayaran-terbaru-pengontrak-home">
                  Pembayaran Terbaru
                </IonText>
              </IonCol>
              <IonCol>
                <div></div>
              </IonCol>
              <IonCol>
                <div className="btn-riwayat-pengontrak-home">
                  <IonButtons onClick={pindahRiwayatPembayaran} slot="center">
                    <IonIcon src={refresh} />
                    <IonTitle>Riwayat</IonTitle>
                  </IonButtons>
                </div>
              </IonCol>
            </IonRow>
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
          {data &&
            data.map((item) => (
              <div className="card-pengontrak-home" key={item.id}>
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

          <div className="ion-margin-top">
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
          </div>

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

export default PengontrakHome;
