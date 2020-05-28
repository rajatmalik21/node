const express = require('express');
const app = express();

app.get('/', (req,res) => {
    console.log("Welcome to the homepage!")
});

app.listen(3000,() => {
    console.log("Project for submission")
});

