const express = require('express')
const path = require('path')

const server = express()
server.use(express.static('public'))

server.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

server.listen(5500)