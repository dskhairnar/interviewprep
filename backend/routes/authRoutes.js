const express = require("express");
const router = express()

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = authRoutes;