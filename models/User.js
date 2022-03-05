const database = require('./conection_database')

// Cria tabelas no banco de dados
const User = database.sequelize.define('users', {
    nome: {
        type: database.Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: database.Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    senha: {
        type: database.Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User