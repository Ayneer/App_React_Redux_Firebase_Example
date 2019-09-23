import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAK_YeKZTf37CgvWH_cHxWgJ8s0cobhAOU",
    authDomain: "app-react-firebase-921d3.firebaseapp.com",
    databaseURL: "https://app-react-firebase-921d3.firebaseio.com",
    projectId: "app-react-firebase-921d3",
    storageBucket: "app-react-firebase-921d3.appspot.com",
    messagingSenderId: "105915742973",
    appId: "1:105915742973:web:20e4b89a66f88c722fdc94"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;