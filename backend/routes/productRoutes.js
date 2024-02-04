import express from 'express'
import { getAllProducts, getProduct } from '../controllers/productController.js'

const productRoutes = express.Router()

productRoutes.route('/:id').get(getProduct)
productRoutes.route('/').get(getAllProducts)

export default productRoutes
