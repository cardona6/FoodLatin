const express = require('express');
const router = express.Router();


router.get('/', (req,res) =>{
    res.render('index' );
});

router.get('/about', (req,res) =>{
    res.render('about' );
});

router.get('/fotos', (req,res) =>{
    res.render('fotos' );
});

router.get('/contact', (req,res) =>{
    res.render('contact' );
});

module.exports = router;