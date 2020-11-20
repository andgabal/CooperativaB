const express = require('express');
const router = express.Router();

const pool = require('../database');
const {isLoggedIn} = require('../lib/auth');

router.get('/mainmenu', async (req, res, next) => {
    res.render('ctacte/mainmenu');
});

router.get('/cuotes', async (req, res, next) => {
    res.render('ctacte/cuotes');
});
router.get('/cuotes/load', async (req, res, next) =>{
    res.render('ctacte/cuotes/load');
});
router.get('/cuotes/query', async (req, res, next) =>{
    res.render('ctacte/cuotes/query');
});
router.get('/print', async (req, res, next) =>{
    res.render('ctacte/print');
});
router.get('/currAco', async (req, res, next) =>{
    res.render('ctacte/currAco');
});
router.get('/listdebt',  async (req, res, next) =>{
    res.render('ctacte/listdebt');
});
router.get('/recalcv',  async (req, res, next) =>{
    res.render('ctacte/recalcv');
});

module.exports = router;