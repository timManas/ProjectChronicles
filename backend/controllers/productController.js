import Product from '../models/productModel.js'
import { ObjectId } from 'mongodb'

const getAllProducts = async (req, res) => {
  const ProductToSend = await Product.find({})
  res.send(ProductToSend)
}

const getProduct = async (req, res) => {
  console.log('id: ' + req.params.id)
  const singleProduct = await Product.findById(req.params.id)
  res.send(singleProduct)
}

export { getAllProducts, getProduct }
