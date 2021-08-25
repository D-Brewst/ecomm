const db = require("../models");
const jwt = require("jwt-simple");
const config = require("../config.js")

function tokenForUser(user){
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

module.exports = {
  login: (req, res, next) => {
    res.send({ token: tokenForUser(req.user) });
  },

  createNew: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      console.log("USER", username, "EMAIL", email, "Password", password);
      const newUser = await db.User.create({
        username: username,
        email: email,
        password: password,
      });

      console.log(newUser);

      res.json({
        newUser: newUser,
        token: tokenForUser(newUser)
      });

    } catch (err) {
      console.log("err", err);
    }
  },
};