const express = require('express');

const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
  res.send('Connected to backend server!')
})

const route = require('./routes');
app.use('/income', route.incomeAPI);
app.use('/expanse', route.expanseAPI);

app.listen(3000, () => console.log('Successfully connected to server!'));