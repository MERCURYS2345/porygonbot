const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            aliases: ['copycat', 'repeat', 'echo', 'parrot'],
            group: 'utility',
            memberName: 'say',
            description: 'Replies with the text you provide.',
            examples: ['say Hi!'],
            args: [
                {
                    key: 'text',
                    prompt: 'What would you like the bot to say?',
                    type: 'string'
                }
            ]
        });
    }

    run(msg, {text}) {
        msg.delete();
        return msg.say(text);
    }
};
