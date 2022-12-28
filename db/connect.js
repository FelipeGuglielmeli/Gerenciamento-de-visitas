const mongoose = require('mongoose') //chamando o gerenciador do MongoDB

async function main() {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/", //Setando a string de conexão com o banco de dados
        )

        console.log('Conectado ao baco.')
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main //Arquivo de conexão do banco de dados sendo exportado para