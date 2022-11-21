import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {db} from './index.js'
import {
  collection,
  getDocs
} from 'firebase/firestore';

const Test = () => {

  const [users, setUsers] = useState([]);
  const usersRef = collection(db, 'users')

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersRef);
      console.log(data);
    }
  }, []);

  return (
    <div></div>
  )

  // const [entry, setEntry] = useState('');
  // console.log(firebase.dbs);

  // const clickHandler = () => {
  //   firebase.db.collection('test').add({entry})
  //     .then(docRef => {
  //       console.log('Document id', docRef.id)
  //     })
  //     .catch(err => err.message)
  // }

  // return (
  //   <Box
  //     component="form"
  //     sx={{
  //       '& > :not(style)': { m: 1, width: '25ch' },
  //     }}
  //     noValidate>
  //     <TextField id="standard-basic" label="test" variant="standard" />
  //     <Button variant="outlined" /*onClick={clickHandler}*/>Submit</Button>
  //   </Box>
  // )
};

export default Test;