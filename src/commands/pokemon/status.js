const { Command } = require('discord.js-commando');
const stripIndents = require('common-tags').stripIndents;
const statuses = require('../../data/statuses.js');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'status',
            aliases: ['s'],
            group: 'pokemon',
            memberName: 'status',
            description: 'Replies with information on that status.',
            examples: ['status burn'],
            args: [
                {
                    key: 'text',
                    prompt: 'On which status would you like information?',
                    type: 'string'
                }
            ]
        });
    }

    run(msg, {text}) {
        var textSmall = text.toLowerCase();
        return msg.say(stripIndents`
			**Status Details**
		    • Name: ${statuses.BattleStatuses[textSmall].name}
            • Description: ${statuses.BattleStatuses[textSmall].desc}
            • Effect Type: ${statuses.BattleStatuses[textSmall].effectType}
		`);
    }
};
