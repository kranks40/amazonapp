import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
        apiKey: "AIzaSyAZVSGECJDJEPJzQKZ8wuCLENVOV-S1owc",
        authDomain: "app-38e75.firebaseapp.com",
        databaseURL: "https://app-38e75.firebaseio.com",
        projectId: "app-38e75",
        storageBucket: "app-38e75.appspot.com",
        messagingSenderId: "324006117844",
        appId: "1:324006117844:web:69643fe6b91757c24bd641",
        measurementId: "G-0LV0FPWC0D"
});

//const db = firebase.firebase();
const auth = firebase.auth();

export { auth };