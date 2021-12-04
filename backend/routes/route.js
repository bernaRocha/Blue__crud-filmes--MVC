// Arquivo das rotas da aplicação

const express = require('express')

// método é com letra maiúscula
const router = express.Router()

const controller = require('../controllers/controller')

router.get('/', controller.getFilmes)

router.get('/:id', controller.getFilmesById)

router.post('/adicionar', controller.postFilme)

router.put('/editar/:id', controller.putFilme)

router.delete('/deletar/:id', controller.deleteFilme)


// exportar para ser usado em outro js
module.exports = router