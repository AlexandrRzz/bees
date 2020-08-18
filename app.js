const express = require('express');
const config = require('config');
const mongoose = require('mongoose');


const app = express();

let PORT;
if (config.has("port")) {
    PORT = config.get("port");
}
else {
    PORT = 5001;   
}



app.get('/', (req, res) => {
    res.send('Hello World!!!!!')
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})