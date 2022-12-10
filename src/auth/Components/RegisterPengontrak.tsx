import {
  IonButton,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSelect,
  IonSelectOption,
  useIonAlert,
  useIonLoading,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import "./RegisterPengontrak.css";

import ImageAdd from "../../image/bx_image-add.png";
import { url } from "../../App";
import axios from "axios";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import localforage from "localforage";
import { useHistory } from "react-router";
import { PushNotifications, Token } from "@capacitor/push-notifications";
import { Toast } from "@capacitor/toast";

const RegisterPengontrak: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const history = useHistory();
  const [present, dismiss] = useIonLoading();
  const [namaKontrakan, setNamaKontrakan] = React.useState<[]>();
  const [token, setToken] = useState<string>();

  const nameRef = useRef<HTMLIonInputElement>(null);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const umur = useRef<HTMLIonInputElement>(null);
  const alamatSesuaiKtpRef = useRef<HTMLIonInputElement>(null);
  const alamatSekarangRef = useRef<HTMLIonInputElement>(null);
  const hargaPerbulan = useRef<HTMLIonInputElement>(null);
  const [takenPhoto, setTakenPhoto] = useState<{
    path: string | undefined;
    preview: string;
  }>();
  const [selectedFile, setSelectedFile] = useState<File>();
  const [selectNamaKontrakan, setSelectNamaKontrakan] = useState<string>();

  const namaKontrakanUrl = url + "get-nama-kontrakan";

  const getToken = () => {
    PushNotifications.checkPermissions().then((res) => {
      if (res.receive !== "granted") {
        PushNotifications.requestPermissions().then((res) => {
          if (res.receive === "denied") {
            // Toast.show({ text: "Push Notification permission denied" });
          } else {
            // Toast.show({ text: "Push Notification permission granted" });
            register();
          }
        });
      } else {
        register();
      }
    });
  };

  const register = () => {
    PushNotifications.register();

    // On success, we should be able to receive notifications
    PushNotifications.addListener("registration", (token: Token) => {
      // Toast.show({ text: `push registration success ${token.value}` });
      setToken(token.value);
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener("registrationError", (error: any) => {
      alert("Error on registration: " + JSON.stringify(error));
    });
  };

  const getNamaKontrakan = () => {
    axios
      .get(namaKontrakanUrl)
      .then((response) => {
        setNamaKontrakan(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getNamaKontrakan();
    getToken();
  }, []);

  const registerUrl = url + "register";

  const registerHandler = () => {
    present({ message: "Loading...", spinner: "circles" });
    var bodyformm = new FormData();
    bodyformm.append("name", nameRef.current!.value!.toString());
    bodyformm.append("email", emailRef.current!.value!.toString());
    bodyformm.append("password", passwordRef.current!.value!.toString());
    bodyformm.append("umur", umur.current!.value!.toString());
    bodyformm.append("role", "pengontrak");
    bodyformm.append("nama_kontrakan", selectNamaKontrakan!);
    bodyformm.append(
      "alamat_sesuai_ktp",
      alamatSesuaiKtpRef.current!.value!.toString()
    );
    bodyformm.append(
      "alamat_kontrakan_sekarang",
      alamatSekarangRef.current!.value!.toString()
    );
    bodyformm.append(
      "harga_perbulan",
      hargaPerbulan.current!.value!.toString()
    );
    bodyformm.append("tokenFCM", token!);
    bodyformm.append("foto_muka", selectedFile as File);

    axios
      .post(registerUrl, bodyformm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        localforage.setItem("email", response.data.user.email);
        localforage.setItem("token", response.data.token);
        localforage.setItem("name", response.data.user.name);
        localforage.setItem("foto_muka", response.data.user.foto_muka);
        localforage.setItem("umur", response.data.user.umur);
        localforage.setItem("tokenFCM", response.data.user.tokenFCM);
        localforage.setItem(
          "nama_kontrakan",
          response.data.user.nama_kontrakan
        );
        dismiss();

        history.push("/pengontrak");
      })
      .catch((error) => {
        console.log(error);
        dismiss();
        presentAlert({
          header: "register gagal, silahkan pakai data lain",
          buttons: ["OK"],
        });
      });
  };

  const takePhotoHandler = async (via: string) => {
    let photo;
    if (via == "camera") {
      photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 80,
        width: 500,
      });
    } else {
      photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos,
        quality: 80,
        width: 500,
      });
    }

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

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonList className="container-register-pengontrak">
            <IonItem>
              <IonSelect
                onIonChange={(e) => setSelectNamaKontrakan(e.detail.value)}
                interface="popover"
                placeholder="Pilih nama kontrakan mu"
              >
                {namaKontrakan?.map((item: any) => (
                  <IonSelectOption
                    value={item.nama_kontrakan}
                    key={item.nama_kontrakan}
                  >
                    {item.nama_kontrakan}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          </IonList>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Nama</IonLabel>
            <IonInput ref={nameRef} />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" ref={emailRef} />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Umur</IonLabel>
            <IonInput type="number" ref={umur} />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Alamat sesuai KTP</IonLabel>
            <IonInput ref={alamatSesuaiKtpRef} />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Alamat kontrakan sekarang</IonLabel>
            <IonInput ref={alamatSekarangRef} />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Harga perbulan</IonLabel>
            <IonInput ref={hargaPerbulan} />
          </IonItem>
          <IonItem className="ion-margin-top">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" ref={passwordRef} />
          </IonItem>
          <div className="image-add-register-pengontrak">
            {!takenPhoto && <img src={ImageAdd} />}
            {takenPhoto && <img src={takenPhoto.preview} alt="preview" />}
          </div>

          <div className="btn-kamera-gallery-register-pengontrak">
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

          <IonButton
            className="ion-margin-top btnregister-register-pengontrak"
            onClick={registerHandler}
          >
            Register
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
export default RegisterPengontrak;
