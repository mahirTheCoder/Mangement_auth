const express = require('express');
const router = express.Router();

const sslpayments = require('./ssl_payment_route');
const { authMiddleware } = require('../../middleware/authMiddleware');
const { requireAdmin } = require('../../middleware/roleCheckMiddleware');

router.use(authMiddleware, requireAdmin);

router.use('/payment', sslpayments) ;


module.exports = router;