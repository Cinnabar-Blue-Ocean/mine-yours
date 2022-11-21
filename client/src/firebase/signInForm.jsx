import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TestDB from './TestDB'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import { auth } from './index.js'

export default function signIn() {
  const [user, setUser] = useState({})
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');



  useEffect(() => {
    onAuthStateChanged(auth, user => {
        setUser(user)
    })
  }, [])

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      console.log(user)
    } catch (err) {
      console.log('error sign up', err)
    }
  }

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user)
    } catch (err) {
      console.log('error signing in', err)
    }
  }

  const signOutUser = async () => {
    await signOut(auth)
  }


  return (
    <>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: "flex",
        flexDirection: "column",
        mb: '2em'
      }}
      noValidate
      autoComplete="off"
    >
    <h3>Sign up</h3>
      <TextField
        id="outlined-required"
        label="Email"
        value={signUpEmail}
        onChange = {e => setSignUpEmail(e.target.value)}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        value={signUpPassword}
        onChange = {e => setSignUpPassword(e.target.value)}
      />
      <Button
        sx={{
          m: 1,
          width: '25ch'
        }}
        onClick={signUp}
          variant="outlined">Log In</Button>
    </Box>
    <hr />
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: "flex",
        flexDirection: "column",
        mb: '2em'
      }}
      noValidate
      autoComplete="off"
    >
    <h3>Sign In</h3>
      <TextField
        id="outlined"
        label="Email"
        value={loginEmail}
        onChange = {e => setLoginEmail(e.target.value)}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        value={loginPassword}
        onChange = {e => setLoginPassword(e.target.value)}
      />
      <Button
        sx={{
          m: 1,
          mb: 5,
          width: '25ch'
        }}
        onClick={signIn}
          variant="outlined">Log In</Button>
      Currently Signed In User: {user?.email}
      <Button
          sx={{
            m: 1,
            mt: 5,
            width: '25ch'
          }}
          onClick={signOutUser}
            variant="outlined">Log Out</Button>
    </Box>
      <hr />

    { user ? <TestDB /> : null }
    </>
  );
}