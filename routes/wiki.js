const express = require('express');
const router = express.Router();
const addPage = require("../views/addPage");
const { Page } = require("../models");


router.get("/", (req, res) => {
  res.send('got to GET /wiki/')
});

router.post("/", async (req, res, next) => {
  //res.send('got to POST /wiki/')
  // res.json(req.body);
  const page = new Page({
    title: req.body["title"],
    content: req.body["content"]
  });
  try {
    await page.save();
    res.redirect('/');
  } catch (error) {next(error)}
});

router.get("/add", (req, res) => {
  res.send(addPage());
});

const slug = (title) => {
  return title.replace(/\s+/g, '_').replace(/\W/g, '')
}
module.exports = router;
