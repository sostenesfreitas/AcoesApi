module.exports = acoes => {
	return acoes.map(({ CODIGO, CMP_A, CMP_B, CMP_O, CMP_G, CMP_H, CMP_J }) => {
		return {
			nome: CODIGO,
			data: CMP_A,
			ultima: CMP_B,
			variacao: add(CMP_B, CMP_G, CMP_O),
			fechamento: CMP_G,
			negociacoes: CMP_H,
			total: CMP_J
		}
	})
}

const add = (ultima, fechamento, variacao) => {
	return ultima > fechamento ? `+${variacao}` : `-${variacao}`
}
