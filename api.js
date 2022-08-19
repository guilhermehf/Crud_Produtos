
var express = require('express')
var app = express()

app.get('/produtos', function (req, res) {
  res.send('Cadastrando Produtos!')
})

app.get('/produtos/:id', function (req, res) {
    res.send('Buscando o produto')
  })

app.post('/', function (req, res) {
    res.send('POST request to the homepage');
  });

  app.put('/produtos/:id', function (req, res) {
    res.send('Atualizando o produto')
  })

  app.put('/produtos/:id', function (req, res) {
    res.send('Atualizando o produto')
  })

  app.delete('/', function (req, res) {
    res.send('Deletando o produto')
  })

app.listen(3000)

