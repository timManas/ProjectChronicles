import dotenv from 'dotenv'
// This needs to be defined
dotenv.config({
  path: '../.env',
})
import express from 'express'
import articleRoutes from './routes/articleRoutes.js'
import cors from 'cors'

import connectDB from './config/db.js'

connectDB()

const PORT = process.env.PORT || 5000

const app = express()

app.use('/api/articles', articleRoutes)

app.listen(PORT, () => {
  console.log(`Server running in Port: ${PORT}`)
})
