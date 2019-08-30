const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const config = require('./config.json');
const client = new CommandoClient({
    commandPrefix: 'p:',
    owner: '99327125340831744', //mostly fireproof#2095
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['utility', 'Commands from a tutorial'],
        ['pokemon', 'Pokemon things']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setActivity('p:help');
});

client.login(config.token);
