const express = require('express');
require('dotenv').config();
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/github', (req, res) => {
    res.send('Hello Github!');
});

app.get('/login', (req, res) => {
    res.send('<h1>Please login to your account</h1>');
});

app.get('/youtube', (req, res) => {
    app.send('<h2>Chai aur Code</h2>');
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
