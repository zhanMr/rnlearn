'use strict'
let express = require('express')
let app = express()


app.get('/', function (req, res) {
    res.send('hello world')
})

app.post('/', function (req, res) {
    res.json({data: [1,2,3]})
})

let server = app.listen(3000, function () {
   let host = server.address().address
   let port = server.address().port
    console.log(host, port);
})