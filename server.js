const express = require('express');
const cors = require('cors');
const app = express();

const Connection = require('./src/Database/Connection');
require('./src/Routes/index')
(app);


app.use(cors());
app.use(express.json());
app.listen(3333);