const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const User = require('./models/User')

//Config
    //Template
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'})) // acrescentar .engine(...) no handlebars
        app.set('view engine', 'handlebars')
    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    //Routes
        app.get('/', function(req, res) {
            User.findAll({order: [['id', 'DESC']]}).then(function(users) {
                res.render('home', {users: users})
            }) // Não é mais utilizado o .all() e sim o .findAll()
        })

        app.get('/cadastro', (req, res) => {
            res.render('formulario')
        }) // Rota usando metodo get para envio de dados

        app.post('/resultado', (req, res) => {
            User.create({
                nome: req.body.name,
                email: req.body.email,
                senha: req.body.password
            })
            .then(() => { res.redirect('/') })
            .catch((error) => { res.send('Failed! ' + error)})
        }) // Rota usando metodo post para envio de dados

        app.get('/delete/:id', (req, res) => {
            User.destroy({where: {'id': req.params.id}}).then(() => {
                res.send('User has been deleted.')
            }).catch( error => {
                res.send('User can`t be deleted. ' + error)
            })
        })


app.listen(5000, () => {
    console.log('Server is running...')
}) // Precisa ser a ultima linha do codigo