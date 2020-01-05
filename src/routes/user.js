const express = require('express');

const router = new express.Router();

const User = require('../models/user');

// SIGNUP USER
router.post('/users/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();

    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
