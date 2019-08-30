const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const config = require('./config.json');
const client = new CommandoClient({
    commandPrefix: 'p:',
    owner: '99327125340831744', //mostly fireproof#2095
    disableEveryone: true
});
const activitiesList = [
    "with the p:help command.",
    "with a Pikachu",
    "with the p:help command.",
    "with some code",
    "with the p:help command.",
    "with JavaScript"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

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
    setInterval(() => {
        const index = Math.floor(Math.random() * (activitiesList.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activitiesList[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

client.login(config.token);
