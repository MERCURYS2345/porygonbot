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
            description: 'Replies with information on that ability. Run `p:a help` for rating info.',
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
        var textSmall = text.toLowerCase();
        return msg.say(stripIndents`
			**Ability Details**
		    • Name: ${abilities.BattleAbilities[textSmall].name}
            • Description: ${abilities.BattleAbilities[textSmall].desc}
            • Rating: ${abilities.BattleAbilities[textSmall].rating}
		`);
    }
};
