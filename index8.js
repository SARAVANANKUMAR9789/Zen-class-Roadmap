

// Find products which contain product color "indigo" and product price 492.00:

db.products.find({ "product_color": "indigo", "product_price": 492.00 })
db.products.find({$and: [{ "product_color": "indigo" },{ "product_price": 492.00 }]})
  