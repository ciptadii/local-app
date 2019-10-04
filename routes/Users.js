const express = require("express")
const users = express.Router()
const cors = require ("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require ("bcrypt")
const crypto = require("crypto");
const sgMail = require("@sendgrid/mail");
const User =require("../models/User")

router.get("/", (req, res) => {
  const user = (req.user && req.user.hidePassword()) || {};
  res.send({ message: "User info successfully retreived", user });
});

users.use(cors())
process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) =>{
    const today = new Date()
    const userData = {
        email: req.body.email,
        password: req.body.password,
        created: today
    }

    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if (!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
              if (err) return next(err);
                userData.password = hash
                User.create(userData)
                    .then(user => {
                        res.json({ status: user.email + ' Registerd!'})
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
                })
            } else {
                res.json({ error: 'User alredy exsist' })
          }
    })
})

users.post('/Login', (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            email: user.email
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          // Passwords don't match
          res.json({ error: 'User does not exist' })
        }
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post("/forgot", (req, res) => {
  const { error } = validateEmail(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!user)
      return res.status(400).send({ message: "This email is not valid." });

    // Create a verification token
    var token = new Token({
      _userId: user._id,
      token: crypto.randomBytes(16).toString("hex")
    });

    user.passwordResetToken = token.token;
    user.passwordResetExpires = moment().add(12, "hours");

    user.save(function(err) {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      // Save the token
      token.save(function(err) {
        if (err) {
          return res.status(500).send(err.message);
        }
        // Send the mail
        const mail = {
          to: user.email,
          from: `no-reply@mern-auth-server.herokuapp.com`,
          subject: "Reset password link",
          text: "Some useless text",
          html: `<p>You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n Please click on the following link, or paste this into your browser to complete the process:\n\n
        <a href="https://${host}/login/reset/${
            token.token
          }">https://${host}/login/reset/${
            token.token
          }</a> \n\n If you did not request this, please ignore this email and your password will remain unchanged.\n </p>`
        };
        sgMail
          .send(mail)
          .then(() => {
            return res
              .status(200)
              .send({ message: "A verification mail has been sent." });
          })
          .catch(error => {
            return res.status(500).send({ message: error });
          });
      });
    });
  });
});


module.exports = users