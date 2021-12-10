// acesso as funções que cuidam dos dados
const filmeService = require('../services/service')

const getFilmes = (req, res) => {

  const filmes = filmeService.getFilmes()
  res.send(filmes)
}

// retorna 1 filme de acordo com o Id
const getFilmesById = (req, res) => {
  // REQ vem do front pro back e RES é o retorno do back pro Front
  const id = req.params.id
  const filme = filmeService.getFilmesById(id)
  res.send(filme)
}

const postFilme = (req, res) => {
  
  if(!req.body || !req.body.titulo || !req.body.diretor || !req.body.genero || !req.body.capa) {
    res.status(400).send({message: 'Filme invalido, favor preencher os campos pedidos'})
    return
  }
  // funcoes do servie
  const filme = req.body
  const novoFilme = filmeService.postFilme(filme)

  if(!novoFilme.titulo) {
    res.status(500).send({message: "Ocorreu um erro ao salvar o filme, tente novamente"})
  }


  res.send({message: `Filme ${novoFilme.titulo} do diretor: ${novoFilme.diretor} adicionado com sucesso.`})
}

const putFilme = (req, res) => {
  
  if(!req.body || !req.body.titulo || !req.body.diretor || !req.body.genero || !req.body.capa) {
    res.status(400).send({message: 'Não foi possível editar, favor preencher os campos pedidos'})
    return
  }
  
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
  const id = req.params.id
  const apagarFilme = filmeService.deleteFilme(req.params.id)
  
  if(!apagarFilme) {
    res.status(404).send({message: 'Nao foi possivel excluir o filme, tente novamente'})
  }

  res.send(`O filme ${apagarFilme.titulo} foi excluído`)
}

module.exports = {
  getFilmes,
  getFilmesById,
  postFilme,
  putFilme,
  deleteFilme
}