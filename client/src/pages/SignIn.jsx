import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/authMethods.js";
import { Box,Button,TextField } from '@mui/material';

function SignIn() {
  const {signIn, signInWithGoogle, resetPassword,signOutUser,user} = useAuth();

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();


  const handleSignIn = async (e) => {
    e.preventDefault();

    console.log(loginEmail,loginPassword)

    if (!loginEmail || !loginPassword) {
      return setError("Please fill in all fields");
    }

    try {
      setLoading(true);
      const user = await signIn(loginEmail, loginPassword);
      navigate(`/profile/${user.user.uid}`, { replace: true })

    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  const handleSignOut = async (e)=>{
    e?e.preventDefault():null;
    try {
      setLoading(true);
      await signOutUser()
    } catch (error) {
      setError(error.message);
    }

  }

  const handleGoogleSignIn = async () => {
    handleSignOut()
    try {
      setGoogleLoading(true);
      await signInWithGoogle();
      navigate("/userInfo", { replace: true })
    } catch (error) {
      setError(error.message);
    }

    setGoogleLoading(false);
  };

  // const handlePassword = async () => {
  //   setMessage(null);
  //   setError(null);

  //   const { email } = values;

  //   if (!email) {
  //     return setError("Please enter an email first");
  //   }

  //   try {
  //     setLoading(true);
  //     await resetPassword(email);
  //     setMessage("Successfully sent email reset link");
  //   } catch (error) {
  //     setError(error.message);
  //   }

  //   setLoading(false);
  // };

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
        onClick={handleSignIn}
          variant="outlined">Log In</Button>
      Currently Signed In User: {user?.email}
      <Button
          sx={{
            m: 1,
            mt: 5,
            width: '25ch'
          }}
          onClick={handleSignOut}
            variant="outlined">Log Out</Button>
      <Button
          sx={{
            m: 1,
            mt: 5,
            width: '25ch'
          }}
          onClick={handleGoogleSignIn}
            variant="outlined">SignIn with Google</Button>
      <Button
        sx={{
          m: 1,
          width: '25ch'
        }}
        onClick={()=>navigate("/signUp", { replace: true })}
          variant="outlined">SignUp</Button>
    </Box>


      <hr />

    {/* { user ? <TestDB /> : null } */}
    </>
  );
}

export default SignIn;
