

// Find the product with a row id of 10

db.products.find({ "id": "10" })
[
    {
      _id: ObjectId('6613e05c9945443c7a16c9be'),
      id: '10',
      product_name: 'Generic Wooden Pizza',
      product_price: 84,
      product_material: 'Frozen',
      product_color: 'indigo'
    }
]