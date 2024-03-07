import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })
import mongoose from 'mongoose'
import Article from './models/articleModel.js'
import articles from './data/articles.js'

const addEntry = async () => {
  try {
    console.log('MONGOURI: ' + process.env.MONGO_URI)
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected: ' + conn.connection.host)
    await Article.insertMany(articles)
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

const deleteEntry = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected: ' + conn.connection.host)
    await Article.deleteMany(articles)
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

if (process.argv[2] == '-d') {
  deleteEntry()
} else {
  addEntry()
}
