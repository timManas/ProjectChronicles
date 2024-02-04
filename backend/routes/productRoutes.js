import express from 'express'
import Product from '../models/productModel.js'
import productController from '../controllers/productController.js'

const productRoutes = express.Router()

productRoutes.route('/').get(productController)

export default productRoutes
