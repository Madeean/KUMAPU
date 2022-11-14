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
import pemilikEditProfile from "./PemilikEditProfile";
import PemilikHome from "./PemilikHome";
import PemilikOrder from "./PemilikOrder";
import PemilikProfile from "./PemilikProfile";

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
          path="/pemilik/profile/edit"
          component={pemilikEditProfile}
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
