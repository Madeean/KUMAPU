import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { documentText, home, person } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import PemilikDaftarBelumBayarBulanan from "./PemilikDaftarBelumBayarBulanan";
import PemilikDaftarBelumLunas from "./PemilikDaftarBelumLunas";
import PemilikDaftarOrangNgontrak from "./PemilikDaftarOrangNgontrak";
import PemilikDetailPengontrak from "./PemilikDetailPengontrak";
import PemilikDetailTransaksi from "./PemilikDetailTransaksi";
import PemilikEditProfile from "./PemilikEditProfile";
import pemilikEditProfile from "./PemilikEditProfile";
import PemilikHome from "./PemilikHome";
import PemilikOrder from "./PemilikOrder";
import PemilikPembayaranBerhasil from "./PemilikPembayaranBerhasil";
import PemilikProfile from "./PemilikProfile";
import PemilikRequestPembayaran from "./PemilikRequestPembayaran";
import PemilikTambahPembayaran from "./PemilikTambahPembayaran";

const PemilikTab: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact from="/pemilik" to="/pemilik/home" />
        <Route exact path="/pemilik/home" component={PemilikHome} />
        <Route exact path="/pemilik/order" component={PemilikOrder} />
        <Route exact path="/pemilik/profile" component={PemilikProfile} />
        <Route
          exact
          path="/pemilik/order/daftarorangngontrak"
          component={PemilikDaftarOrangNgontrak}
        />
        <Route
          exact
          path="/pemilik/profile/edit"
          component={PemilikEditProfile}
        />
        <Route
          exact
          path="/pemilik/tambah-pembayaran"
          component={PemilikTambahPembayaran}
        />
        <Route
          exact
          path="/pemilik/pembayaran-berhasil"
          component={PemilikPembayaranBerhasil}
        />
        <Route
          exact
          path="/pemilik/daftar-belum-lunas"
          component={PemilikDaftarBelumLunas}
        />
        <Route
          exact
          path="/pemilik/daftar-belum-bayar-bulanan"
          component={PemilikDaftarBelumBayarBulanan}
        />
        <Route
          exact
          path="/pemilik/request-pembayaran"
          component={PemilikRequestPembayaran}
        />
        <Route
          exact
          path="/pemilik/detail-transaksi/:detailTransaksiId"
          component={PemilikDetailTransaksi}
        />
        <Route
          exact
          path="/pemilik/detail-pengontrak/:detailPengontrakId"
          component={PemilikDetailPengontrak}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" color="medium">
        <IonTabButton tab="home" href="/pemilik/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="order" href="/pemilik/order">
          <IonIcon icon={documentText} />
          <IonLabel>Order</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/pemilik/profile">
          <IonIcon icon={person} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default PemilikTab;
