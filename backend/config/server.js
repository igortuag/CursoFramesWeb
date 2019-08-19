const port = 3003

const boodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(boodyParser.urlencoded({ extended: true }))
server.use(boodyParser.json())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server