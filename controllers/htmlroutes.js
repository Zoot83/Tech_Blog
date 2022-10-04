const router = require('express').Router();
const sequelize = require('../config/connection.js');
const withAuth = require('../utils/authorize.js');
const { User, Comment, Posting } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postingData = await Posting.findAll().catch((err) => {
      res.json(err);
    });
    const postings = postingData.map((posting) => posting.get({ plain: true }));
    res.render('home', {
      loggedIn: req.session.loggedIn,
      user: req.session.user_id,
      postings,
    });
  } catch (error) {
    res.status(500).json();
  }
});

router.get('/dashboard', async (req, res) => {
  res.render('dashboard', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
  });
});

router.get('/login', async (req, res) => {
  res.render('login', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
  });
});

router.get('/signup', async (req, res) => {
  res.render('signup', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
  });
});

module.exports = router;
