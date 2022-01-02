const DBconfig = {
	databaseConfig: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		user: '',
		pass: '',
		dbName: 'Discord_Development',
	},
	database: 'mongodb://localhost:27017/Discord_Development',
};

var db = require('mongoose');
db.connect(DBconfig.database, DBconfig.databaseConfig);
db.connection
	.once('open', function () {
		console.log('connected to the database');
	})
	.on('error', function (error) {
		console.log(error);
	});
