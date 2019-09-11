const express = require('express')
const favicon = require('express-favicon')
const path = require('path')
const get = require('./acoes')
const scrapy = require('./scrapy')
const cors = require('cors')
const mongose = require('mongoose')
const { store, index } = require('./ControllerAcao')
mongose.connect(
	'',
	{ useNewUrlParser: true }
)
const port = process.env.PORT || 3333
const app = express()

app.use(favicon(__dirname + '/build/favicon.ico'))

app.use(cors())

app.use(express.static(__dirname))

app.use(express.static(path.join(__dirname, 'build')))

app.get('/ping', function(req, res) {
	return res.send('pong')
})

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

respond = async (req, res) => {
	get
		.then(async t => {
			t.length > 0 ? store(res, t) : index(res)
		})
		.catch(err => {
			console.log(err)
		})
}

app.get('/apiAcoes', (req, res) => {
	scrapy(res, 'ibovespa')
})

app.get('/acoes/', respond)

app.listen(port)
