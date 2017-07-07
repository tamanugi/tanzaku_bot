if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('botkit');
let fs = require('fs')

var controller = Botkit.slackbot({
    debug: false
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();


controller.hears(['短冊 (.*)'],['direct_message', 'direct_mention', 'mention'], function(bot, message) {

    let tanzaku = "┏┷┓";

    for(let s of message.match[1].split('')){
      tanzaku += `\n┃${s}┃`
    }
    tanzaku += "\n┗━┛"

    bot.reply(message, '```\n' + tanzaku + '\n```')

});
