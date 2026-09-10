const express = require("express");
const router = express.Router();

const {
  paymentSuccess,
  paymentFail,
  paymentCancel,
  payment,
} = require("../../controllers/payment/payment_controller");

router.get('/check', payment );
router.post("/success", paymentSuccess);
router.post("/fail", paymentFail);
router.post("/cancel", paymentCancel);


module.exports = router;