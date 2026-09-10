const SSLCommerzPayment = require("sslcommerz-lts");

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSWD;
const is_live = process.env.IS_LIVE;

const CLINT_URL = process.env.CLIENT_URL || "http://localhost:5173"; // Replace with your client URL
const BACKEND_URL = process.env.BACKEND_URL || `http://localhost:${process.env.PORT || 8000}`; // Replace with your backend URL
const API_BASE_URL = process.env.API_BASE_URL || "/api/v1"; // Replace with your API base URL
// -----------profile controllerp
const payment = async (req, res) => {
//   console.log("Payment request received:", req.body);

  const data = {
    total_amount: 100,
    currency: "BDT",
    tran_id: "REF123", // use unique tran_id for each api call
    success_url: `${BACKEND_URL}${API_BASE_URL}/payment`,
    fail_url: `${BACKEND_URL}${API_BASE_URL}/fail`,
    cancel_url: `${BACKEND_URL}${API_BASE_URL}/cancel`,
    ipn_url: `${BACKEND_URL}${API_BASE_URL}/ipn`,
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "customer@example.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse) => {
    // Redirect the user to payment gateway
    // let GatewayPageURL = apiResponse.GatewayPageURL;
    // res.redirect(GatewayPageURL);
    // console.log("Redirecting to: ", GatewayPageURL);
    res.status(200).json(apiResponse);
  })
  .catch((error) => {
    console.error("Error initializing payment:", error);
    res.status(500).json({ error: "Failed to initialize payment" });
  })

};


// ------redirect clint 
const redirectClient =(path) => (req, res) => {
res.redirect(`${CLINT_URL}${path}`);
}


// ---------payment success 
const paymentSuccess = redirectClient('/payment');
const paymentFail = redirectClient('/payment/fail');
const paymentCancel = redirectClient('/payment/cancel');

module.exports = {
  payment,
  redirectClient,
  paymentSuccess,
  paymentFail,
  paymentCancel
};


