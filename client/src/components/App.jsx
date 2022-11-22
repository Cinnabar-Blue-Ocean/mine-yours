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
import { getUsers, getListingByName } from '../firebase/retrieveData';

const App = () => {

  const [users, setUsers] = useState([]);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    getListingByName()
      .then(data => {
        setListings(data);
      })
  }, []);

  useEffect(() => {
    console.log('listings', listings);
  }, [])


  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/userInfo" element={<CollectUserInfo />} />
      </Routes>
    </Box>
  );
};

export default App;



