import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })
import mongoose from 'mongoose'
import Article from './models/articleModel.js'
import articles from './data/articles.js'

const addEntry = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    await Article.insertMany(articles)
    console.log('Finished Adding Data')
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

const deleteEntry = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    await Article.deleteMany()
    console.log('Finished Removing Data')
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
