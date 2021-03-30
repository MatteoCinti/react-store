import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyBK6hUiFjHVK_vQtU9DeeA_5Fi3Z7hRr1c",
   authDomain: "react-store-db-1276f.firebaseapp.com",
   projectId: "react-store-db-1276f",
   storageBucket: "react-store-db-1276f.appspot.com",
   messagingSenderId: "369902022480",
   appId: "1:369902022480:web:ba124bae7f9b1e33b9c655"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Trigger 'Select your Google Account' popup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => firebase.auth()
.signInWithPopup(provider);

export default firebase;