const express = require('express')
const path = require('path')

const server = express()
server
.use(express.static('public'))
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

server.get('/', (req, res) => {
    return res.render('index')
})

server.listen(5500)