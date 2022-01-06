import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDr0sH_zsIAO3BkhByvmmrfMjRD7fcAbSw",
    authDomain: "e-commerce-clothing-db-ca2c7.firebaseapp.com",
    projectId: "e-commerce-clothing-db-ca2c7",
    storageBucket: "e-commerce-clothing-db-ca2c7.appspot.com",
    messagingSenderId: "754561255873",
    appId: "1:754561255873:web:0f660c5e61d68b90f64740",
    measurementId: "G-YP6Y1HM9L9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
