import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./PengontrakTambahPembayaran.css";
import ImageAdd from "../image/bx_image-add.png";
import localforage from "localforage";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { url } from "../App";
import axios from "axios";
import { useHistory } from "react-router";

const PengontrakTambahPembayaran: React.FC = () => {
  const [name, setName] = useState<string>();
  const [namaKontrakan, setNamaKontrakan] = useState<string>();
  const role = "pengontrak";
  const dateRef = React.useRef<any>(null);
  const jumlahBayarRef = React.useRef<HTMLIonInputElement>(null);
  // const [date, setDate] = useState<string>();

  const [takenPhoto, setTakenPhoto] = useState<{
    path: string | undefined;
    preview: string;
  }>();
  const [selectedFile, setSelectedFile] = useState<File>();
  const [token, setToken] = useState<string>();

  const current = new Date();
  const bulan = current.getMonth() + 1;

  const history = useHistory();

  const takePhotoHandler = async (via: string) => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: via == "camera" ? CameraSource.Camera : CameraSource.Photos,
      quality: 80,
      width: 500,
    });

    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    setSelectedFile(blob as File);

    if (!photo || /*!photo.path ||*/ !photo.webPath) {
      return;
    }
    setTakenPhoto({
      path: photo.path ? photo.path : "",
      preview: photo.webPath,
    });
  };

  const getData = () => {
    localforage.getItem("name").then((value: any) => {
      setName(value.toString());
    });
    localforage.getItem("token").then((value: any) => {
      setToken(value.toString());
    });
    localforage.getItem("nama_kontrakan").then((value: any) => {
      setNamaKontrakan(value.toString());
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const tambahPembayaranUrl = url + "bayar";

  const tambahPembayaran = () => {
    const bodyForm = new FormData();
    bodyForm.append("nama_pengontrak", name!);
    bodyForm.append("role", role);
    bodyForm.append("tanggal_bayar", dateRef.current.value);
    bodyForm.append("jumlah_bayar", jumlahBayarRef.current?.value?.toString()!);
    bodyForm.append("bukti_bayar", selectedFile as File);
    bodyForm.append("nama_kontrakan", namaKontrakan!);
    bodyForm.append("bulan", bulan.toString());

    axios
      .post(tambahPembayaranUrl, bodyForm, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.data);
        history.push("/pengontrak/pembayaran-berhasil");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar
          className="navbar-tambah-pembayaran-pengontrak"
          color="medium"
        >
          <IonButtons slot="start">
            <IonBackButton defaultHref="/pengontrak/home" />
          </IonButtons>
          <IonTitle>Riwayat Pembayaran</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonTitle>Tanggal Bayar</IonTitle>
              <IonInput
                type="date"
                className="ioninpu-tambah-pembayaran-pengontrak"
                ref={dateRef}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonItem>
                <IonLabel position="floating">Jumlah Bayar</IonLabel>
                <IonInput type="number" ref={jumlahBayarRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center ion-margin-top">
              <IonTitle>Bukti Bayar</IonTitle>
              <div className="image-add-tambah-pembayaran-pengontrak">
                {!takenPhoto && <img src={ImageAdd} />}
                {takenPhoto && <img src={takenPhoto.preview} alt="preview" />}
              </div>

              <div className="btn-kamera-gallery-tambah-pembayaran-pengontrak">
                <IonButton
                  color="medium"
                  onClick={() => takePhotoHandler("camera")}
                >
                  Kamera
                </IonButton>
                <IonButton
                  color="favorite"
                  onClick={() => takePhotoHandler("gallery")}
                >
                  Gallery
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center ion-margin-top">
              <IonButton color="favorite" onClick={tambahPembayaran}>
                Tambah Pembayaran
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default PengontrakTambahPembayaran;
