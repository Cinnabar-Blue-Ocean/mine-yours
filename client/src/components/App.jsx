import React, { useEffect, useState } from 'react';
import LandingPage from './Landing Page/LandingPage'
import SignInForm from '../firebase/signInForm.jsx'


const App = () => {

  return (
    <div>
      <div>App</div>
      {/* <LandingPage /> */}
      <SignInForm />
    </div>
  );
};

export default App;
