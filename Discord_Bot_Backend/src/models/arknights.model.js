const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Arknights_schema = new schema(
	{
		_id: schema.Types.ObjectId,
		name: String,
	},
	{
		timestamp: true,
		versionKey: false,
	}
);

const arknightsModel = mongoose.model('arknights', Arknights_schema, 'Arknights');

module.exports = arknightsModel;
