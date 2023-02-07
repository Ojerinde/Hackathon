const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;
const { isEmail } = require('validator')

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "email already exists"],
    validate: [isEmail, 'incorrect email'],
    required: [true, 'Enter an email'],
    trim:true
  },
  first_name: {
    type: String,
    required: [true, 'Enter your first name'],
    trim:true
  },
  last_name: {
    type: String,
    required: [true, 'Enter your last name'],
    trim:true
  },
  password: {
    type:String,
    required: [true, "incorrect password"],
    select: false
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }

},{timestamps:true});

UserSchema.pre(
  'save',
  async function (next) {
      const user = this
      // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
          const  salt = await bcrypt.genSalt(),
            hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
      next();
  }
);

UserSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
}


module.exports = mongoose.model("User", UserSchema)