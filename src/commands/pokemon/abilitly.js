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
        if text='help'{
            return msg.say(stripIndents`
                Ratings and how they work:

                -2: Extremely detrimental
                	  The sort of ability that relegates Pokemon with Uber-level BSTs into NU.
                	ex. Slow Start, Truant

                -1: Detrimental
                	  An ability that does more harm than good.
                	ex. Defeatist, Normalize

                 0: Useless
                	  An ability with no net effect during a singles battle.
                	ex. Healer, Illuminate

                 1: Ineffective
                	  An ability that has a minimal effect. Should not be chosen over any other ability.
                	ex. Damp, Shell Armor

                 2: Situationally useful
                	  An ability that can be useful in certain situations.
                	ex. Clear Body, Static

                 3: Useful
                	  An ability that is generally useful.
                	ex. Infiltrator, Sturdy

                 4: Very useful
                	  One of the most popular abilities. The difference between 3 and 4 can be ambiguous.
                	ex. Protean, Regenerator

                 5: Essential
                	  The sort of ability that defines metagames.
                	ex. Desolate Land, Shadow Tag
                `) // this whole thing is from abilities.js
        }
        else {
            return msg.say(stripIndents`
			**Ability Details**
		    • Name: ${abilities.BattleAbilities[text].name}
            • Description: ${abilities.BattleAbilities[text].desc}
            • Rating: ${abilities.BattleAbilities[text].rating}
		`);} // the rating part might break things, I haven't tested it yet
    }
};
