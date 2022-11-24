import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import localforage from "localforage";
import React, { useEffect, useState } from "react";
import "./PengontrakPermintaanPembayaran.css";
import { url } from "../App";
import { useHistory } from "react-router";

const PengontrakPermintaanPembayaran: React.FC = () => {
  const history = useHistory();
  const [token, setToken] = useState<string>();
  const [data, setData] = useState([]);

  const getToken = async () => {
    try {
      const token = await localforage.getItem("token");
      Promise.all([token]).then((values) => {
        setToken(values[0]?.toString());
      });

      await axios
        .get(requestPembayaranUrl, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          setData(response.data.data);
        })
        .catch((response) => {
          console.log(response);
        });
    } catch (err) {
      console.log(err);
    }
    return false;
  };

  const requestPembayaranUrl = url + "get-request-pembayaran";

  // const getData = () => {
  //   axios
  //     .get(requestPembayaranUrl, {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     })
  //     .then((response) => {
  //       setData(response.data.data);
  //     })
  //     .catch((response) => {
  //       console.log(response);
  //     });
  // };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="favorite">
          <IonTitle className="ion-text-center title-permintaan-pembayaran-pengontrak">
            Permintaan Pembayaran
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {data.map((item: any) => (
          <div
            className="ion-margin-top card-permintaan-pembayaran-pengontrak"
            key={item.id}
          >
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonTitle>{item.nama_pengontrak}</IonTitle>
                </IonCol>
                <IonCol className="ion-text-end">
                  <IonTitle>{item.tanggal_bayar}</IonTitle>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-text-center">
                  <IonTitle>{item.status_konfirmasi}</IonTitle>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default PengontrakPermintaanPembayaran;
