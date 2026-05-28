const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const careerRoutes =
  require("./routes/careerRoutes");

const authRoutes =
  require("./routes/authRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/careers",
  careerRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log(
      "MongoDB Connected 🚀"
    );

  })
  .catch((err) => {

    console.log(err);

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

app.listen(5000, () => {

  console.log(
    "Server Running On Port 5000"
  );

});