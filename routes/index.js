var express = require('express');
const {isLoggedIn} = require('../middleware/protectors');
const {getRecentPosts, getPostById, getCommentsForPostById} = require('../middleware/posts');
var router = express.Router();

/* GET home page. */
router.get('/', getRecentPosts, function(req, res, next) {
  res.render('index', { title: 'Eudaimonia', name:"Omar Dajani ", js:["fetch.js"]});
});

router.get("/login", function(req, res) {
  res.render('login');
});

router.get("/registration", function(req, res) {
  res.render("registration", {js:["validation.js"]});
});

router.get("/postimage", isLoggedIn, function(req, res) {
  res.render("postimage");
});

router.get("/viewpost", function(req, res) {
  res.render("viewpost", {js:["viewpost.js"]});
});

router.get("/posts/:id(\\d+)", getPostById, getCommentsForPostById, function(req, res) {
  res.render("viewpost", {js:["viewpost.js"]});
});


module.exports = router;