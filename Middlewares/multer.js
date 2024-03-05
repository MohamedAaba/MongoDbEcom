const Multer = require("multer")

const storage = Multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "public/images")
   },
   filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname)
   },
})

exports.Upload = img => Multer({ storage }).single(img)
