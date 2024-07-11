import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const env = import.meta.env;
const firebaseConfig = {
  apiKey: env.VITE_APP_FIREBASE_API_KEY,
  authDomain: env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: env.VITE_APP_FIREBASE_DATABASE_URL,
  projectId: env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_APP_FIREBASE_APP_ID,
  measurementId: env.VITE_APP_FIREBASE_MEASURE_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

const db_database = getDatabase(firebaseApp);

export { db_database };
