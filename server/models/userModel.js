const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

// creating a static signup method
userSchema.statics.signup = async function(email, password) {

  //validation

  //if you dont have a value for either of these
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  //checks for a valid email 
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  //checks strength of password
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email })

  //check if email already exists in db 
  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10) // random string of characters that gets added to user passwords before it gets hashed
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash }) //value of the password is going to be equal to the hash 

  return user
}

// static login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  // look for that email in the db
  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }
  //compare password input with hashed password to see if they match 
  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)