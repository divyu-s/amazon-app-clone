// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB8WbrftOSOjRGNM5_n_opGLOX-TezSJmU",
    authDomain: "app-clone-c0944.firebaseapp.com",
    projectId: "app-clone-c0944",
    storageBucket: "app-clone-c0944.appspot.com",
    messagingSenderId: "266850529454",
    appId: "1:266850529454:web:0fc30c2094e13d71033d3f",
    measurementId: "G-EYS4P15QY7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};