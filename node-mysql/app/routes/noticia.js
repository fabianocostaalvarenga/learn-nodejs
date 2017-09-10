'strict mode'

module.exports = function (app) {
  app.get('/noticia', function (req, res) {
    const connection = app.config.dbConnection()
    const noticiaModel = app.app.models.noticiasModel

    noticiaModel.getNoticia(connection, function (error, result) {
      res.render('noticias/noticia', {noticia: result})
    })
  })
}
