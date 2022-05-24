/*
A discord bot for the Oops Server
Functionalities:
    -   Calls.js:
        •	Count total hours in call
        •	Average call time daily, weekly, yearly, total
        •	Most active
        •	Who gets booted to stupid jail most?
        •	Who streams the most?

    -   Chat.js
        •	Messages sent (by user)
        •	Wordle streak

*/
import {test} from './chat.js'
import Discord from 'discord.js'

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.once('ready', () =>
{
    console.log('OopStats is online! wee');
    console.log(test());
});



client.login('OTc4NjM4MTQ1NTcyNzA0Mjg3.Gs4cem.TKADs_jj1FFHYZwzAwib8OnTNt_1iA3hyuY50k');

