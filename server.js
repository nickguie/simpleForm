const express = require('express')
const app = express()

const { response } = require('express')

app.use(express.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)

    //metodo get vem na query string
    //console.log(req.query)
    resp.send('<h1>Parabens Usuário Incluido!!<h1/>')    
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabens. Usuário Alterado!!<h1/>')    
})

app.listen(3003)