const router= require('express').Router();

router.get('/caja',(req, res)=>{
    res.render('caja')
});

module.exports=router;