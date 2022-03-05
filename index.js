const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const User = require('./models/User')

//Config
    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    //Routes
        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html')
        }) // Rota usando metodo get para envio de dados

        app.post('/cadastro', (req, res) => {
            User.create({
                nome: req.body.name,
                email: req.body.email,
                senha: req.body.password
            })
            .then(() => { res.redirect('/') })
            .catch((error) => { res.send('Failed! ' + error)})
        }) // Rota usando metodo post para envio de dados


app.listen(5000, () => {
    console.log('Server is running...')
}) // Precisa ser a ultima linha do codigo