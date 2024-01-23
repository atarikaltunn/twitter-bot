/* eslint-disable indent */
const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.route('/').get(controller.getMainPage);
router.route('/submit').post(controller.startTweet);


module.exports = router;
