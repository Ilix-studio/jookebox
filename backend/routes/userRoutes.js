const express = require("express");
const router = express.Router();


router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getMe);

module.exports = router;