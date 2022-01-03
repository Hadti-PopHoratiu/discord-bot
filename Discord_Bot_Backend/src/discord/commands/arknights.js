const operatorsService = require('../services/operatorData.service');

module.exports = {
	async getData() {
		results = await operatorsService.generateGetUnitDataCommands();

		return {
			name: 'arknights',
			description: 'Get data for this game',
			options: [
				{
					name: 'units',
					description: 'Get data for units',
					type: 2,
					options: results,
				},
				{
					name: 'guides',
					description: 'Get a guide for an operator',
					type: 1,
					options: [
						{
							name: 'unit_name',
							description: 'Choose which operator you want to get a guide for.',
							type: 3,
							required: true,
							choices: [
								{
									name: 'mudrock',
									value: 'mudrock guide',
								},
								{
									name: 'w',
									value: 'w guide',
								},
							],
						},
					],
				},
			],
		};
	},
	async execute(interaction) {
		let string = null;
		// console.log(interaction.options.getSubcommandGroup())
		if (interaction.options._group === 'units') {
			string = interaction.options.getString('data');
		}

		if (interaction.options.getSubcommand() === 'guides') {
			string = interaction.options.getString('unit_name');
		}

		await interaction.reply(string);
	},
};
