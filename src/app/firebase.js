// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhxKaG_awQARlZ-J3u9Wu6xLEJ_bwDOko",
  authDomain: "cfirebase-autenticacion.firebaseapp.com",
  projectId: "cfirebase-autenticacion",
  storageBucket: "cfirebase-autenticacion.appspot.com",
  messagingSenderId: "345175402080",
  appId: "1:345175402080:web:34f33fea6d77b1d6378505",
  measurementId: "G-X2KVZ9XGL1"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)