import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHTs0823TThhrPDxWjCvQR5sl-1ODd0MQ",
  authDomain: "pulseweb-teachnologies.firebaseapp.com",
  projectId: "pulseweb-teachnologies",
  storageBucket: "pulseweb-teachnologies.firebasestorage.app",
  messagingSenderId: "274989574999",
  appId: "1:274989574999:web:1b9ba66cbc1be8aca2ec12",
  measurementId: "G-LHJ24KNL0P",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
