function execute(client, message, args)
{
    let result = ' ';
    let symbol = args[1];
    let num1 = parseInt(args[0]);
    let num2 = parseInt(args[2]);
    // console.log(num1, num2, typeof(num1), typeof);
    
    if (!(num1===NaN) && !(num2===NaN)){
        if (symbol === '+'){
            result = num1 + num2;
        } else if (symbol === '-'){
            result = num1 - num2;
        } else if (symbol === '*'){
            result = num1 * num2;
        } else if (symbol === '/'){
            result = num1 / num2;
        } else {
            message.channel.send('Invalid mathsymbol');
            return;
        }

    message.channel.send('result = ' + result);

    } else {
        message.channel.send('What you trying to do');
    }
    
    
}

// function execute(client, message, args)
// {
//     let result = ' ';
//     let symbol = args[1];
//     let num1 = parseInt(args[0]);
//     let num2 = parseInt(args[2]);

//     console.log(num1, num2, typeof(num1), typeof(num2));

//     if(isNaN(num1) || isNaN(num2))
//     {
//         message.channel.send('Invalid math equation');
//         return;
//     }

//     switch(symbol)
//     {
//         case '+':
//             result = num1 + num2;
//             break;

//         case '-':
//             result = num1 - num2;
//             break;

//         case '*':
//             result = num1 * num2;
//             break;
        
//         case '/':
//             if(num2 === 0)
//             {
//                 message.channel.send('WARNING: YOU HAVE EXECUTED AN EARTH EXTINCTION EVENT');
//                 return;
//             }

//             result = num1 / num2;
//             break;
        
//         default:
//             message.channel.send('This math symbol is not supported (yet)');
//             return;
//     }

//     message.channel.send('Result = ' + result);
// }

module.exports = 
{
    name: 'calculate',
    description: "Does a specified calculation with input.",
    execute
}