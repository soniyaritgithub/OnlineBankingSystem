const transactionRoutes =
require("./routes/transactionRoutes");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const emiRoutes =
require("./routes/emiRoutes");
require("dotenv").config();

const careerRoutes =
require("./routes/careerRoutes");

const authRoutes =
require("./routes/authRoutes");

// agar transactionRoutes file hai toh uncomment karna
// const transactionRoutes =
// require("./routes/transactionRoutes");

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());

/* ROUTES */

app.use(
  "/api/careers",
  careerRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

// profile/login/register routes
app.use(
  "/api",
  authRoutes
);
app.use(
  "/api",
  emiRoutes
);
app.use(
  "/api/transactions",
  transactionRoutes
);


// transactions route agar file hai toh use karo
/*
app.use(
  "/api/transactions",
  transactionRoutes
);
*/

mongoose
.connect(process.env.MONGO_URI)
.then(() => {

  console.log(
    "MongoDB Connected 🚀"
  );

})
.catch((err) => {

  console.log(
    "Mongo Error:",
    err
  );

});

app.get("/", (req, res) => {

  res.send(
    "SmartBank Backend Running 🚀"
  );

});

app.get(
  "/api/admin-dashboard",
  async (req, res) => {

    try {

      const User =
      require("./models/User");

      const totalUsers =
      await User.countDocuments();

      res.json({

        total_users:
        totalUsers,

        total_loans: 0,

        total_transactions: 0,

        fraud_alerts: 0

      });

    } catch(err){

      console.log(err);

      res.status(500).json({

        message:
        "Dashboard Error"

      });

    }

  }
);

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server Running On Port ${PORT}`
  );

});