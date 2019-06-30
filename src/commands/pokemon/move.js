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

        return msg.say(stripIndents`
			**Move Details**
		    • Name: ${moves.BattleMovedex[text].name}
            • Category: ${moves.BattleMovedex[text].category}
            • Description: ${moves.BattleMovedex[text].desc}
            • Type: ${moves.BattleMovedex[text].type}
            • Power: ${moves.BattleMovedex[text].basePower}
            • Accuracy: ${moves.BattleMovedex[text].accuracy}
            • Priority: ${moves.BattleMovedex[text].priority}
            • PP: ${moves.BattleMovedex[text].pp}
            • Contest Type: ${moves.BattleMovedex[text].contestType}
		`);
    }
};
