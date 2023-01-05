const cheerio = require('cheerio');
const request = require('request-promise');

const URL = 'https://www.leagueoflegends.com/en-us/champions/';
let campeones = [];
async function datos() {
	const html = await request(URL);
	const $ = cheerio.load(html);
	$('.style__Wrapper-n3ovyt-0').each((i, el) => {
		const campeon = $(el).find('.style__Text-n3ovyt-3').text();
		const img = $(el).find('img').attr('src');
		campeones[i + 1] = {
			campeon,
			img,
		};
	});

	return { campeones };
}
datos();

module.exports = campeones;
