'strict mode';

module.exports = function (app) {
  app.get('/formulario_inclusao_noticia', function (req, res) {
    res.render('admin/form_add_noticia');
  })

  app.post('/noticias/salvar', function (req, res) {
    const noticia = req.body;

    const connection = app.config.dbConnection();
    const noticiasModel = app.app.models.noticiasModel;

    noticiasModel.salvarNoticia(noticia, connection, function (error, result) {
      console.log(noticia);
      res.redirect('/noticias');
    })
  })
}
