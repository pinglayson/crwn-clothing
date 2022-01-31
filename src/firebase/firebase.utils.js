import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAinLgsR3SJIAbKyhoTvgmS5DVpjzlKkrA",
    authDomain: "crwn-db-1ce02.firebaseapp.com",
    projectId: "crwn-db-1ce02",
    storageBucket: "crwn-db-1ce02.appspot.com",
    messagingSenderId: "833424556271",
    appId: "1:833424556271:web:873f3ffa293f68b873db1a",
    measurementId: "G-SN5DZB9Q70"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
