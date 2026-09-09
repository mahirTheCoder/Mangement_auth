const express = require('express');
const router = express.Router();


router.get('/payments', ()=>{
    console.log('payment route is working');
} );


module.exports = router;