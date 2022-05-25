const auth = require('../auth.js');
function execute(client, message, args)
{
    if(!args.length || args[0].toLowerCase() === 'all')
    {
        message.channel.send("~ All stats here ~ ");
    }
    else if(client.sv_users.has(args[0]))
    {
        var final_message = 'Out of the past 100 messages in each channel, ' + args[0] + ' has written: \n';
        message.channel.send((args[0] + "'s stats here."));
        message.channel.send(final_message);
        let username = args[0].substring(2, args[0].length-1);
        Object.keys(client.channel_ids).forEach(key => 
            {
                let channel = client.channels.cache.get(client.channel_ids[key]);
                console.log(channel.name);
                //test = test + 'test \n';
                channel.messages.fetch({limit:100}).then(messages => 
                    {
                        const msgs = messages.filter(m => m.author.id === username);
                        console.log(msgs.size, channel.name);
                        count = channel.toString() + " : " +  msgs.size + '\n';
                        message.channel.send(count);
                    })

            //console.log(client.channel_ids[key]);
        });
        //console.log('FINAL MESSAGE STARTS HERE:' + test);
        
    }
}

module.exports = 
{
    name: 'stats',
    description: "Shows the statistics of a specific user or all users in the server",
    execute
}