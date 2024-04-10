

// List the four products which are greater than 500 in price:

db.products.find({ product_price: { $gt: 500 } }).limit(4)
[
    {
      _id: ObjectId('6613e05c9945443c7a16c9b5'),
      id: '1',
      product_name: 'Intelligent Fresh Chips',
      product_price: 655,
      product_material: 'Concrete',
      product_color: 'mint green'
    },
    {
      _id: ObjectId('6613e05c9945443c7a16c9b6'),
      id: '2',
      product_name: 'Practical Fresh Sausages',
      product_price: 911,
      product_material: 'Cotton',
      product_color: 'indigo'
    },
    {
      _id: ObjectId('6613e05c9945443c7a16c9b7'),
      id: '3',
      product_name: 'Refined Steel Car',
      product_price: 690,
      product_material: 'Rubber',
      product_color: 'gold'
    }
  ]