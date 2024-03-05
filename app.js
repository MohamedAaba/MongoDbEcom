require("dotenv").config()
const Express = require("express")
const Mongoose = require("mongoose")
const productRoutes = require("./Routes/products.routes")
const userrRoutes = require("./Routes/users.routes")
const App = Express()

const PORT = process.env.PORT || 5050
const DB_URL = process.env.DB_URL

App.use(Express.json())
App.use(Express.urlencoded({ extended: true }))
App.use(Express.static(__dirname + "/Public/Images"))
App.use("/api/products", productRoutes)
App.use("/api", userrRoutes)

Mongoose.connect(DB_URL)
   .then(() => console.log("MONGODB CONNECTION ON :)"))
   .catch(error => console.error("ERROR IN MONGODB CONNECTION: ", error))

App.on("error", err => console.log(`SERVER ENCOUNTER ERROR ${err}`))
App.listen(PORT, () => console.log(`SERVER ON http://localhost:${PORT} :)`))
