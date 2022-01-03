var express = require('express');
var path = require('path');
require('dotenv').config();

global.app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// require('./routes/routes');
require('./src/config/cors.config');
require('./src/config/db.config');
require('./src/routes/routes');
require('./src/discord/index.discord');

app.get('/', (req, res) => {
	res.send('Hello World!');
});

const PORT = process.env.SV_PORT;

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
