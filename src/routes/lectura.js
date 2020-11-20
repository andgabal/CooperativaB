const express = require('express');
const router = express.Router();

const pool = require('../database');
const {isLoggedIn} = require('../lib/auth');

/*router.get('ctacte/', (req,res) => {
    res.render('ctacte/mainmenu');
});*/

module.exports = router;