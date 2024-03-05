const { User } = require("../Models/User.Schema")
const { Hashing } = require("../Helpers/hash")

exports.userQuery = {
   FindUser: async (username, password) => {
      let res = { message: "Nothing happen", user: 0 }
      let user = await User.findOne({ email: username })
      if (user) {
         if (await Hashing.Compare(password, user.password)) {
            res.message = `WELCOME ${user.username}`
            res.user = user
         } else {
            res.message = `Password wrong :/`
         }
      } else {
         res.message = `Email wrong :/`
      }
      return res
   },
}
