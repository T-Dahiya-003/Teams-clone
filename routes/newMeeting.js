const express = require("express");
const route = express.Router();
const { authorize } = require("../config/auth");
const { v4: uuidV4 } = require("uuid");
route.get("/", authorize, (req, res) => {
  res.redirect(`/${uuidV4()}`);
});

module.exports = route;
