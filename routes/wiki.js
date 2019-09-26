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
    // console.log(page);
    res.redirect('/');
  } catch (error) {next(error)}
});

router.get("/add", (req, res) => {
  res.send(addPage());
});

router.post("/:slug", async (req, res, next) => {
  const [slug] = await page.update(req.body, {where: {slug: req.params.slug},returning: true});
  console.log(slug);
  res.redirect(`/wiki/${req.params.slug}`);
})


module.exports = router;
