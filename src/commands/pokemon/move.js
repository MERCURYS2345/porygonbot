const { Command } = require('discord.js-commando');
const stripIndents = require('common-tags').stripIndents;
const moves = require('../../data/moves.js');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'move',
            aliases: ['m'],
            group: 'pokemon',
            memberName: 'move',
            description: 'Replies with information on that move.',
            examples: ['move tackle'],
            args: [
                {
                    key: 'text',
                    prompt: 'On which move would you like information?',
                    type: 'string'
                }
            ]
        });
    }

    run(msg, {text}) {
        var textSmall = text.toLowerCase();
        return msg.say(stripIndents`
			**Move Details**
		    • Name: ${moves.BattleMovedex[textSmall].name}
            • Category: ${moves.BattleMovedex[textSmall].category}
            • Description: ${moves.BattleMovedex[textSmall].desc}
            • Type: ${moves.BattleMovedex[textSmall].type}
            • Power: ${moves.BattleMovedex[textSmall].basePower}
            • Accuracy: ${moves.BattleMovedex[textSmall].accuracy}
            • Priority: ${moves.BattleMovedex[textSmall].priority}
            • PP: ${moves.BattleMovedex[textSmall].pp}
            • Contest Type: ${moves.BattleMovedex[textSmall].contestType}
		`);
    }
};
