const auth = require('../auth.js');
async function execute(client, message, args)
{
    if(!args.length || args[0].toLowerCase() === 'all')
    {
        message.channel.send("~ All stats here ~ ");
    }
    else if(client.sv_users.has(args[0]))
    {
        message.channel.send((args[0] + "***'s stats here.***"));
        let username = args[0].substring(2, args[0].length-1);
        let msg_arr = [];
        let count = 0;
        var temp = new Promise((resolve, reject) => {
            Object.keys(client.channel_ids).forEach((key, index, array) => 
                {
                    let channel = client.channels.cache.get(client.channel_ids[key]);
                    channel.messages.fetch({limit:100}).then(messages => 
                        {
                            const msgs = messages.filter(m => m.author.id === username);
                            let channel_msg = channel.toString() + " : " +  msgs.size + '\n';
                            msg_arr.push([index, channel_msg]);
                            if(count === array.length - 1) resolve();
                            count += 1;
                        })
                });

        })

        temp.then(() => {
            msg_arr.sort();
            console.log(msg_arr);
            let initial_msg = '***Out of the past 100 messages in each channel, ***' + args[0] + '*** has written:*** \n';
            const final_message = msg_arr.map(e => e[1]).join(" ");
            console.log(final_message);
            message.channel.send(initial_msg + final_message);
        })
        
    }
}

module.exports = 
{
    name: 'stats',
    description: "Shows the statistics of a specific user or all users in the server",
    execute
}