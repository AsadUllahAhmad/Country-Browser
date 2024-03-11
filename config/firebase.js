// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6jbUEcXEV_zzbCF_0tOYdTug_UosaVRY",
  authDomain: "country-browser.firebaseapp.com",
  projectId: "country-browser",
  storageBucket: "country-browser.appspot.com",
  messagingSenderId: "642761376673",
  appId: "1:642761376673:web:6ae7ca2518b497875481e0"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
console.log('app : ', app)
export const auth = getAuth(app);
console.log('auth : ', auth);
 