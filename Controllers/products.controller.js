const { Product } = require("../Models/Product.Schema")
const { updatedData } = require("../Helpers/updatedData")
const { filterQuery } = require("../Helpers/filterQuery")
const { Jwtoken } = require("../Helpers/jwt")
const { payLoad } = require("../Helpers/getToken")

//get all products
exports.getProducts = async (req, res) => {
   try {
      const [queryObject, pagingObject, sortingOject] = filterQuery(req.query)
      const productsList = await Product.find(queryObject)
         .sort(sortingOject)
         .skip(pagingObject.page)
         .limit(pagingObject.limit)
      return res.status(200).json(productsList)
   } catch (error) {
      return res.status(400).json({ message: error })
   }
}

//add product
exports.addProduct = async (req, res) => {
   try {
      const { userId } = payLoad(req.headers.authorization)
      const { title, description, price, category, stock } = req.body
      const product = new Product({
         title,
         description,
         price,
         category,
         stock,
         owner: userId,
      })
      const result = await product.save()
      return res.status(201).json(product)
   } catch (error) {
      return res.status(400).json({ message: error })
   }
}

//get product by id
exports.getProductById = async (req, res) => {
   try {
      const { id } = req.params
      const product = await Product.findById(id)
      return res.status(200).json(product)
   } catch (error) {
      return res.status(400).json({ message: error })
   }
}

//update product
exports.updateProduct = async (req, res) => {
   try {
      const props = updatedData.Product(req.body)
      const { id } = req.params
      const productUpdated = await Product.findByIdAndUpdate(id, props, {
         new: true,
      })
      return res.status(200).json(productUpdated)
   } catch (error) {
      return res.status(400).json({ message: error })
   }
}

//delete product
exports.deleteProduct = async (req, res) => {
   try {
      const { id } = req.params
      const productDeleted = await Product.findByIdAndDelete(id)
      return res.status(200).send("product deleted")
   } catch (error) {
      return res.status(400).json({ message: error })
   }
}

//stats products
exports.productsStats = async (req, res) => {
   try {
      const { category } = req.query
      const stat = await Product.aggregate([
         //stage 1
         { $match: { category } },
         //stage 2
         {
            $group: {
               _id: "$category",
               totalStock: { $sum: "$stock" },
               averagePrice: { $avg: "$price" },
               minPrice: { $min: "$price" },
               max: { $max: "$price" },
            },
         },
      ])
      return res.status(200).json(stat)
   } catch (error) {
      return res.status(400).json({ message: error })
   }
}
//test
