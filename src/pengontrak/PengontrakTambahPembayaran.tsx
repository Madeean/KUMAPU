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
  useIonLoading,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./PengontrakTambahPembayaran.css";
import ImageAdd from "../image/bx_image-add.png";
import localforage from "localforage";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { url } from "../App";
import axios from "axios";
import { useHistory } from "react-router";
import { Toast } from "@capacitor/toast";
import {
  ActionPerformed,
  PushNotifications,
  PushNotificationSchema,
} from "@capacitor/push-notifications";

const PengontrakTambahPembayaran: React.FC = () => {
  const [present, dismiss] = useIonLoading();

  const [name, setName] = useState<string>();
  const [namaKontrakan, setNamaKontrakan] = useState<string>();
  const role = "pengontrak";
  const [bulan, setBulan] = useState<string>();
  const jumlahBayarRef = React.useRef<HTMLIonInputElement>(null);
  // const [date, setDate] = useState<string>();

  const [takenPhoto, setTakenPhoto] = useState<{
    path: string | undefined;
    preview: string;
  }>();
  const [selectedFile, setSelectedFile] = useState<File>();
  const [token, setToken] = useState<string>();
  const [tokenFCM, setTokenFCM] = useState<string>();
  const [tokenPemilik, settokenPemilik] = useState<string>();

  const current = new Date();
  const tanggal_bayar = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;

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

  const getData = async () => {
    // localforage.getItem("name").then((value: any) => {
    //   setName(value.toString());
    // });
    // localforage.getItem("token").then((value: any) => {
    //   setToken(value.toString());
    // });
    // localforage.getItem("nama_kontrakan").then((value: any) => {
    //   setNamaKontrakan(value.toString());
    // });
    // localforage.getItem("tokenFCM").then((value: any) => {
    //   setTokenFCM(value.toString());
    // });
    const name = await localforage.getItem("name");
    const tokenSP = await localforage.getItem("token");
    const nama_kontrakan = await localforage.getItem("nama_kontrakan");
    const tokenFCM = await localforage.getItem("tokenFCM");

    Promise.all([name, tokenSP, nama_kontrakan, tokenFCM]).then(
      (values: any) => {
        setName(values[0].toString());
        setToken(values[1].toString());
        setNamaKontrakan(values[2].toString());
        setTokenFCM(values[3].toString());
      }
    );

    if (tokenSP != null) {
      getPemilik(tokenSP.toString(), nama_kontrakan?.toString()!);
      // Toast.show({ text: "token pemilik " + tokenSP });
    } else {
      getData();
    }
  };

  const getPemilik = async (tokensp: string, namakontrakan: string) => {
    const url = `https://madeekan.madee.my.id/api/get-pemilik/${namakontrakan}`;
    await axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + tokensp,
        },
      })
      .then((response) => {
        Toast.show({ text: "token pemilik " + response.data.user.tokenFCM });
        settokenPemilik(response.data.user.tokenFCM);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const kirimNotif = async () => {
    const url = `https://fcm.googleapis.com/fcm/send`;
    // const body = {
    //   to: tokenPemilik?.toString(),
    //   notification: {
    //     title: "Pembayaran",
    //     body: `Pembayaran dari ${name}`,
    //   },
    // };

    // axios
    //   .post(
    //     url,
    //     {
    //       to: tokenPemilik?.toString(),
    //       notification: {
    //         title: "Pembayaran",
    //         body: `Pembayaran dari ${name}`,
    //       },
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization:
    //           "key=AAAA04w9D_o:APA91bFXZjR5R6QICmIkVlU4YKOlBG6_fIvS3swMeWfF1PH-kYWgQVZpbcBdhmR71_J0JHNa-mCGOak1N5wbGMVtWmh_8hltnb5aRouTvzDxiBOj1Pwjan5OS5F5Yd80WHlV1rz_rEU1",
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     Toast.show({ text: "notif berhasil dikirim" });
    //   })
    //   .catch((error) => {
    //     Toast.show({ text: "notif gagal dikirim" });
    //   });

    var data = JSON.stringify({
      to: tokenPemilik?.toString(),
      notification: {
        title: "Pembayaran",
        body: "Pembayaran dari pengontrak " + name?.toString(),
      },
    });

    var config = {
      method: "post",
      url: "https://fcm.googleapis.com/fcm/send",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "key=AAAA04w9D_o:APA91bFXZjR5R6QICmIkVlU4YKOlBG6_fIvS3swMeWfF1PH-kYWgQVZpbcBdhmR71_J0JHNa-mCGOak1N5wbGMVtWmh_8hltnb5aRouTvzDxiBOj1Pwjan5OS5F5Yd80WHlV1rz_rEU1",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const tambahPembayaranUrl = url + "bayar";

  const tambahPembayaran = () => {
    present({ message: "Loading...", spinner: "circles" });

    const bodyForm = new FormData();
    bodyForm.append("nama_pengontrak", name!);
    bodyForm.append("role", role);
    bodyForm.append("tanggal_bayar", tanggal_bayar);
    bodyForm.append("jumlah_bayar", jumlahBayarRef.current?.value?.toString()!);
    bodyForm.append("bukti_bayar", selectedFile as File);
    bodyForm.append("nama_kontrakan", namaKontrakan!);
    bodyForm.append("bulan", bulan!);

    axios
      .post(tambahPembayaranUrl, bodyForm, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        kirimNotif();
        dismiss();
        history.push("/pengontrak/pembayaran-berhasil");
      })
      .catch((error) => {
        console.log(error);
        dismiss();
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
              {/* <IonInput
                type="date"
                className="ioninpu-tambah-pembayaran-pengontrak"
                ref={dateRef}
              /> */}

              <IonList className="container-register-pengontrak">
                <IonItem>
                  <IonSelect
                    onIonChange={(e) => setBulan(e.detail.value)}
                    interface="popover"
                    placeholder="Pilih Bulan"
                  >
                    <IonSelectOption value="1">January</IonSelectOption>
                    <IonSelectOption value="2">February</IonSelectOption>
                    <IonSelectOption value="3">Maret</IonSelectOption>
                    <IonSelectOption value="4">April</IonSelectOption>
                    <IonSelectOption value="5">Mei</IonSelectOption>
                    <IonSelectOption value="6">Juni</IonSelectOption>
                    <IonSelectOption value="7">July</IonSelectOption>
                    <IonSelectOption value="8">Agustus</IonSelectOption>
                    <IonSelectOption value="9">Oktober</IonSelectOption>
                    <IonSelectOption value="10">September</IonSelectOption>
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
