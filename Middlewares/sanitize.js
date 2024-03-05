const XSS = require("xss")

exports.Sanitaze = (req, res, next) => {
   const inputs = [
      "login", //user inputs
      "username",
      "email",
      "password",
      "age",
      "gender",
      "phoneNumber",
      "title", //product inputs
      "description",
      "price",
      "category",
      "stock",
   ]
   for (i in inputs) {
      if (req.body[inputs[i]]) {
         req.body[inputs[i]] = XSS(req.body[inputs[i]])
      }
   }
   next()
}
