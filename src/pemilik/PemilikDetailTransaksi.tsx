import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItemDivider,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./PemilikDetailTransaksi.css";
import kucingtopi from "../image/kucingtopi.png";
import { useParams } from "react-router";
import localforage from "localforage";
import axios from "axios";
import { url } from "../App";

const PemilikDetailTransaksi: React.FC = () => {
  const detailTransaksiId = useParams<{ detailTransaksiId: string }>()
    .detailTransaksiId;

  const [name, setName] = useState<string>();
  const [alamatKontrakan, setAlamatKontrakan] = useState<string>();
  const [statusBulanIni, setStatusBulanIni] = useState<string>();
  const [jumlahYangHarusDibayarBulanIni, setJumlahYangHarusDibayarBulanIni] =
    useState<string>();
  const [jumlahYangDibayarBulanIni, setJumlahYangDibayarBulanIni] =
    useState<string>();
  const [tanggalPembayaran, setTanggalPembayaran] = useState<string>();
  const [bulan, setBulan] = useState<string>();
  const [buktiBayar, setBuktiBayar] = useState<string>();
  const [token, setToken] = useState<string>();

  const detailTransaksiUrl = url + "detail-transaksi/" + detailTransaksiId;

  const getData = async () => {
    const tokenSP = await localforage.getItem("token");
    setToken(tokenSP?.toString());

    if (tokenSP != null) {
      getdetail(tokenSP?.toString());
    } else {
      getData();
    }
  };
  const getdetail = (tokenbaru: string) => {
    const tokenpake = "Bearer " + tokenbaru;
    axios
      .get(detailTransaksiUrl, {
        headers: {
          Accept: "application/json",
          Authorization: tokenpake,
        },
      })
      .then((response) => {
        setName(response.data.data.user[0].name);
        setAlamatKontrakan(
          response.data.data.user[0].alamat_kontrakan_sekarang
        );
        setStatusBulanIni(response.data.data.status_lunas);
        setJumlahYangHarusDibayarBulanIni(
          response.data.data.user[0].harga_perbulan
        );
        setJumlahYangDibayarBulanIni(response.data.data.jumlah_bayar);
        setTanggalPembayaran(response.data.data.tanggal_bayar);
        setBulan(response.data.data.bulan);
        setBuktiBayar(response.data.data.bukti_bayar);
      })
      .catch((response) => {});
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="navbar-detail-transaksi-pemilik" color="medium">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle className="ion-text-center">Detail Transaksi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="ion-text-center card-gambar-detail-transaksi">
          <img
            alt="detail transaksi"
            src={buktiBayar}
            width="500"
            height="250"
          />
        </IonCard>
        <div className="informasi-detail-transaksi-pemilik">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonTitle>Nama Pengontrak</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>{name}</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>
                  Alamat /<br />
                  Nomor Kontrakan
                </IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>{alamatKontrakan}</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>Status Bulan Ini</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle
                  color={statusBulanIni == "LUNAS" ? "primary" : "danger"}
                >
                  {statusBulanIni == null
                    ? "Menunggu Konfirmasi"
                    : statusBulanIni}
                </IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>
                  Jumlah yang harus
                  <br />
                  dibayar bulan ini
                </IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>{"Rp. " + jumlahYangHarusDibayarBulanIni}</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>
                  Jumlah yang
                  <br />
                  dibayar bulan ini
                </IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>{"Rp. " + jumlahYangDibayarBulanIni}</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>Tanggal Pembayaran</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>{tanggalPembayaran}</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>Pembayaran untuk bulan</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>{"Bulan ke-" + bulan}</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PemilikDetailTransaksi;
