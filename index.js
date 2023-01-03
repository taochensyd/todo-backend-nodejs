const express = require('express')
const app = express()
const port = 3000

const taskRoute = require('./routes/task');

const db = require("./Database/Database")
require('dotenv').config();
app.use(express.json());

app.use('/api/v1/task', taskRoute);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})