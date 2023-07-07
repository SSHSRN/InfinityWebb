const axios = require('axios');
const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_API_KEY);
// Create a .env file in the project root folder and save the telegram-bot api key there.

// Launch the bot
bot.launch();