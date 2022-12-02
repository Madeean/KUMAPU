import {
  IonBackButton,
  IonButton,
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
  useIonActionSheet,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import "./PemilikDetailPengontrak.css";

import kucingtopi from "../image/kucingtopi.png";
import { useHistory, useParams } from "react-router";

import { url } from "../App";
import localforage from "localforage";
import axios from "axios";
import { cloudUpload, trash } from "ionicons/icons";

const PemilikDetailPengontrak: React.FC = () => {
  const detailPengontrakId = useParams<{ detailPengontrakId: string }>()
    .detailPengontrakId;
  const [tokenSP, setTokenSP] = useState<string>();
  const [name, setName] = useState<string>();
  const [umur, setUmur] = useState<string>();
  const [alamatKtp, setAlamatKtp] = useState<string>();
  const [alamatSekarang, setAlamatSekarang] = useState<string>();
  const [hargaPerbulan, setHargaPerbulan] = useState<string>();
  const [tanggalBergabung, setTanggalBergabung] = useState<string>();
  const [fotoMuka, setFotoMuka] = useState<string>();

  const UrlDetailPengontrak = url + "detail-pengontrak/" + detailPengontrakId;
  const getData = async () => {
    const token = await localforage.getItem<string>("token");
    setTokenSP(token?.toString());

    axios
      .get(UrlDetailPengontrak, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setName(response.data.user.name);
        setUmur(response.data.user.umur);
        setAlamatKtp(response.data.user.alamat_sesuai_ktp);
        setAlamatSekarang(response.data.user.alamat_kontrakan_sekarang);
        setHargaPerbulan(response.data.user.harga_perbulan);
        setTanggalBergabung(response.data.user.created);
        setFotoMuka(response.data.user.foto_muka);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const history = useHistory();

  useEffect(() => {
    getData();
    setPresentingElement(page.current);
  }, []);

  const UrlHapusPengontrak = url + "delete-pengontrak/" + detailPengontrakId;

  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);
  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);
  const [present] = useIonActionSheet();

  function dismiss() {
    modal.current?.dismiss();
  }
  function canDismiss() {
    return new Promise<boolean>((resolve, reject) => {
      present({
        header: "Yakin, ingin menghapus pengontrak ini?",
        buttons: [
          {
            icon: trash,
            text: "Yakin kick dari kontrakan",
            role: "confirm",
          },
          {
            icon: cloudUpload,
            text: "Gak yakin, Kembali",
            role: "cancel",
          },
        ],
        onWillDismiss: (ev) => {
          if (ev.detail.role === "confirm") {
            hapusPengontrak();
          } else {
            reject();
          }
        },
      });
    });
  }

  const hapusPengontrak = async () => {
    const token = await localforage.getItem("token");
    setTokenSP(token?.toString());

    axios
      .post(UrlHapusPengontrak, null, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    history.push("/pemilik/order/daftarorangngontrak");
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="navbar-detail-pengontrak-pemilik" color="medium">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle className="ion-text-center">Detail Pengontrak</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="ion-text-center card-gambar-detail-pengontrak">
          <img alt="detail Pegontrak" src={fotoMuka} width="500" height="250" />
        </IonCard>
        <div className="informasi-detail-transaksi-pengontrak">
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
                <IonTitle>Umur</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>{umur}</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>

            <IonRow>
              <IonCol>
                <IonTitle>Alamat KTP</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>{alamatKtp}</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>
                  alamat sekarang /
                  <br />
                  Nomor Kontrakan
                </IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>{alamatSekarang}</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>bayaran perbulan</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>{`Rp. ${hargaPerbulan}`}</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle>Tanggal bergabung</IonTitle>
              </IonCol>
              <IonCol className="ion-text-end">
                <IonTitle>{tanggalBergabung}</IonTitle>
              </IonCol>
              <IonItemDivider />
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonButton onClick={() => canDismiss()}>
                  Hapus pengontrak
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default PemilikDetailPengontrak;
