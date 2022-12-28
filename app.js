const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors()) //Setando para que o app utilize a extensão Cors
app.use(express.json())
const connect = require( './db/connect') //Solicitando o arquivo de conexão com o banco de dados - connect.js

connect()

const routes = require('./routes/router') //Solicitando o arquivo unificado de rotas - router.js
app.use('/api', routes) //Setando para que o app use no endereço /api a rota importada

app.listen(3000, console.log("Servidor conectado na porta 3000")) //Setando a porta que o servidor será executado