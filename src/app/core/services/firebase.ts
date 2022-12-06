// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDmhyLmRnky6JrKFkZaII7hmu2MMOPu0kY',
  authDomain: 'messenger-clone-5dadd.firebaseapp.com',
  projectId: 'messenger-clone-5dadd',
  storageBucket: 'messenger-clone-5dadd.appspot.com',
  messagingSenderId: '809160590254',
  appId: '1:809160590254:web:c0f4a954d885ce15047e3f',
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
