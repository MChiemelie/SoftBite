// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBBImUQpGTXq1-PYOEBMAaiEH_xNwa9o0",
  authDomain: "soft-bite.firebaseapp.com",
  projectId: "soft-bite",
  storageBucket: "soft-bite.appspot.com",
  messagingSenderId: "444358217008",
  appId: "1:444358217008:web:e9078f82791eb7b6b5ccf5",
  measurementId: "G-5BFS13HY8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ETJTMK1FXQ');