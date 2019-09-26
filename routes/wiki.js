const express = require('express');
const router = express.Router();
const addPage = require("../views/addPage");
const { Page } = require("../models");
const wikipage = require("../views/wikipage");
const main = require("../views/main");

router.get("/", (req, res) => {
  const findPages = Page.findAll({attributes: ['title']});
  res.send(main(findPages));
});

router.post("/", async (req, res, next) => {
  //res.send('got to POST /wiki/')
  // res.json(req.body);
  try {
  const page = await new Page({
    title: req.body.title,
    content: req.body.content
  });
    await page.save();
    console.log(page.slug);
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) {next(error)}
});

router.get("/add", (req, res) => {
  res.send(addPage());
});

router.post("/:slug", async (req, res, next) => {
  const [slug] = await page.update(req.body, {where: {slug: req.params.slug},returning: true});
  console.log(slug);
  res.redirect(`/wiki/${req.params.slug}`);
});

router.get("/:slug", async (req, res, next) => {
  try {
    const findWikiTitle = await Page.findOne({where:{slug:req.params.slug}});
    console.log(findWikiTitle)
    res.send(wikipage(findWikiTitle));
  }
  catch(error) {
    next(error);
  }
});


module.exports = router;
