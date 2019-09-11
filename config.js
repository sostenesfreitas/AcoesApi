module.exports = carteira => {
	return {
		method: 'GET',
		url:
			'https://api.infomoney.com.br/carteiras-acompanhamento/getstockfollow/0/0/' +
			carteira,
		headers: {
			'cache-control': 'no-cache',
			Connection: 'keep-alive',
			Origin: 'https://www.infomoney.com.br',
			'Content-Type': 'application/json; charset=utf-8',
			Referer:
				'https://www.infomoney.com.br/mercados/ferramentas/carteira-de-acompanhamento',
			'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
			Accept: 'application/json, text/javascript, */*; q=0.01',
			'User-Agent':
				'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0'
		}
	}
}
