const { Schema, model } = require('mongoose')

var acao = new Schema({
	nome: String,
	data: String,
	ultima: String,
	variacao: String,
	fechamento: String,
	negociacoes: String,
	total: String
})
const AcaoSchema = new Schema(
	{
		acoes: [acao]
	},
	{
		timestamps: true
	}
)
module.exports = model('Acao', AcaoSchema)
