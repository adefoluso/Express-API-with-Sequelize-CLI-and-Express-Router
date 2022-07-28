const express = require('express');
const routes = require('./routes');
const logger = require('morgan');
const bodyParser = require('body-parser')

const app = express();



app.use(logger('dev'))

app.use(bodyParser.json())

app.use('/api', routes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))