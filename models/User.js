const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  passwordResetToken: { type: String, default: "" },
  passwordResetExpires: { type: Date, default: Date("2019/09/01") },
  isVerified: {
    type: Boolean,
    required: true,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.hash_password);
};
userSchema.methods.hidePassword = function() {
  return R.omit(["password", "__v", "_id"], this.toObject({ virtuals: true }));
};

module.exports = User = mongoose.model('users', UserSchema)