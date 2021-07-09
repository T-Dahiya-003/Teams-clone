const express = require("express");
const route = express.Router();
const { notAuthorize } = require("../../config/auth");
const passport = require("passport");
route.get("/", notAuthorize, (req, res) => {
  res.render("auth/login.ejs", { tabName: "Login " });
});
route.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);
module.exports = route;
