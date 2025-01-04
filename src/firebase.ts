import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
  apiKey: "AIzaSyBbx1d-ECHKAXj3OlIpzXH4PDtNl9kO9S4",
  authDomain: "mobile-wedding-invitatio-43104.firebaseapp.com",
  databaseURL: "https://mobile-wedding-invitatio-43104-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mobile-wedding-invitatio-43104",
  storageBucket: "mobile-wedding-invitatio-43104.firebasestorage.app",
  messagingSenderId: "309831917653",
  appId: "1:309831917653:web:4fccf2fdf92e1df4e774dc",
  measurementId: "G-7VYEWGGWR1"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
export const analytics = getAnalytics(firebaseApp);
