const { channel } = require("diagnostics_channel");

function execute(client, message, args)
{
    let start = '**List of all possible commands: **\n';
    let end = '** type **' + client.prefix + '**help to get information on each command.\n**'; 
    let cmd_msg = ' ';
    client.commands.forEach(command => 
        {
            cmd_msg = cmd_msg + client.prefix + command.name + "\n";
        });
    
    message.channel.send(start + cmd_msg + end);
}

module.exports = 
{
    name: 'commands',
    description: 'Lists all possible commands of the OopStats bot.',
    execute
}