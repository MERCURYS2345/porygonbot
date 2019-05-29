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

        //search
        // dex.BattlePokedex[text].yeet
        // + ': Number: ' dex.BattlePokedex[text].num
        // dex.BattlePokedex[text].species

        return msg.say(stripIndents`
            **Pokémon Details**
		    • Name: ${dex.BattlePokedex[text].species}
            • Number: ${dex.BattlePokedex[text].num}
            `
            + '\n'
            + commaListsAnd`
            • Type: ${dex.BattlePokedex[text].types}
            • Egg Groups: ${dex.BattlePokedex[text].eggGroups}
            `
            + '\n'
            + stripIndents
            `
            • Height: ${dex.BattlePokedex[text].heightm}
            • Weight: ${dex.BattlePokedex[text].weightkg}

        `);
    }
};
