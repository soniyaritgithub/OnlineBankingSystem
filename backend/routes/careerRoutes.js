const express = require("express");

const router = express.Router();

const CareerApplication = require("../models/CareerApplication");

router.post("/", async (req, res) => {

  try {

    const newApplication =
      await CareerApplication.create(req.body);

    res.status(201).json({
      success: true,
      message:
        "Application Submitted Successfully 🚀",
      data: newApplication,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});

module.exports = router;