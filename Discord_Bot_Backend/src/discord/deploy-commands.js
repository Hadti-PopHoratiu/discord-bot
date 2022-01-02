const fs = require('fs');
const path = require('path');
require('dotenv').config();
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [];
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data);
}

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(Routes.applicationGuildCommands(process.env.BOT_CLIENT_ID, process.env.GUILD_ID), {
			body: commands,
		});

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
