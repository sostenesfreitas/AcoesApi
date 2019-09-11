const puppeteer = require('puppeteer')

let puppe = async () => {
	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	})
	const page = await browser.newPage()
	await page.setViewport({ width: 1000, height: 500 })
	await page.goto(
		'https://www.infomoney.com.br/mercados/ferramentas/carteira-de-acompanhamento',
		{ waitUntil: 'load' }
	)

	const result = await page.evaluate(() => {
		let acoes = []
		document.querySelectorAll('tbody > tr').forEach(item => {
			const a = item.innerText.split(/\s+/g)

			acoes.push({
				nome: a[0],
				data: a[1],
				ultima: a[2],
				variacao: a[3],
				fechamento: a[4],
				negociacoes: a[5],
				total: a[6]
			})
		})

		return acoes
	})

	browser.close()
	return await result
}

module.exports = puppe()
