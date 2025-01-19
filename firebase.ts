import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBA_1biQnV4k1ZPKZz54oDCA8rynrO2arg",
  authDomain: "sudoperiba-abbdc.firebaseapp.com",
  projectId: "sudoperiba-abbdc",
  storageBucket: "sudoperiba-abbdc.firebasestorage.app",
  messagingSenderId: "680607767147",
  appId: "1:680607767147:web:236dd6998095cda572af2e",
  measurementId: "G-2D7M8371M6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(firebaseApp);

// Initialize Analytics (browser only)
if (typeof window !== "undefined") {
    try {
        getAnalytics(firebaseApp);
    } catch (error) {
        console.warn("Analytics could not be initialized:", error);
    }
}

export { firebaseApp };