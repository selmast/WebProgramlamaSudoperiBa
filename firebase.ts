import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2J3MxJ9lvXzsncgl4pQYPZVfMqoaGoqA",
    authDomain: "sudoperiba-b53cb.firebaseapp.com",
    projectId: "sudoperiba-b53cb",
    storageBucket: "sudoperiba-b53cb.firebasestorage.app",
    messagingSenderId: "585492442228",
    appId: "1:585492442228:web:2a2ec1ecc8ea3e80b03521",
    measurementId: "G-YT3S6ETRB4",
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
