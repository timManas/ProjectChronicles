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
      require: false,
    },
    category: {
      type: String,
      require: true,
    },
    articlePage: {
      author: { type: String, required: false },
      date: { type: String, required: false },
      price: { type: String, required: false },
      header: { type: String, required: true },
      intro: { type: String, required: false },
      paragraph1: { type: String, required: false },
      image1: { type: String, required: false },
      paragraph2: { type: String, required: false },
      image2: { type: String, required: false },
      paragraph3: { type: String, required: false },
      image3: { type: String, required: false },
      outro: { type: String, required: false },
    },
  },
  {
    timestamps: true,
  }
)

// const articleSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       require: true,
//     },
//     image: {
//       type: String,
//       require: true,
//     },
//     description: {
//       type: String,
//       require: true,
//     },
//     brand: {
//       type: String,
//       require: true,
//     },
//     category: {
//       type: String,
//       require: true,
//     },
//     articlePage: {
//       price: { type: String, required: false },
//       header: { type: String, required: true },
//       details: { type: String, required: true },
//     },
//   },
//   {
//     timestamps: true,
//   }
// )

const Article = mongoose.model('Article', articleSchema)

export default Article
