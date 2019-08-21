const { Command } = require('discord.js-commando');
const stripIndents = require('common-tags').stripIndents;
const abilities = require('../../data/abilities.js');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ability',
            aliases: ['a'],
            group: 'pokemon',
            memberName: 'ability',
            description: 'Replies with information on that ability.',
            examples: ['ability pressure'],
            args: [
                {
                    key: 'text',
                    prompt: 'On which ability would you like information?',
                    type: 'string'
                }
            ]
        });
    }

    run(msg, {text}) {

        return msg.say(stripIndents`
			**Move Details**
		    • Name: ${abilities.BattleAbilities[text].name}
            • Description: ${abilities.BattleAbilities[text].desc}
            • Rating: ${abilities.BattleAbilities[text].rating}
		`);
    }
};
