const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {

  try {

    res.json([

      {
        id: 1,
        type: "Money Transfer",
        amount: 500,
      },

      {
        id: 2,
        type: "Salary Credit",
        amount: 25000,
      }

    ]);

  } catch(err){

    res.status(500).json({

      message:
      "Transaction Error"

    });

  }

});

module.exports = router;