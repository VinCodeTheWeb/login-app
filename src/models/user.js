const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

// HASH PASSWORD BEFORE SAVING
userSchema.pre('save', async function() {
  const user = this;

  if (user.isModified('password')) {
    await bcrypt.hash(user.password, 8);
    await user.save();
  }
  return user;
});

// GENERATE AUTH TOKEN
userSchema.methods.generateAuthToken = async function() {
  const user = this;

  const token = await jwt.sign(
    { _id: user._id.toString() },
    proccess.env.JWT_SECRET
  );

  user.tokens.concact({ token });

  return token;
};

// FIND USER BY EMAIL & PASSWORD

const User = mongoose.model('User', userSchema);

module.exports = User;
