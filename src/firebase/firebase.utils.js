import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAohq_A1_lJ3QQYwkgSYQn4nMJlKiurI5Q",
    authDomain: "reactecomlesson.firebaseapp.com",
    databaseURL: "https://reactecomlesson.firebaseio.com",
    projectId: "reactecomlesson",
    storageBucket: "reactecomlesson.appspot.com",
    messagingSenderId: "92051564480",
    appId: "1:92051564480:web:776c12c0c95e3029bd8a25",
    measurementId: "G-CT2YC9V8FY"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;