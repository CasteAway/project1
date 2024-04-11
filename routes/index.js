const server = require('express');
const router = server.Router();

const homeController = require('../controller/home');


router.get('/',homeController.home);
router.use('/users',require('./profile.js'));


module.exports = router;