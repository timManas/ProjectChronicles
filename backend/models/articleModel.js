import mongoose from 'mongoose'

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    articlePage: {
      price: { type: String, required: false },
      header: { type: String, required: true },
      details: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
)

const Article = mongoose.model('Article', articleSchema)

export default Article
