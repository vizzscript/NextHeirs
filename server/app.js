
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserRegistrationModel = require('./models/userRegistration')


const app = express()

app.use(express.json())

app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/user')

app.post('/registration', (req, res) => {
  const { email, password, confirmPassword } = req.body

  if (!email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'Email, password, and confirm password are required' })
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match!!!' })
  }

  UserRegistrationModel.create({ email, password })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
  const { email, password} = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email, password are required' })
  }

  // if (password !== confirmPassword) {
  //   return res.status(400).json({ message: 'Passwords do not match' })
  // }

  UserRegistrationModel.create({ email, password })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log('server is running');
})

