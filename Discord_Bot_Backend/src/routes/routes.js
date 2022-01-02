var express = require('express');
var router = express.Router();
var indexRouter = require('./index');
var arknightsRouter = require('../controllers/arknights.controller');

router.use('/', indexRouter);
router.use('/arknights', arknightsRouter);
app.use('/api', router);
