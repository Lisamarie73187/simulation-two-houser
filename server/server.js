require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const massive = require('massive');


const app = express(); 
app.use(bodyParser.json());

app.use(cors());


massive(process.env.CONNECTION_STRING).then(db => {app.set('db',db);})






const port = 3001;
app.listen(port, () => console.log(`I'm listening...on port ${port}`));