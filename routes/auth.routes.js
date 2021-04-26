const { Router } = require("express");
const User = require("../models/User");
const router = Router();

// /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong. Please, try again." });
  }
});

router.post("/login", async (req, res) => {});

module.exports = router;
