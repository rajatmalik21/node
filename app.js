const express = require('express');
const app = express();

app.get('/', (req,res) => {
    console.log("Welcome to the homepage!")
});

const port = process.env.port || 3000
app.listen(port,() => {
    console.log("Project for submission")
});

