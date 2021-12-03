// acesso as funções que cuidam dos dados
const filmeService = require('../services/service')

const getFilmes = (req, res) => {
  const filmes = filmeService.getFilmes()
  res.send(filmes)
}

// retorna 1 filme de acordo com o Id
const getFilmesById = (req, res) => {
  const id = req.params.id
  const filme = filmeService.getFilmesById(id)
  res.send(filme)
}

const postFilme = (req, res) => {
  const filme = req.body
  const novoFilme = filmeService.addFilme(filme)
  res.send({message: `Filme ${novoFilme.filme} do diretor: ${novoFilme.diretor} adicionado com sucesso.`})
}

const putFilme = (req, res) => {
  const idParam = req.params.id

  const filmeEdit = req.body
  const edicao = filmeService.putFilme(idParam, filmeEdit)

  if(edicao) {
    res.send({message: `Filme editado`})
  } else {
    res.status(404).send({message: `Não encontramos o filme, tente novamente`})
  }
}

const deleteFilme = (req, res) => {
  const apagarFilme = filmeService.deleteFilme(req.params.id)
  res.send(`Ò filme ${apagarFilme.filme} foi excluído`)
}

module.exports = {
  getFilmes,
  getFilmesById,
  postFilme,
  putFilme,
  deleteFilme
}