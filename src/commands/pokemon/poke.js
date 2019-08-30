const { Command } = require('discord.js-commando');
const dex = require('../../data/pokedex.js');
const stripIndents = require('common-tags').stripIndents;
const commaListsAnd = require('common-tags').commaListsAnd;

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'poke',
            aliases: ['pokemon', 'pokémon', 'p'],
            group: 'pokemon',
            memberName: 'poke',
            description: 'Replies with information on that Pokémon.',
            examples: ['poke bulbasaur'],
            args: [
                {
                    key: 'text',
                    prompt: 'On which Pokémon would you like information?',
                    type: 'string'
                }
            ]
        });
    }

    run(msg, {text}) {
        var textSmall = text.toLowerCase();
        return msg.say(stripIndents`
            **Pokémon Details**
		    • Name: ${dex.BattlePokedex[textSmall].species}
            • Number: ${dex.BattlePokedex[textSmall].num}
            `
            + '\n'
            + commaListsAnd`
            • Type: ${dex.BattlePokedex[textSmall].types}
            • Egg Groups: ${dex.BattlePokedex[textSmall].eggGroups}
            `
            + '\n'
            + stripIndents
            `
            • Height: ${dex.BattlePokedex[textSmall].heightm}
            • Weight: ${dex.BattlePokedex[textSmall].weightkg}

        `);
    }
};
