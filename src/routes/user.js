const express = require('express');

const router = new express.Router();

const User = require('../models/user');
const auth = require('../middleware/auth');

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

// SIGNIN USER
router.post('/users/signin', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );

    const token = await user.generateAuthToken();

    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

// READ USER
router.get('/users/me', auth, async (req, res) => {
  res.send(req.user);
});

// UPDATE USER
router.patch('/users/me', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const user = await req.user;

    updates.forEach(update => {
      user[update] = req.body[update];
    });

    await user.save();

    if (!user) {
      return res.status(404).send();
    }

    res.send(req.user);
  } catch (e) {
    res.status(400).send();
  }
});

// DELETE USER
router.delete('/users/me', auth, async (req, res) => {
  await req.user.remove();
  res.status(200).send(req.user);
});

module.exports = router;
