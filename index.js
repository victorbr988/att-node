const express = require('express')
const token = require('./token')
const {validation, validationToken} = require('./validation')
const app = express()

app.use(express.json())

app.post('/user/register',validation, (req, res) => {
  res.status(201).json({ message: "user created" })
})

app.post('/user/login', validationToken, token, (req, res) => {
  const { token } = req
  res.status(200).json({token})
})

app.listen('3001', () => console.log('rodando aplicação'))
