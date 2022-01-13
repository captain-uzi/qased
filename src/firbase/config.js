import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDU-ftjO7Y0PHHmR7UMeBsbCdo8nYopl6A",
  authDomain: "uns-app-testing.firebaseapp.com",
  projectId: "uns-app-testing",
  storageBucket: "uns-app-testing.appspot.com",
  messagingSenderId: "186641919701",
  appId: "1:186641919701:web:5d5db61bc68fad6f51bc5c",
  measurementId: "G-266LNVX4JN",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
