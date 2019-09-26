const express = require('express');
const router = express.Router();
const addPage = require("../views/addPage")

router.get("/", (req, res) => {

});

router.post("/", (req, res) => {

});

router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
