const fetch = require('node-fetch');

getOperatorNameList = async () => {
	const response = await fetch('http://localhost:3000/api/arknights');
	const data = await response.json();

	return data;
};

generateGetUnitDataCommands = async () => {
	let jsonArray = [];
	const response = await fetch('http://localhost:3000/api/arknights');
	const data = await response.json();

	data.map((value) => {
		let name = value.name;
		const modifiedName = name.toLowerCase().replace(/\s+/g, '_');
		jsonArray.push({
			name: `${modifiedName}`,
			description: 'Get operator data',
			type: 1,
			options: [
				{
					name: `data`,
					description: `Choose what data you want to get for ${name}`,
					type: 3,
					required: true,
					choices: [
						{
							name: 'skills',
							value: `all ${name}'s skills`,
						},
						{
							name: 'talents',
							value: `all ${name}'s talents`,
						},
					],
				},
			],
		});
	});
	return jsonArray;
};

module.exports = { getOperatorNameList, generateGetUnitDataCommands };
