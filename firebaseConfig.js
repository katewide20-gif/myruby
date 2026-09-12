import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Same Firebase project as your Ruby website (ruby-54b40)
const firebaseConfig = {
  apiKey: "AIzaSyDXJOwGuQ4UVFHh229OMQIQEXyUhv59T-E",
  authDomain: "ruby-54b40.firebaseapp.com",
  projectId: "ruby-54b40",
  storageBucket: "ruby-54b40.firebasestorage.app",
  messagingSenderId: "539058257239",
  appId: "1:539058257239:web:97b13446f83304c6119212"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const db = getFirestore(app);
