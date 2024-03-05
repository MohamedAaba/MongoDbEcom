const { Schema, default: mongoose } = require("mongoose")

// const ImageSchema = new Schema({
//    fileName: String,
//    path: String,
// })

const ProductSchema = new Schema(
   {
      title: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         minlength: [
            15,
            "The product description must be at least 15 characters long",
         ],
      },
      price: {
         type: Number,
         required: true,
      },
      category: {
         type: String,
         required: true,
      },
      images: [String],
      owner: {
         type: String,
         required: true,
      },
      stock: {
         type: Number,
         min: [1, "The product stock must be at least 1 unity"],
      },
      published: {
         type: Boolean,
         default: false,
      },
   },
   { timestamps: true, collection: "Products" }
)

exports.Product = mongoose.model("Product", ProductSchema)
