const Jwt = require("jsonwebtoken")

exports.Jwtoken = {
   Sign: data => Jwt.sign(data, process.env.TOKEN_KEY, { expiresIn: "60d" }),
   Verify: token => Jwt.verify(token, process.env.TOKEN_KEY),
}
