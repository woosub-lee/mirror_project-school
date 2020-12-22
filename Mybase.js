import firebase from "firebase/app";
import "firebase/firestore"

var firebaseConfig = {
    apiKey: process.env.FIRE_BASE_API_KEY,
    authDomain: process.env.FIRE_BASE_AUTH_DOMAIN,
    projectId: process.env.FIRE_BASE_PROJECT_ID,
    storageBucket: process.env.FIRE_BASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIRE_BASE_MESSAGING_ID,
    appId: process.env.FIRE_BASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const dbService = firebase.firestore();