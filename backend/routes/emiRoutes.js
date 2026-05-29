const express = require("express");

const router = express.Router();

router.post("/calculate-emi", (req, res) => {

  try {

    const {
      loan_amount,
      interest_rate,
      tenure
    } = req.body;

    const P = Number(loan_amount);

    const annualRate = Number(interest_rate);

    const years = Number(tenure);

    const R = annualRate / 12 / 100;

    const N = years * 12;

    const emi =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);

    res.json({

      emi: emi.toFixed(2)

    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      message: "EMI Calculation Failed"

    });

  }

});

module.exports = router;