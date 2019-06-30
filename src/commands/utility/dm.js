const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dm',
            group: 'utility',
            memberName: 'dm',
            description: 'Sends a message to the user you mention.',
            examples: ['dm @user Hi!'],
            args: [
                {
                    key: 'user',
                    prompt: 'To which user do you want to send the DM?',
                    type: 'user'
                },
                {
                    key: 'content',
                    prompt: 'What would you like the bot to say?',
                    type: 'string'
                }
            ]
        });
    }

    run(msg, {user, content}) {
        return user.send(content);
    }
};
