const Acao = require('./ModelAcao')

module.exports = {
	async store(res, t) {
		Acao.deleteMany({})
		const acao = await Acao.create({
			acoes: t
		})
		return res.send(acao)
	},

	async index(res) {
		const acoes = await Acao.find()
			.sort({ _id: -1 })
			.limit(1)
		return res.send(acoes)
	}
}
