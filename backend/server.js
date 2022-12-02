const express = require('express');
const client = require('./config/db');
const app = express()
const PORT = process.env.PORT || 9000;

app.get('/', (req, res) => {
    res.send("Jookebox")
})


client();
app.listen(PORT, () => console.log(`Server on at port ${PORT} `))