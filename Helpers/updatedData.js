const { Hashing } = require("../Helpers/hash")

exports.updatedData = {
   Product: requestBody => {
      const inputs = [
         "title",
         "description",
         "price",
         "category",
         "owner",
         "stock",
         "published",
      ]
      const dataToModify = {}
      for (let [key, value] of Object.entries(requestBody)) {
         inputs.includes(key) ? (dataToModify[key] = value) : null
      }
      return dataToModify
   },
   User: async requestBody => {
      const inputs = [
         "username",
         "email",
         "age",
         "phoneNumber",
         "avatar",
         "password",
      ]
      const dataToModify = {}
      for (let [key, value] of Object.entries(requestBody)) {
         inputs.includes(key) ? (dataToModify[key] = value) : null

         // if (inputs.includes(key)) {
         //    if (key == "password" && value) {
         //       dataToModify[key] = await Hashing.Hash(value)
         //    } else {
         //       dataToModify[key] = value
         //    }
         // }
      }
      return dataToModify
   },
}
