import Article from '../models/articleModel.js'

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find({})
    res.send(articles)
  } catch (err) {
    res.send('Article Not Found')
  }
}

const getArticle = async (req, res) => {
  try {
    console.log('id: ' + req.params.id)
    const article = await Article.findById(req.params.id)
    res.send(article)
  } catch (err) {
    res.send('Article Not Found')
  }
}

export { getAllArticles, getArticle }
