import React, { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/authMethods.js";
import { Paper,Box,Button,TextField,Tab,Tabs,Stack} from '@mui/material';
import {TabPanel} from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import SignUpTab from '../components/sign/SignUpTab.jsx'
import SignInTab from '../components/sign/SignInTab.jsx'

function SignIn() {

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack
    display='grid'
    alignItems="center"
    justifyContent="center"
    flexDirection='column'
    gap="40px"


    sx={{ width: '100%' }}>
      <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="SignIn" value="1" />
            <Tab label="SignUp" value="2" />
        </Tabs>
      </Box>
        <TabPanel value="1">
          <SignInTab />
        </TabPanel>
        <TabPanel value="2">
          <SignUpTab />
          </TabPanel>
        </TabContext>
    </Stack>
  );
}

export default SignIn;