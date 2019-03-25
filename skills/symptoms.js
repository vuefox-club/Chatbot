module.exports = function(controller) {



    var aids=0;
    var fever=0;
    //var unirest = require('unirest');
  //  const Infermedica = require('infermedica')
    // My custom skill module!
    // controller is a Botkit application instance
    // I can add handlers and specify middlewares here!

    // respond to the `hello` event, fired when a web chat begins with a new user


    // listen for the word "help"
    controller.hears(['hi','hello','howdy','hey','aloha','hola','bonjour','oi'],['message_received'], function(bot, message) {

        bot.reply(message,'Hello human');

    });
    controller.hears(['Idiot','stupid'],['message_received'], function(bot, message) {

        bot.reply(message,'Please dont abuse me');

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
    controller.hears('Aravind',  'message_received', function(bot, message) {

        bot.reply(message,'I dont talk to playboys!!');

    });

    // add a middleware to log messages sent to the console
    controller.middleware.send.use(function(bot, message, next) {
        console.log('Sending: ', message);
        next();
    });
    controller.hears('diagnose',  'message_received', function(bot, message) {

        bot.reply(message,'let me analyse abut your symptoms');
        bot.reply(message,'Do you experience fever?');
        controller.hears('yes',  'message_received', function(bot, message) {

            aids=aids+1;
            fever=fever+1;

            bot.reply(message,'You are suffering from cold/flu');


        })  ;
        if (aids>0)
    {
      bot.reply(message,'You are suffering from aids');
    }

    });

}
