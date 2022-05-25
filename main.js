/*
A discord bot for the Oops Server
Functionalities:
    -   Calls
        •	Count total hours in call
        •	Average call time daily, weekly, yearly, total
        •	Most active (which user has the longest total call time)
        •	Who gets booted to stupid jail most?
        •	Who streams the most? (total stream time)

    -   Chat
        •	Messages sent (by user)
        •	Wordle streak

*/
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_PRESENCES"] });
const fs = require('fs');
const _server = require('./auth.js');
// const handler = require('./handler.js');
client.commands = new Discord.Collection();
client.sv_users = new Discord.Collection();
client.channel_ids = new Discord.Collection();
client.prefix = new Discord.Collection();

// Reads all the commands in the commands folder and adds it to the Discord client object
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.prefix = '-';


client.once('ready', () =>
{
    const server = _server.init(client, _server.server_id);
    console.log('OopStats is online! wee');
    server.members.cache.forEach(member => 
        {
            let id = ("<@" + member.user.id + ">");
            client.sv_users.set(id, member.user);
            // console.log(member.user.username);
        });
    //console.log(client.sv_users.get('<@121716694379921408>'));
    client.channel_ids = _server.channel_ids;
    console.log(_server.channel_ids);

});

client.on('messageCreate', message =>
{
    /* Runs a command based on a prefix
       Commands are listed in commands.js 
    */

    //If message does not start with the prefix, do nothing
    if(!message.content.startsWith(client.prefix) || message.author.bot)
    {
        return;
    }

    //Retrieve the command from the user message and convert it to lowercase
    const args = message.content.slice(client.prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    //console.log(args);

    //Check if command exists
    if(!client.commands.has(command))
    {
        return;
    }

    client.commands.get(command).execute(client, message, args);

});

client.login(_server.auth_key);

