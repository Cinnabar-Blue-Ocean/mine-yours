import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import firebase from './index.js'

const Proof = () => {
  const [test, setTest] = useState('');
  console.log(firebase.db)
  const clickHandler = () => {
    firebase.db.collection('test').add({test})
      .then(docRef => {
        console.log('Document id', docRef.id)
      })
      .catch(err => err.message)
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
    >
      <TextField id="standard-basic" label="test" variant="standard" />
      <Button variant="outlined" onClick={clickHandler}>Submit</Button>
    </Box>
  );
};

export default Proof;

