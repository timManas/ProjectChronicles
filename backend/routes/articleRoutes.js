import express from 'express'
import {
  getAllArticles,
  getArticle,
  getArticles,
} from '../controllers/articleController.js'

const articleRoutes = express.Router()

articleRoutes.route('/').get(getAllArticles)
articleRoutes.route('/:articleType/:num').get(getArticles)
articleRoutes.route('/:id').get(getArticle)

export default articleRoutes
