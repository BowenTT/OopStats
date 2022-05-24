// var Scraper = require('images-scraper');

// const google = new Scraper({
//     puppeteer: {
//       headless: true,
//     },
//   });

module.exports = 
{
    name: 'hamster',
    description: "Sends a hamster in the chat.",
    execute(message, args)
    {
        
        const hamsterPics = ['https://images.unsplash.com/photo-1584553421349-3557471bed79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
                            'https://petkeen.com/wp-content/uploads/2022/01/Hamster-sleeping-on-fleece-blanket_Alex-Milan_Shutterstock-760x507.jpg',
                            'https://media1.popsugar-assets.com/files/thumbor/7wG7SF3k9Bj0YnhE2GUOHnb-Y3Y/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/04/28/680/n/1922243/tmp_XGA87C_4e90e7a1ef1b65c2_GettyImages-151547675.jpg',
                            'https://content.omlet.co.uk/images/originals/Holding-a-hamster.jpg',
                            'https://c.tenor.com/9RCIDZjkhBsAAAAC/hamster-meme.gif',
                            'http://pm1.narvii.com/7221/3bcea17e620752f7c5416fd19c1d8c4f923c7cb7r1-1024-768v2_uhq.jpg',
                            'https://preview.redd.it/0n3k52lfba191.jpg?width=640&crop=smart&auto=webp&s=efc551e5eb1ff7d04cd7c6008f0e8b309ad64d61',
                            'https://preview.redd.it/k43ixn1p1hg81.jpg?width=640&crop=smart&auto=webp&s=d177308b106621c44bec13f931707e9df55323f4',
                            'https://preview.redd.it/dske9tea7od61.jpg?width=640&crop=smart&auto=webp&s=2deeb0d9338a29efff52baf6f1d9951a3f915596',
                            'https://preview.redd.it/c5fuskognos81.jpg?width=640&crop=smart&auto=webp&s=1bc7b83039507b12995ba593277e9a90be339bb7',
                            'https://preview.redd.it/inu68x6ppof71.png?width=640&crop=smart&auto=webp&s=34dfe6d16cdd873a08a5fbdc8fbb3599aeec9272'
                            ]
        const selectedHamsterPic = hamsterPics[Math.floor(Math.random()*hamsterPics.length)];                 
        message.channel.send(selectedHamsterPic);
    }
}