import express from 'express'
import { getAllArticles, getArticle } from '../controllers/articleController.js'

const articleRoutes = express.Router()

articleRoutes.route('/').get(getAllArticles)
articleRoutes.route('/:id').get(getArticle)

export default articleRoutes
