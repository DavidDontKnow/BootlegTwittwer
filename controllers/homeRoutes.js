const express = require('express');
const router = express.Router();

// homepage
router.get('/', async (req, res) => {
  try {
    // homepage should have all chirps and navbar links
    res.render('homepage');
    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

// login page
router.get('/login', (req, res) => {
  // if user is logged in, redirect to user profile
  try {
    if (req.session.logged_in) {
      res.redirect(`/users/${req.session.user_id}`);
      return;
    }
    // login should have form to login
    res.render('login');
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// signup page
router.get('/signup', (req, res) => {
  try {
    // if user is logged in, redirect to user profile
    if (req.session.logged_in) {
      res.redirect(`/users/${req.session.user_id}`);
      return;
    }
    // signup should have form to create new user
    res.render('signup');
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
