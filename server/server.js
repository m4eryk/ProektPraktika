const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const api = require('./route/api')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());



app.use('/api', api)

app.get('/', function (res, req){
    req.send('Hello from server!')
})

app.listen(PORT, () =>{
    console.log('Server raning in localhost:' + PORT) 
})