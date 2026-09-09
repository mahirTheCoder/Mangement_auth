const express = require('express');
const router = express.Router();

const sslpayments = require('./ssl_payment_route');
const { authMiddleware } = require('../../middleware/authMiddleware');

router.use(authMiddleware);

router.use('/payment', sslpayments) ;


module.exports = router;