const commands = require('./commands');
function execute(client, message, args)
{
    if(!client.commands.has(args[0]) || args.length === 0)
    {
        msg = '**This command was not found, here is a list of all possible commands: **';
        message.channel.send(msg);
        commands.execute(client, message, args);
        return;
    }

    name_of_command = client.commands.get(args[0]).name;
    description = client.commands.get(args[0]).description;
    msg = '**Name: **' + name_of_command + '\n' +
          '**Description: **' + description + '\n';
    
    // console.log(msg);
    message.channel.send(msg);
    
}

module.exports = 
{
    name: 'help',
    description: "Names the command called and its description",
    execute
}