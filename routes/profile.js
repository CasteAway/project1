const express =  require('express');
const router = express.Router();
const profileContr = require('../controller/profile')

router.get('/profile',profileContr.home);
router.get('/sign-in',profileContr.signin);
router.get('/sign-up',profileContr.signup);
router.post('/create',profileContr.create);


module.exports = router;