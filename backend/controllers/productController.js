import Product from '../models/productModel.js'

const productController = async (req, res) => {
  const ProductToSend = await Product.find({})
  res.send(ProductToSend)
}

export default productController
