const express = require('express')
const app = express()
const port = 3000
const db = require('../database')
const Controller = require('./controller.js');
const parser = require('body-parser');
const path = require('path');

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.get('/api/groceries', (req, res) => {
  Controller.getGroceries(req, res);
})

app.post('/api/groceries', (req, res) => {
  console.log('Recieved POST request..');
  Controller.addGroceries(req, res);
});

app.delete('/api/groceries', (req, res) => {
  Controller.deleteGroceries(req,res);
});

app.put('/api/groceries', (req,res) => {
  Controller.updateGroceries(req,res);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

