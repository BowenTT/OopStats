module.exports = 
{
    name: 'pog',
    description: "Sends pog in the chat.",
    execute(client, message, args)
    {
        let pog = '<:Pog:978653688988049458>'
        message.channel.send(pog);
    }
}