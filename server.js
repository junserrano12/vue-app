const express = require('express');
const path = require('path')

const history = require('connect-history-api-fallback');

const app = express();


const port = process.env.PORT || 4000;

app.get('/api/helloworld', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))