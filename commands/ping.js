function execute(client, message, args)
{
    let reply = 'pong'
    message.channel.send(reply);
}

module.exports = 
{
    name: 'ping',
    description: "Sends pong in the chat as a response to ping.",
    execute
}