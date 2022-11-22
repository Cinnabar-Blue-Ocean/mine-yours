import React, {useState, useEffect} from 'react';
// import LandingPage from './Landing Page/LandingPage'
// import Navbar from './navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from '../pages/Home.jsx'
import SignIn from '../pages/SignIn.jsx'
import SignUp from '../pages/SignUp.jsx'
import Profile from '../pages/Profile.jsx'
import CollectUserInfo from '../pages/CollectUserInfo.jsx'
import Loader from '../pages/Loading.jsx'
import { getUser, getListingByName } from '../firebase/retrieveData';

const App = () => {

  const [user, setUser] = useState([]);
  const [listing, setListing] = useState([]);

  // useEffect(() => {
  //   getUser('abc')
  //     .then(data => {
  //       setUser(data);
  //     })
  // }, []);

  // useEffect(() => {
  //   console.log('user', user);
  // }, []);


  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/userInfo" element={<CollectUserInfo />} />
        <Route path="/loading" element={<Loader />} />
      </Routes>
    </Box>
  );
};

export default App;



