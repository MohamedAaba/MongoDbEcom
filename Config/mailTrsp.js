require("dotenv").config()
const Nodemailer = require("nodemailer")

exports.Transporter = Nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 587,
   secure: false,
   auth: {
      user: process.env.MAIL_LOGIN,
      pass: process.env.MAIL_PASSWOORD,
   },
})
