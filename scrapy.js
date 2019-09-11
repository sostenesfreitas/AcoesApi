const request = require('request')
const config = require('./config')
const organize = require('./organize')
const { store, index } = require('./ControllerAcao')

module.exports = (response, carteira) => {
	request(config(carteira), (error, res, body) => {
		if (error) throw new Error(error)
		const { d } = JSON.parse(body)
		acoes = organize(d)
		acoes.length > 0 ? store(response, acoes) : index(response)
	})
}
