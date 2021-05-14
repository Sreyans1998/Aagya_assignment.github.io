const express = require("express");
const dotenv = require('dotenv');
const app = express();
dotenv.config({path: "./config.env"})


const port = process.env.PORT||3002;
app.use(express.json());

app.use(require('./router/auth'));

app.listen(port, () => {
    console.log(`Connection is setup at ${port}`)
})