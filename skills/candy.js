module.exports = function(controller) {

    // My custom skill module!
    // controller is a Botkit application instance
    // I can add handlers and specify middlewares here!

    // respond to the `hello` event, fired when a web chat begins with a new user
    controller.on('hello', function(bot, message) {

        bot.reply(message,'Welcome, new human!');

    });

    // listen for the word "help"
    controller.hears(['hi','hello','howdy','hey','aloha','hola','bonjour','oi'],['message_received'], function(bot, message) {

        bot.reply(message,'Hello');

    });
    controller.hears(['body pain'],['message_received'], function(bot, message) {

        bot.reply(message,'What kind of pain you have');
		controller.hears(['muscles cramp'],['message_received'], function(bot, message) {

        bot.reply(message,'where you have muscle cramp');
        controller.hears(['leg calf muscles'],['message_received'], function(bot, message) {

            bot.reply(message,'are you able to stretch');
      controller.hears(['no'],['message_received'], function(bot, message) {

            bot.reply(message,'you apply the hot water pain will recover soon');
        controller.hears(['yes '],['message_received'], function(bot, message) {

            bot.reply(message,'use ice packs or hot pads');
        });

    });
  });
});
});


    controller.hears(['Super','Great'],['message_received'], function(bot, message) {

        bot.reply(message,'Thanks for the complement');

    });
    controller.hears(['Goodbye','bye'],['message_received'], function(bot, message) {

        bot.reply(message,'Goodbye human,i will be waiting for You');

    });
    controller.hears(['Vikneshwar','vikky'],['message_received'], function(bot, message) {

        bot.reply(message,'Hello Vikneshwar');

    });
controller.hears('statement',  'message_received', function(bot, message) {

        bot.reply(message,'Please enter your mobile number');
     controller.hears('1234567890','message_received',function(bot,message){
          bot.reply(message,'Enter the otp');

});
controller.middleware.send.use(function(bot, message, next) {

    // do something useful...
    if (message.intent == 'done') {
        message.text = 'super!!!';
    }
    next();

});
            });
controller.hears('hello',  'message_received', function(bot, message) {

        bot.reply(message,'Hello human');

    });
    controller.hears('Percentage',  'message_received', function(bot, message) {

        bot.reply(message,'You got 85 Percentage');

    });
    controller.hears('Age',  'message_received', function(bot, message) {

        bot.reply(message,'Your age is 19');

    });

    // add a middleware to log messages sent to the console
    controller.middleware.send.use(function(bot, message, next) {
        console.log('Sending: ', message);
        next();
    });


}
