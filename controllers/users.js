const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../model/userDB')

usersRouter.post('/', async (request, response) => {
  let { userfName, userlName,userGender,userAge,userEmail,userPassword } = request.body

  const saltRounds = 10
  userPassword = await bcrypt.hash(userPassword, saltRounds)
  const user = new User({
    userfName,
    userlName,
    userGender,
    userAge,
    userEmail,
    userPassword,
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

module.exports = usersRouter