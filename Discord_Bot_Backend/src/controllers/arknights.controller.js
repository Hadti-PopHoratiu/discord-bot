const express = require('express');
const router = express.Router();
const arknights = require('../services/arknights.service');

router.get('/', async function (req, res, next) {
	let operatorsNameList = await arknights.getOperator();
	res.send(operatorsNameList);
});

router.post('/', async function (req, res, next) {
	await arknights
		.addOperator(req.body)
		.then((result) => {
			return res.status(200).json({ message: 'Utilizatorul a fost adaugat cu succes' });
		})
		.catch((error) => {
			return res.status(417).json({ message: 'Date incorecte' });
		});
});

module.exports = router;
