exports.filterQuery = requestQuery => {
   const queryObj = { price: { $gte: 0 } }
   const paging = { page: 0, limit: 0 }
   const sorting = {}
   for (let [key, value] of Object.entries(requestQuery)) {
      switch (key) {
         case "minPrice":
            queryObj.price["$gte"] = parseFloat(value)
            break
         case "maxPrice":
            queryObj.price["$lte"] = parseFloat(value)
            break
         case "page":
            paging.page = parseInt(value)
            break
         case "limit":
            paging.limit = parseInt(value)
            break
         case "sortBy":
            sorting[value] = 1
            break
         case "order":
            Object.keys(sorting)
               ? (sorting[Object.keys(sorting)] = /^1|-1$/.test(value)//sorting[stock]
                    ? parseInt(value)
                    : value)
               : null
            break
         case "category":
            queryObj[key] = value
            break
         case "search":
            queryObj.description = new RegExp(value, "i")
            break
         default:
            return res.status(400).send("check your filters please :/")
      }
   }
   return [queryObj, paging, sorting]
}
