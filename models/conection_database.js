const Sequelize = require('sequelize')
const sequelize = new Sequelize('gee_movies', 'root', 'L@moon$54S', {
    host: "localhost",
    dialect: 'mysql',
    query: {
        raw:true
    } // Config nova pra aparecer os dados no front
}) // Conexão com o banco de dados

// Verifica a conexao com o banco de dados
sequelize.authenticate().then(function() {
    console.log('Conection success!')
}).catch(function(error) {
    console.log('Failed in the conection' + error)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}