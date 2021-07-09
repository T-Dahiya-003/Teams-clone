const express = require("express");
const route = express.Router();
const { authorize } = require("../config/auth");

route.get("/", authorize, (req, res) => {
  res.render("index.ejs", { tabName: "Home", user: req.user });
});

module.exports = route;
