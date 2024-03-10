import path from 'path'
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
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/articles', articleRoutes)

const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
  app.use('/uploads', express.static('/var/data/uploads'))
  app.use(express.static(path.join(__dirname, './frontend/dist')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  )
} else {
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.listen(PORT, () => {
  console.log(`Server running in Port: ${PORT}`)
})
