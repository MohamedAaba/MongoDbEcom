const Router = require("express").Router()
const {
   userRegister,
   userLogin,
   getUserInfos,
   updateUserInfos,
   deleteProduct,
} = require("../Controllers/users.controller")

const { Upload } = require("../Middlewares/multer")

Router.route("/auth/register").all().post(Upload("avatar"), userRegister)
Router.route("/auth/login").all().post(userLogin)
Router.route("/profile")
   .all()
   .get(getUserInfos)
   .patch(Upload("avatar"), updateUserInfos)
   .delete(deleteProduct)

module.exports = Router
