import {
  IonBackButton,
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
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./PemilikDaftarBelumBayarBulanan.css";

import { url } from "../App";
import localforage from "localforage";
import axios from "axios";

const PemilikDaftarBelumBayarBulanan: React.FC = () => {
  const [token, setToken] = useState<string>();
  const [bulan, setBulan] = useState<string>();
  const [dataSemuaBelumBayar, setDataSemuaBelumBayar] = useState<any[]>();

  const getData = async () => {
    const token = await localforage.getItem("token");
    setToken(token?.toString());
  };

  useEffect(() => {
    getData();
  }, []);

  const GetDataDenganBulan = (bulan: any) => {
    const UrlGetBelumBayarBulanan = url + "get-belum-bayar-bulanan/" + bulan;

    axios
      .get(UrlGetBelumBayarBulanan, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (
          response.data.message ==
          `semua anak kontrakan belum bayar bulan ${bulan}, list belum bayar`
        ) {
          setDataSemuaBelumBayar(response.data.data);
        } else {
          setDataSemuaBelumBayar(response.data.data_yang_belum_bayar);
        }
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
          <IonTitle className="ion-text-center daftar-belum-bayar-bulanan-text-pemilik">
            Daftar Belum Lunas
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="ion-padding">
          <IonRow>
            <IonCol>
              <IonList className="dropdown-tambah-pembayaran-pemilik">
                <IonItem>
                  <IonSelect
                    onIonChange={(e) => setBulan(e.detail.value)}
                    interface="popover"
                    placeholder="Pilih Bulan Pembayaran"
                  >
                    <IonSelectOption value="1">January</IonSelectOption>
                    <IonSelectOption value="2">February</IonSelectOption>
                    <IonSelectOption value="3">Maret</IonSelectOption>
                    <IonSelectOption value="4">April</IonSelectOption>
                    <IonSelectOption value="5">Mei</IonSelectOption>
                    <IonSelectOption value="6">Juni</IonSelectOption>
                    <IonSelectOption value="7">July</IonSelectOption>
                    <IonSelectOption value="8">Agustus</IonSelectOption>
                    <IonSelectOption value="9">September</IonSelectOption>
                    <IonSelectOption value="10">Oktober</IonSelectOption>
                    <IonSelectOption value="11">November</IonSelectOption>
                    <IonSelectOption value="12">Desember</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonList>
            </IonCol>
            <IonCol size="3">
              <IonButton onClick={() => GetDataDenganBulan(bulan)}>
                Search
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        {bulan == undefined ? (
          <h1 className="ion-text-center">pilih bulan dahulu</h1>
        ) : null}
        {dataSemuaBelumBayar?.map((data) => (
          <IonCard color="secondary" key={data.id}>
            <IonCardHeader>
              <IonCardTitle>{data.name}</IonCardTitle>
              <IonCardSubtitle>
                {data.alamat_kontrakan_sekarang}
              </IonCardSubtitle>

              <IonTitle className="ion-text-center">
                {"Bulan ke - " + bulan}
              </IonTitle>
            </IonCardHeader>
          </IonCard>
        ))}

        {dataSemuaBelumBayar?.length == 0 ? (
          <h1 className="ion-text-center">{`Semua pada bulan ${bulan} sudah lunas`}</h1>
        ) : null}
      </IonContent>
    </IonPage>
  );
};

export default PemilikDaftarBelumBayarBulanan;
