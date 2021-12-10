const apiUrl = "http://localhost:3000/crudFilmes";
const modoEdicaoFilme = false
const idFilmeEditado = 0

// const para renderizar a lista de filmes
const cardFilmes = document.getElementById("card__filmes");
  console.log(cardFilmes)

const getFilmes = async () => {
  const resposta = await fetch(`${apiUrl}`);
  const filmes = await resposta.json();

  filmes.map((crudFilmes) => {
    
    cardFilmes.insertAdjacentHTML(
      "beforeend",
      `
        <div class="card__colection">
          <img src="${crudFilmes.capa}" alt="${crudFilmes.titulo}" class="card__img" />
          <h3>${crudFilmes.titulo}</h3>
            
          <p>${crudFilmes.diretor}</p>
          <p>Avaliação: ${crudFilmes.nota}</p>
         <div class="button__area">   
          <button class="botao__editar" onclick="editaFilme(${crudFilmes.id})">Editar</button>
          <button class="botao__apagar" onclick="deleteFilme(${crudFilmes.id})">Apagar</button>
          </div>
        </div>
      `
    );
  });
};

getFilmes();

const escolherFilme = async () => {
  const idFilme = document.getElementById("filme").value;
  const resposta = await fetch(`${apiUrl}/${idFilme}`);

  const filme = await resposta.json();

  document.getElementById("filme__escolhido").insertAdjacentHTML(
    "beforeend",
    `
    <div>
          <h3>${crudFilmes.titulo}</h3>
          <p>${crudFilmes.diretor}</p>
          <img>${crudFilmes.capa}</img>
    </div>
    `
  );
};

const submitFilme = async () => {
  const titulo = document.getElementById('titulo').value;
  const diretor = document.getElementById('diretor').value;
  const genero = document.getElementById('genero').value;
  const capa = document.getElementById('capa').value;
  const nota = document.getElementById('nota').value;

  const filme = {titulo, diretor, genero, capa, nota}

  if(modoEdicaoFilme) {
    putFilme(filme)
  } else {
    postFilme(filme)
  }
}

// const postFilme = async (filme => {
//   const resposta = await fetch(`${apiUrl}/filmes/adicionar`, {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(filme)
//   })

//   const dados = await resposta.json()
//   filme.innerHTML = ''
//   getFilmes()
//   limpaInput()

// })

const putFilme = async (filme) => {

  const resposta = await fetch(`${apiUrl}/editar/${idFilmeEditado}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(filme)
  })
  const data = await resposta.json();

  cardFilmes.innerHTML = ''
  getFilmes();
  limpaInput()

  modoEdicaoFilme = false
  idFilmeEditado = 0
}

const editaFilme = async (id) => {
  modoEdicaoFilme = true
  idFilmeEditado = id;

  const filme = await getFilmesById(id)

  document.getElementById('titulo').value = filme.titulo;
  document.getElementById('diretor').value  = filme.diretor;
  document.getElementById('genero').value = filme.genero;
  document.getElementById('capa').value = filme.capa;
  document.getElementById('nota').value = filme.nota;
}

const deleteFilme = async (id) => {
  const resposta = await fetch(`${apiUrl}/deletar/${id}`,{
    method: 'DELETE',

  })

  const filme = await resposta.json()
  
  cardFilmes.innerHTML = ''

  getFilmes()
}



const limpaInput = () => {
  document.getElementById('titulo').value = '';
    document.getElementById('diretor').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('capa').value = '';
    document.getElementById('nota').value = '';
}