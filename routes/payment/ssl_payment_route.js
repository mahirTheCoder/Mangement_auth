const express = require("express");
const router = express.Router();

const {
  paymentSuccess,
  paymentFail,
  paymentCancel,
  payment,
  paymentIpn,
} = require("../../controllers/payment/payment_controller");

router.get('/check', payment );
router.post("/payment-success", paymentSuccess);
router.post("/payment-fail", paymentFail);
router.post("/payment-cancel", paymentCancel);
// router.post("/payment-ipn", paymentIpn);

module.exports = router;