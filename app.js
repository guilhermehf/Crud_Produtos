
const express = require('express')
const rotaProduto = require('./rotas/produto_rotas')
const app = express()
const port = 3000


app.use(express.json());
app.use(express.urlencoded({extended: true}));



    let meuProduto = produto[0];
    meuProduto.nome = "Arroz Doce";

app.get('/', (req, res) => {
  res.send('Hello World!')
})
/*Os Dados que vou receber vai vir no (req), e os dados que eu vou enviar vai ir no (res)*/


app.use('/produtos', rotaProduto);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

