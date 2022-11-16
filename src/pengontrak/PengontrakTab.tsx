import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import {
  arrowBackCircleSharp,
  documentText,
  home,
  mailOutline,
  person,
  videocamOutline,
} from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import PengontrakEditProfile from "./PengontrakEditProfile";
import PengontrakHome from "./PengontrakHome";
import PengontrakPembayaranBerhasil from "./PengontrakPembayaranBerhasil";
import PengontrakPermintaanPembayaran from "./PengontrakPermintaanPembayaran";
import PengontrakProfile from "./PengontrakProfile";
import PengontrakRiwayatPembayaran from "./PengontrakRiwayatPembayaran";
import PengontrakTambahPembayaran from "./PengontrakTambahPembayaran";

const PengontrakTab: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact from="/pengontrak" to="/pengontrak/home" />
        <Route exact path="/pengontrak/home" component={PengontrakHome} />
        <Route
          exact
          path="/pengontrak/permintaan-pembayaran"
          component={PengontrakPermintaanPembayaran}
        />
        <Route exact path="/pengontrak/profile" component={PengontrakProfile} />
        <Route
          exact
          path="/pengontrak/profile/edit"
          component={PengontrakEditProfile}
        />
        <Route
          exact
          path="/pengontrak/riwayat-pembayaran"
          component={PengontrakRiwayatPembayaran}
        />
        <Route
          exact
          path="/pengontrak/tambah-pembayaran"
          component={PengontrakTambahPembayaran}
        />
        <Route
          exact
          path="/pengontrak/pembayaran-berhasil"
          component={PengontrakPembayaranBerhasil}
        />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" color="medium">
        <IonTabButton tab="home" href="/pengontrak/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="permintaan-pembayaran"
          href="/pengontrak/permintaan-pembayaran"
        >
          <IonIcon icon={documentText} />
          <IonLabel>Permintaan Pembayaran</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/pengontrak/profile">
          <IonIcon icon={person} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default PengontrakTab;
