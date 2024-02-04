import express from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'

// This needs to be defined
dotenv.config({
  path: '../.env',
})

import connectDB from './config/db.js'

// Setup DB
connectDB()

const PORT = 5000

const app = express()

// Use cors otherwise get CORS related errors ...
app.use(cors())

app.use('/products', productRoutes)

app.listen(PORT, () => {
  console.log(`Server running in Port: ${PORT}`)
})
