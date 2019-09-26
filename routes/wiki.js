const express = require('express');
const router = express.Router();
const addPage = require("../views/addPage")

router.get("/", (req, res) => {
  res.send('got to GET /wiki/')
});

router.post("/", (req, res) => {
  //res.send('got to POST /wiki/')
  res.json(req.body);
});

router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
