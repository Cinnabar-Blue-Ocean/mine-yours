import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDMQiT_igpgOF7V98WiDjiCbsk0W4ciWA0",
  authDomain: "mine-yours.firebaseapp.com",
  projectId: "mine-yours",
  storageBucket: "mine-yours.appspot.com",
  messagingSenderId: "151804095653",
  appId: "1:151804095653:web:5789d4eb641f2035bf314c",
  measurementId: "G-PH0YQ7F1QJ"
});


let db = firebase.firestore()
let auth = firebase.auth()

export default {
  firebase, db, auth
}
