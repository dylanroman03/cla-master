const pool = require("../database");
const { Router } = require("express");
const router = Router();

router.get("/signup", (req, res) => {
  res.send("helllo");
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const newUser = {
    email,
    password,
  };
  await pool.query("INSERT INTO users SET ?", [newUser]);
  res.redirect("/success.html");
});

router.get("/list", async (req, res) => {
  const users = await pool.query("SELECT * FROM users");
  res.send(users);
});

module.exports = router;
