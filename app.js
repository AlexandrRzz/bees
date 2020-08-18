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

async function start() {
    try {
        await mongoose.connect(config.get("mongoURI"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => {
            console.log(`Example app listening at http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log("MongoDb Server Error:", error.message);
        process.exit(1);
    }
}

start();

app.get('/', (req, res) => {
    res.send('Hello World!!!!!')
})

