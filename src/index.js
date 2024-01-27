import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import firebase from "firebase/app";
// import "firebase/database";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app"; // Import Firebase compat version
import "firebase/compat/database"; //

const firebaseConfig = {
  apiKey: "AIzaSyDwYSGcmE6MHC6Yt0E544_w1bR67Z_mqyo",
  authDomain: "mmkblog-react.firebaseapp.com",
  databaseURL: "https://mmkblog-react-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mmkblog-react",
  storageBucket: "mmkblog-react.appspot.com",
  messagingSenderId: "785770026669",
  appId: "1:785770026669:web:3e249672e3ebf7efc59824",
  measurementId: "G-SR5M9XXYNP",
};
firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
