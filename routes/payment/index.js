const express = require("express");
const router = express.Router();

const sslpayments = require("./ssl_payment_route");
const { payment } = require("../../controllers/payment/payment_controller");

const { authMiddleware } = require("../../middleware/authMiddleware");

// Payment callback routes
// এগুলো auth ছাড়া থাকবে
router.use("/payment", sslpayments);

// Payment initialize
// এটা protected থাকবে
router.post("/payment/init", authMiddleware, payment);

module.exports = router;
