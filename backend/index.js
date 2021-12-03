const express = require('express')
const app = express()
app.use(express.json())
const port = 3000
app.listen(port, () => {
  console.log(`App Rodando na porta ${port}`);
})

// CORS
const cors = require('cors')
app.use(cors())

// importação do arquivo de rotas
const route = require('./routes/route') 

// assim o backend usar a rota para o endpoint vagas
app.use('/filmes', route)