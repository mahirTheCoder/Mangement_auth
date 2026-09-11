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
router.post("/paymentSuccess", paymentSuccess);
router.post("/paymentFail", paymentFail);
router.post("/paymentCancel", paymentCancel);
// router.post("/paymentIpn", paymentIpn);

module.exports = router;