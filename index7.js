

// Find all products which contain the value of "soft" in product material:

db.products.find({ product_material: { $regex: /soft/i } })
[
    {
      _id: ObjectId('6613e05c9945443c7a16c9b8'),
      id: '4',
      product_name: 'Gorgeous Plastic Pants',
      product_price: 492,
      product_material: 'Soft',
      product_color: 'plum'
    },
    {
      _id: ObjectId('6613e05c9945443c7a16c9bd'),
      id: '9',
      product_name: 'Awesome Wooden Ball',
      product_price: 28,
      product_material: 'Soft',
      product_color: 'azure'
    },
    {
      _id: ObjectId('6613e34f9945443c7a16c9bf'),
      id: '11',
      product_name: 'Unbranded Wooden Cheese',
      product_price: 26,
      product_material: 'Soft',
      product_color: 'black'
    },
    {
      _id: ObjectId('6613e34f9945443c7a16c9c7'),
      id: '19',
      product_name: 'Intelligent Cotton Chips',
      product_price: 46,
      product_material: 'Soft',
      product_color: 'azure'
    }
  ]