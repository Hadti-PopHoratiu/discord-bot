module.exports = {
	async getData() {
		return {
			name: 'ping',
			description: 'Replies with pong',
		};
	},
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
