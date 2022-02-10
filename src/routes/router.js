const router = require("express").Router();

/* This is the router file. You can add your own routes here. I have added a few basic routes here for your understanding.*/

// homepage
router.get("/", (req, res) => {
  res.type("text/plain");
  res.send("🚀 Welcome young padwan! go to /about!");
});

// about
router.get("/about", async (req, res) => {
  res.type("text/plain");
  res.send("🚀 Ad-Astra is a Latin phrase for -> To The Stars 🌃!");
});

module.exports = router;