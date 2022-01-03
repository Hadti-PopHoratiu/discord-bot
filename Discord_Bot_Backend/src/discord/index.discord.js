const fs = require('fs');
const path = require('path');
const { Client, Collection, Intents, MessageAttachment } = require('discord.js');
require('dotenv').config();
require('./deploy-commands');
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, 'GUILDS', 'DIRECT_MESSAGES', 'GUILD_MESSAGES'],
});
client.commands = new Collection();
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter((file) => file.endsWith('.js'));

(async function () {
	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		// Set a new item in the Collection
		// With the key as the command name and the value as the exported module

		const commandData = await command.getData();
		client.commands.set(commandData.name, command);
	}
})();

client.on('ready', () => {
	console.log('Connected as ' + client.user.tag);
	client.user.setActivity('lvl 1 bot, still lvl-ing up', { type: 'PLAYING' });
});

client.on('messageCreate', (message) => {
	if (message.author.bot) return;
	if (message.content.indexOf(process.env.PREFIX) !== 0) return;

	let attachment = new MessageAttachment('https://i.imgur.com/CHREuMi.jpeg');
	message.channel.send('here', { embeds: [attachment] });
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({
			content: 'There was an error while executing this command!',
			ephemeral: true,
		});
	}
});

client.login(process.env.BOT_TOKEN);
