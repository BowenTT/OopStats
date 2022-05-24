const auth = require('../auth.js');
module.exports = 
{
    name: 'stats',
    description: "Shows the statistics of a specific user or all users in the server",
    execute(client, message, args)
    {
        if(!args.length || args[0].toLowerCase() === 'all')
        {
            message.channel.send("~ All stats here ~ ");
        }
        else if(client.sv_users.has(args[0]))
        {
            console.log(args[0]);
            message.channel.send((args[0] + "'s stats here."));
            let name = args[0].substring(2, args[0].length-1)
            console.log('name: ', name);
            Object.keys(client.channel_ids).forEach(key => 
                {
                    console.log(client.channels.cache.get(client.channel_ids[key]).messages.fetch({limit:100}).then(messages => 
                        {
                            const msgs = messages.filter(m => m.author.id === name)
                            msgs.forEach(m => 
                                {
                                    console.log(`${m.content} - ${m.channel.name}`)
                                })
                        }))
                //console.log(client.channel_ids[key]);
                
            });
        }
    }
}