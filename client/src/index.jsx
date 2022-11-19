import React from 'react';
import ReactDOM from 'react-dom/client';
import * as firebase from 'firebase';

import App from './components/App';

const firebaseConfig = {
  apiKey: "AIzaSyDMQiT_igpgOF7V98WiDjiCbsk0W4ciWA0",
  authDomain: "mine-yours.firebaseapp.com",
  projectId: "mine-yours",
  storageBucket: "mine-yours.appspot.com",
  messagingSenderId: "151804095653",
  appId: "1:151804095653:web:5789d4eb641f2035bf314c",
  measurementId: "G-PH0YQ7F1QJ"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);