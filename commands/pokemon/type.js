const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'type',
            group: 'pokemon',
            memberName: 'type',
            description: 'Replies with information on that Pokemon type.',
            examples: ['type Grass'],
            args: [
                {
                    key: 'text',
                    prompt: 'On which type would you like information?',
                    type: 'string'
                }
            ]
        });
    }

    run(msg, {text}) {

        return msg.say(text + ' - still needs proper implementation');
    }
};
