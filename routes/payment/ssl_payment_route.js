const express = require('express');
const router = express.Router();
const { payment } = require('../../controllers/payment/payment_controller');


router.get('/ssl', payment);


module.exports = router;