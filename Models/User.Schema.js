const { Hashing } = require("../Helpers/hash")
const { Schema, default: mongoose } = require("mongoose")

const AddressSchema = new Schema(
   {
      country: String,
      city: String,
      postalCode: Number,
      streetName: String,
      houseNumber: Number,
   },
   { _id: false }
)

const UserSchema = new Schema(
   {
      username: {
         type: String,
         required: true,
         minlength: [5, "Your username must be at least 5 characters long"],
         maxlength: [15, "Your username cannot exceed 15 characters "],
      },
      email: {
         type: String,
         required: true,
         unique: true,
         lowercase: true,
         validate: {
            validator: email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
            message: "Invalid email format",
         },
      },
      password: {
         type: String,
         required: true,
      },
      age: {
         type: Number,
         required: true,
      },
      address: AddressSchema,
      gender: {
         type: String,
         required: true,
         validate: {
            validator: gender =>
               ["male", "female"].includes(gender.toLowerCase()),
            message: "Male or female there is not third option",
         },
      },
      phoneNumber: {
         type: String,
         required: true,
         validate: {
            validator: tel => /^0[67]\d{8}$/.test(tel),
            message: "Invalide phone number",
         },
      },
      userId: {
         type: String,
         required: true,
      },
      isVerified: {
         type: Boolean,
         default: false,
      },
      emailToken: {
         type: String,
         required: true,
      },
      avatar: {
         type: String,
         validate: {
            validator: img => /\.(jpg|jpeg|png|gif)$/.test(img),
            message: "invalid image format",
         },
      },
      lastLogin: {
         type: Date,
      },
   },
   { timestamps: { createdAt: true, updatedAt: false }, collection: "Users" }
).pre("findOneAndUpdate", async function (next) {
   try {
      const user = await this.model.find(this.getQuery())
      const compare = await Hashing.Compare(
         this._update.password,
         user[0].password
      )
      compare
         ? (this._update.password = user[0].password)
         : (this._update.password = await Hashing.Hash(this._update.password))
      next()
   } catch (error) {
      next(error)
   }
})

exports.User = mongoose.model("User", UserSchema)
