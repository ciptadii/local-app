const express = require("express")
const users = express.Router()
const cors = require ("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require ("bcrypt")

const User =require("../models/User")

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
        }else {
            res.json({ error: 'User alredy exsist' })
        }
    })
    .catch(err => {
        res.send('error: ' + err)
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
            first_name: user.first_name,
            last_name: user.last_name,
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
  

module.exports = users