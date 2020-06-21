const router= require('express').Router();

router.get('/ctacte',(req, res)=>{
    res.send('ctacte/ctacte');
});
router.get('/calculos',(req, res)=>{
    res.send('ctacte/calc');
});
router.get('/consultas',(req, res)=>{
    res.send('ctacte/consult');
});
router.get('/emision',(req, res)=>{
    res.send('ctacte/emision');
});

module.exports=router;