const { Jwtoken } = require("../Helpers/jwt")

exports.payLoad = token => {
   return Jwtoken.Verify(token.split(" ")[1])
}
