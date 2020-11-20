const express = require('express');
const router = express.Router();
const passport = require('../lib/passport');
const {isLoggedIn , isNotLoggedIn} = require('../lib/auth');

router.get('/signup', (req,res) => {
    res.render('auth/signup');
})

router.post('/signup', (req, res, next) => {
    passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
    })(req,res, next);
});

router.get('/signin', (req, res) => {
    res.render('auth/login');
})
router.post('/signin', (req, res, next) => {
    passport.authenticate('local.signin',{
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req,res, next);
});

router.get('/profile', (req, res) => {
    res.render('profile');
});

router.get('/logout', (req, res) => {
        req.logOut();
        res.redirect('/signin');
});

module.exports = router;