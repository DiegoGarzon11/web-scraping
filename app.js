const cheerio = require('cheerio');
const request = require('request-promise');

const url = 'http://books.toscrape.com/';

let books = [];
const getBooks = async () => {
	const html = await request(url);
	const $ = cheerio.load(html);
	$('.product_pod')
		.each((i, el) => {
			const title = $(el).find('.product_pod h3').text();
			const price = $(el).find('.price_color').text();
			const img = $(el).find('img').attr('src');
			books[i + 1] = {
				title,
				price,
				img,
			};
		})
		.get();
	return books;
};
getBooks()
	.then((e) => console.table(e))
	.catch((e) => console.table(e));

module.exports = books;
