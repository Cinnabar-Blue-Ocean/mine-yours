import React, {useState, useEffect} from 'react';
import Test from '../firebase/Test'
// import {db} from '../firebase/index.js'
// import {
//   collection,
//   getDocs
// } from 'firebase/firestore';

const App = () => {
  return (
    <div>
      <div>App</div>
      <Test />
    </div>
  );
};

export default App;