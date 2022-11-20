import React from 'react';
import LandingPage from './Landing Page/LandingPage'
import FirebaseProof from '../firebase/FirebaseProof.jsx'
import firebase from '../firebase/index.js'

const App = () => {
  return (
    <div>
      <div>App</div>
      {/* <LandingPage /> */}
      <FirebaseProof />
    </div>
  );
};

export default App;
