const Router = require("express").Router()
const {
   getProducts,
   addProduct,
   getProductById,
   updateProduct,
   deleteProduct,
   productsStats,
} = require("../Controllers/products.controller")

Router.route("/stats").all().get(productsStats)
Router.route("/:id")
   .all()
   .get(getProductById)
   .patch(updateProduct)
   .delete(deleteProduct)
Router.route("/").all().get(getProducts).post(addProduct)
module.exports = Router
