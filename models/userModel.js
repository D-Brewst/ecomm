const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: "Username is Required",
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."],
  },

  email: {
    type: String,
    unique: true,
    lowercase: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
});

UserSchema.pre('save', function(next){
  const user = this;

  bcrypt.genSalt(10, function(err, salt){
    if(err){
      return next(err);
    }
    bcrypt.hash(user.password, salt, function(err, hash){
      if(err){
        return next(err);
      }
      user.password = hash;
      next();
    })
  })
})

UserSchema.methods.comparePassword = function(candidatePassword, callback){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err){
      return callback(err);
    }
    callback(null, isMatch);
  })
}

const User = mongoose.model("User", UserSchema);

module.exports = User;