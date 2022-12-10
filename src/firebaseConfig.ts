// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpJlMmNYchTeHnzPjByIkgtZzyle2O_Os",
  authDomain: "pushnotif-cross.firebaseapp.com",
  projectId: "pushnotif-cross",
  storageBucket: "pushnotif-cross.appspot.com",
  messagingSenderId: "908590911482",
  appId: "1:908590911482:web:a4de82605d72c5e1581e43",
  measurementId: "G-XPDS0TCXCP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
