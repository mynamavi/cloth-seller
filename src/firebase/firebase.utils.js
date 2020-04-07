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

export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log('error creating user ', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;