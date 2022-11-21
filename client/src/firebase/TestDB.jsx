import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TestDB = () => {
  const [test, setTest] = useState('');

  const clickHandler = () => {

  }

  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: "flex",
        flexDirection: "column",
      }}
    >
        <TextField
          required
          id="outlined-required"
          label="test"
          value={test}
          onChange = {e => setTest(e.target.value)}
        />
        <Button
        sx={{
          m: 1,
          width: '25ch'
        }}
        onClick={clickHandler}
          variant="outlined">Submit</Button>
    </Box>
  );
};

export default TestDB;

