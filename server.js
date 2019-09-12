const express = require('express')
const favicon = require('express-favicon')
const path = require('path')
const scrapy = require('./scrapy')
const cors = require('cors')
const mongose = require('mongoose')
const { store, index } = require('./ControllerAcao')
mongose.connect(
	'mongodb+srv://miojo:miojo@cluster0-fjrrm.mongodb.net/test?retryWrites=true&w=majority',
	{ useNewUrlParser: true }
)
const port = process.env.PORT || 3333
const app = express()

app.use(favicon(__dirname + '/build/favicon.ico'))

app.use(cors())

app.use(express.static(__dirname))

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/apiAcoes', (req, res) => {
	scrapy(res, 'ibovespa')
})

app.listen(port)
