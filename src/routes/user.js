const express = require('express');

const router = new express.Router();

const User = require('../models/user');

router.post('/users/signup', async (req, res) => {
  try {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    });

    await user.generateAuthToken();
    await user.save();

    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
