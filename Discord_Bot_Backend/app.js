var express = require('express');
var path = require('path');
require('dotenv').config();

global.app = express();
// require('./routes/routes');
require('./src/config/cors.config');
require('./src/config/db.config');
require('./src/routes/routes');
require('./src/discord/index.discord');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

const PORT = process.env.SV_PORT;

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
