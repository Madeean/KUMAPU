import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
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
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import localforage from "localforage";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { url } from "../App";
import ImageAdd from "../image/bx_image-add.png";
import "./PemilikTambahPembayaran.css";
const PemilikTambahPembayaran: React.FC = () => {
  const history = useHistory();
  const [bulan, setBulan] = useState<string>();
  const [namaPengontrak, setNamaPengontrak] = useState<string>();
  const jumlahBayar = useRef<HTMLIonInputElement>(null);
  const [takenPhoto, setTakenPhoto] = useState<{
    path: string | undefined;
    preview: string;
  }>();
  const [selectedFile, setSelectedFile] = useState<File>();
  const [namaKontrakan, setNamaKontrakan] = useState<string>();
  const [data, setData] = useState<any[]>();
  const [token, setToken] = useState<string>();
  const current = new Date();
  const tanggal_bayar = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;

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

  const UrlGetUserKontrakan = url + "get-user-kontrakan";
  const UrlBayar = url + "bayar";

  const getData = async () => {
    const token = await localforage.getItem("token");
    const namaKontrakan = await localforage.getItem("nama_kontrakan");
    Promise.all([token, namaKontrakan]).then((values) => {
      setToken(values[0]?.toString());
      setNamaKontrakan(values[1]?.toString());
    });

    const namaPengontrak = await axios.get(UrlGetUserKontrakan, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    // console.log(namaPengontrak.data.user[0].name);
    setData(namaPengontrak.data.user);
  };

  useEffect(() => {
    getData();
  }, []);

  const bayar = () => {
    const role = "pemilik";
    const formData = new FormData();
    formData.append("bulan", bulan!);
    formData.append("jumlah_bayar", jumlahBayar.current!.value!.toString());
    formData.append("nama_pengontrak", namaPengontrak!);
    formData.append("bukti_bayar", selectedFile as File);
    formData.append("role", role);
    formData.append("nama_kontrakan", namaKontrakan!);
    formData.append("tanggal_bayar", tanggal_bayar);

    axios
      .post(UrlBayar, formData, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        history.push("/pemilik/pembayaran-berhasil");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="navbar-tambah-pembayaran-pemilik" color="medium">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Riwayat Pembayaran</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonTitle>Pilih Nama Pengontrak</IonTitle>
              <IonList className="dropdown-tambah-pembayaran-pemilik">
                <IonItem>
                  <IonSelect
                    onIonChange={(e) => setNamaPengontrak(e.detail.value)}
                    interface="popover"
                    placeholder="Pilih Nama Pengontrak"
                  >
                    {data?.map((item) => (
                      <IonSelectOption value={item.name} key={item.id}>
                        {item.name}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonTitle className="ion-text-start">Bulan Bayar</IonTitle>
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
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonItem>
                <IonLabel position="floating">Jumlah Bayar</IonLabel>
                <IonInput type="number" ref={jumlahBayar} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center ion-margin-top">
              <IonTitle>Bukti Bayar</IonTitle>
              <div className="image-add-tambah-pembayaran-pemilik">
                {!takenPhoto && <img src={ImageAdd} />}
                {takenPhoto && <img src={takenPhoto.preview} alt="preview" />}
              </div>

              <div className="btn-kamera-gallery-tambah-pembayaran-pemilik">
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
              <IonButton color="favorite" onClick={bayar}>
                Tambah Pembayaran
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PemilikTambahPembayaran;
