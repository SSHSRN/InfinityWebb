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
        if (explanation.length > 1000) {
            ctx.replyWithPhoto(url, { caption: title });
            ctx.replyWithDocument({ source: Buffer.from(explanation, 'utf-8'), filename: 'explanation.txt' });
        } else {
            ctx.replyWithPhoto(url, { caption: `${title}\n${explanation}` });
        }
    } catch (error) {
        console.log(error);
        ctx.reply('Sorry, something went wrong!');
    }
});

bot.command('issLocation', async (ctx) => {
    try {
        const response = await axios.get(process.env.ISS_URL);
        console.log(response.data);
        const { latitude, longitude } = response.data.data.iss_position;
        await ctx.replyWithLocation(latitude, longitude);
        ctx.reply(`Right now ISS is at ${latitude} latitude and ${longitude} longitude`);
    } catch (error) {
        console.log(error);
        ctx.reply('Sorry, something went wrong!');
    }
});

bot.command('peopleInSpace', async (ctx) => {
    try {
        const response = await axios.get(process.env.PEOPLE_IN_SPACE_URL);
        console.log(response.data)
        const { number, people } = response.data.data;
        ctx.reply(`There are ${number} people in space right now!`);
        people.forEach(person => {
            ctx.reply(`${person.name} is in ${person.craft}`);
        });
    } catch (error) {
        console.log(error);
        ctx.reply('Sorry, something went wrong!');
    }
});

bot.command('sunRiseSet', async (ctx) => {
    try {
        const response = await axios.get(process.env.IP_API);
        const { latitude, longitude } = response.data;
        const sunRiseSetResponse = await axios.post(process.env.SUNRISE_SUNSET_URL, { latitude, longitude });
        const { sunrise, sunset } = sunRiseSetResponse.data.data.results;
        console.log(response.data);
        await ctx.reply(`Sunrise is at ${sunrise} and sunset is at ${sunset}`);
        ctx.reply('The above times are in UTC.\n\nBased on your IP address, UTC offset is: ' + response.data.utc_offset);
    } catch (error) {
        console.log(error);
        ctx.reply('Sorry, something went wrong!');
    }
});

bot.on('text', async (ctx) => {
    const prefix = process.env.REQ_BODY_CONTENT_PREFIX;
    const suffix = process.env.REQ_BODY_CONTENT_SUFFIX;
    console.log(encodeURI(ctx.message.text));
    const payload = prefix + encodeURI(ctx.message.text) + suffix;
    console.log("payload: ", payload);
    const response = await axios.post(process.env.BARD_API_ENDPOINT, payload, {
        headers: {
            'accept': '*/*',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9',
            'content-length': payload.length,
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'cookie': process.env.BARD_COOKIE,
            'origin': 'https://bard.google.com',
            'referer': 'https://bard.google.com/'
        }
    })
        .then((response) => {
            console.log("response is: ", response);
            // check if the response is of type undefined
            // console.log("Formatted response: " + response.data.split(`[["wrb.fr",null,"[[`)[1].split(`"]`)[0]);
            let responseMsg = response.data.split(`[\\"Sure,`)[1].split(`\\"]`)[0];
            const maxMsgLen = 4000;
            const messages = [];
            for (let i = 0; i < responseMsg.length; i += maxMsgLen) {
                messages.push(responseMsg.substring(i, i + maxMsgLen));
            }
            messages.forEach((message) => {
                ctx.reply(message);
            });
        })
        .catch((error) => {
            console.log("error: ", error);
        });
});
// Launch the bot
bot.launch();