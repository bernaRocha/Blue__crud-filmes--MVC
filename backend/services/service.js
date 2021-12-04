const crudFilmes = [
  {
    id: '1',
    titulo: 'Godzilla',
    diretor: 'Ishirô Honda',
    genero: 'Terror, ficção científica',
    capa: 'https://m.media-amazon.com/images/M/MV5BMjAzNTk3MTc2OF5BMl5BanBnXkFtZTgwNzI5MzU5MTE@._V1_FMjpg_UY720_.jpg'
  },
  {
    id: '2',
    titulo: 'Os Sete Samurais',
    diretor: 'Akira Kurosawa',
    genero: 'Ação, aventura, drama',
    capa: 'https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg'
  },
  {
    id: '3',
    titulo: 'Interestelar',
    diretor: 'Christopher Nolan',
    genero: 'Aventura, drama, ficção científica',
    capa: 'https://m.media-amazon.com/images/M/MV5BMzg0NzYyNDMtZTkxMS00NmYzLWJkMDAtMmNlYTY1MTRmM2IwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UY720_.jpg'
  },
  {
    id: '4',
    titulo: 'Blade Runner 2049',
    diretor: 'Denis Villeneuve',
    genero: 'Aventura, drama, ficção científica',
    capa: 'https://m.media-amazon.com/images/M/MV5BNjlhNmI2NjItNmJjYi00YzEwLWFjY2EtYmNhYmE3NGFkMTUzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UY720_.jpg'
  }
]

const getFilmes = () => {
  return crudFilmes
}

const getFilmesById = (idParam) => {
  return crudFilmes.find((filme) => filme.id == idParam)
}

const postFilme = (novoFilme) => {
    const novoIdFilme = crudFilmes.length + 1
    novoFilme.id = novoIdFilme
    crudFilmes.push(novoFilme)

    return novoFilme
}

const putFilme = (idParam, filmeEdit) => {
    const index = crudFilmes.findIndex((filme) => filme.id == idParam)

    if(index > 0) {
      crudFilmes[index] = {
        ...crudFilmes[index],
        ...filmeEdit
      }

      return true

    } else {

      return false
    }
}

const deleteFilme = (idParam) => {
  const index = crudFilmes.findIndex((filme) => filme.id == idParam)

  const filmeDeletado = crudFilmes[index]

  crudFilmes.splice(index, 1)

  return filmeDeletado
}

module.exports = {
  getFilmes,
  getFilmesById,
  postFilme,
  putFilme,
  deleteFilme
}