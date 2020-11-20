const express = require('express');
const router = express.Router();

const pool = require('../database');
const {isLoggedIn,isNotLoggedIn} = require('../lib/auth');


router.get('/mainmenu', async (req, res, next) => {
    res.render('caja/mainmenu');
});
router.get('/listC', async (req, res, next) => {
    res.render('caja/listC');
});
router.get('/rIaO', async (req, res, next) => {
    res.render('caja/rIaO');
});
router.get('/cIaO', async (req, res, next) => {
    res.render('caja/cIaO');
});

module.exports = router;