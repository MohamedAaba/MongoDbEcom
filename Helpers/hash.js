const bcrypt = require("bcrypt")

exports.Hashing = {
   Hash: async password => await bcrypt.hash(password, 10),
   Compare: async (password, db_password) =>
      await bcrypt.compare(password, db_password),
}
