require("dotenv").config()
const { User } = require("../Models/User.Schema")
const { Hashing } = require("../Helpers/hash")
const { v4: uuid } = require("uuid")
const { Mail } = require("../Helpers/mailBody")
const { userQuery } = require("../Helpers/userQuery")
const { Jwtoken } = require("../Helpers/jwt")
const { updatedData } = require("../Helpers/updatedData")
const { payLoad } = require("../Helpers/getToken")
const crypto = require("crypto")

//AUTH: register
exports.userRegister = async (req, res) => {
   try {
      const {
         username,
         email,
         password,
         age,
         gender,
         phoneNumber,
         country,
         city,
         postalCode,
         streetName,
         houseNumber,
      } = req.body
      const user = new User({
         username,
         email,
         password: await Hashing.Hash(password),
         age,
         gender,
         phoneNumber,
         userId: uuid(),
         emailToken: crypto.randomBytes(32).toString("hex"),
         avatar: req.file.filename,
         address: {
            country,
            city,
            postalCode,
            streetName,
            houseNumber,
         },
      })
      const result = await user.save()
      const sendingMail = await Mail(
         process.env.Mail_LOGIN,
         email,
         `Hello ${username}, welcome to your store`,
         "Hello world from mongoDb Intro ",
         "<h1>HELLO WORLD!</h1>"
      )
      return res
         .status(201)
         .json({ user: result, mailId: sendingMail.messageId })
   } catch (error) {
      return res.status(400).json({ errorMessage: error })
   }
}

//AUTH: login
exports.userLogin = async (req, res) => {
   try {
      const { login, password } = req.body
      const { user, message } = await userQuery.FindUser(login, password)
      if (!user) {
         throw new Error(message)
      }
      const Token = Jwtoken.Sign({
         userId: user.userId,
         email: user.email,
         username: user.username,
         isVerified: user.isVerified,
      })
      const lastLogin = await User.updateOne(
         { email: user.email },
         { lastLogin: Date.now() }
      )
      res.status(200).json({ Token, user })
   } catch (error) {
      res.status(400).json({ errorMessage: error.message })
   }
}

//PROFILE: get user infos
exports.getUserInfos = async (req, res) => {
   try {
      const { userId } = payLoad(req.headers.authorization)
      const unwantedKeys = {
         _id: 0,
         __v: 0,
         password: 0,
         isVerified: 0,
         emailToken: 0,
         createdAt: 0,
         userId: 0,
      }
      const userInfos = await User.findOne({ userId }, unwantedKeys)
      return res.status(200).json({ user: userInfos })
   } catch (error) {
      return res.status(400).json({ errorMessage: error })
   }
}

//PROFILE: update user infos
exports.updateUserInfos = async (req, res) => {
   try {
      const props = await updatedData.User(req.body)
      const { userId } = payLoad(req.headers.authorization)
      req.file ? (props["avatar"] = req.file.filename) : null
      const infosUpdated = await User.findOneAndUpdate({ userId }, props, {
         new: true,
      })
      return res.status(200).json(infosUpdated)
   } catch (error) {
      return res.status(400).json({ errorMessage: error })
   }
}

//PROFILE: delete user
exports.deleteProduct = async (req, res) => {
   try {
      const { userId } = payLoad(req.headers.authorization)
      const userDelted = await User.findOneAndDelete({ userId })
      return res.status(200).send("user deleted")
   } catch (error) {
      return res.status(400).json({ message: error })
   }
}
