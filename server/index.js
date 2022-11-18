require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const PORT = 4000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});