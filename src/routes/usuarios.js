const router= require('express').Router();
const passport= require('passport');

router.get('/signin',(req,res)=>{
    res.render('layouts/signin.html'); 
});

router.post('/layouts/signin',passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: 'layouts/signin.html',
    failureFlash: true
}));

module.exports=router;