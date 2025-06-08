const axios = require('axios');
const cheerio = require('cheerio');
const nodemailer = require('nodemailer');

require('dotenv').config();


async function scrapeSteamPromotions() {
  const response = await axios.get('https://store.steampowered.com/search/?specials=1');
  const $ = cheerio.load(response.data);
  const games = [];

  $('.search_result_row').each((i, el) => {
    const title = $(el).find('.title').text().trim();
    const oldPrice = $(el).find('.search_price strike').text().trim();
    const newPrice = $(el).find('.search_price').text().replace(oldPrice, '').trim();
    const link = $(el).attr('href');

    games.push(`${i + 1}. ${title}\n   De: ${oldPrice || 'Preço normal'} -> Por: ${newPrice}\n   Link: ${link}\n`);
    if (i >= 4) return false;
  });

  return games;
}

async function sendEmail(content) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'Promoções da Steam! ^~^',
    text: content.join('\n'),
  };

  await transporter.sendMail(mailOptions);
  console.log('Email enviado');
}

async function main() {
  try {
    const promotions = await scrapeSteamPromotions();
    await sendEmail(promotions);
  } catch (err) {
    console.error('Erro:', err);
  }
}

main();