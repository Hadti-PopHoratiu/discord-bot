const mongoose = require('mongoose');
const arknightsModel = require('../models/arknights.model');

getOperator = () => {
	return arknightsModel.find().sort({ name: 1 }).select({
		name: 1,
	});
};

addOperator = (body) => {
	body['_id'] = new mongoose.Types.ObjectId();
	console.log(body);
	return arknightsModel.create(body);
};

module.exports = { getOperator, addOperator };
