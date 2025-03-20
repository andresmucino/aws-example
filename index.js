const http = require('http');
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send({message: 'hello world'})
})

app.listen(3000);
console.log('server on port 3000')