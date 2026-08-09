require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./routes");
const cookieParser = require("cookie-parser");
const dbConfig = require("./configs/dbConfig");

const PORT = process.env.PORT || 8000;

// ------dns 
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

// ---------- CORS ----------
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// ---------- Middleware 
app.use(express.json());
app.use(cookieParser());
// ---------- Routes 
app.use(router);
// ---------- Database 
dbConfig();


// ---------- Server 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});