import { IonContent, IonImg, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import logo from "../image/SplashScreen.png";

import "./SplashScreen.css";
import { useHistory } from "react-router";
import {
  PushNotificationSchema,
  PushNotifications,
  Token,
  ActionPerformed,
} from "@capacitor/push-notifications";
import { Toast } from "@capacitor/toast";

const SplashScreen: React.FC = () => {
  const history = useHistory();
  const nullEntry: any[] = [];
  const [notifications, setnotifications] = useState(nullEntry);

  const getToken = async () => {
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

  const register = async () => {
    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    // On success, we should be able to receive notifications
    PushNotifications.addListener("registration", (token: Token) => {
      // Toast.show({ text: `push registration success ${token.value}` });
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener("registrationError", (error: any) => {
      // alert("Error on registration: " + JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotificationSchema) => {
        setnotifications((notifications) => [
          ...notifications,
          {
            id: notification.id,
            title: notification.title,
            body: notification.body,
            type: "foreground",
          },
        ]);
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: ActionPerformed) => {
        setnotifications((notifications) => [
          ...notifications,
          {
            id: notification.notification.data.id,
            title: notification.notification.data.title,
            body: notification.notification.data.body,
            type: "action",
          },
        ]);
      }
    );
  };

  useEffect(() => {
    getToken();
    setTimeout(() => {
      history.push("/login");
    }, 3000);
  }, []);

  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <div className="centered-element">
            <img src={logo} alt="centered" />
            <h1 className="text-gede ion-text-center">
              Welcome to
              <br />
              KUMAPU
            </h1>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SplashScreen;
