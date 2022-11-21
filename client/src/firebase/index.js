import {initializeApp} from 'firebase/app';
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDMQiT_igpgOF7V98WiDjiCbsk0W4ciWA0",
  authDomain: "mine-yours.firebaseapp.com",
  projectId: "mine-yours",
  storageBucket: "mine-yours.appspot.com",
  messagingSenderId: "151804095653",
  appId: "1:151804095653:web:5789d4eb641f2035bf314c",
  measurementId: "G-PH0YQ7F1QJ"
};

// initialize firebase app so front-end can connect to it
const app = initializeApp(firebaseConfig);

// initialize services
export const db = getFirestore(app);

// reference the collection
const colRef = collection(db, 'test');

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    console.log(snapshot.docs);
  })


//const auth = firebase.auth()

// export default {
//   firebase, db, auth
// }