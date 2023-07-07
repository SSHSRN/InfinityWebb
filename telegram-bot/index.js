const axios = require('axios');
const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_API_KEY);
const apodUrl = process.env.APOD_URL;

bot.hears('hi', (ctx) => ctx.reply('Hey there!'));

bot.command('start', (ctx) => {
    ctx.reply('Welcome to Space Bot 🤖');
    ctx.reply('Type /apod to get the Astronomy Picture of the Day');
});

bot.command('apod', async (ctx) => {
    try {
        const response = await axios.get(apodUrl);
        const { title, url, explanation } = response.data;
        ctx.replyWithPhoto(url, { caption: `${title}\n\n${explanation}` });
    } catch (error) {
        console.log(error);
        ctx.reply('Sorry, something went wrong!');
    }
});


// Launch the bot
bot.launch();