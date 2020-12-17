import firebase from "firebase/app";
import "firebase/firestore"

var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_ID,
    appId: process.env.APP_ID
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const dbService = firebase.firestore();