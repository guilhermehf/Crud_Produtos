
const express = require('express')
const app = express()
const port = 3000


app.use(express.json());
app.use(express.urlencoded({extended: true}));

const produtos = [
    {id:1, nome:"Arroz", preco: 4.5},
    {id:2, nome:"Bolacha", preco:2.5},
    {id:3, nome:"Doritos", preco:15},
    {id:4, nome:"Chocolate", preco:5.8}];

    let idGerado = 4;

    let meuProduto = produto[0];
    meuProduto.nome = "Arroz Doce";

app.get('/', (req, res) => {
  res.send('Hello World!')
})
/*Os Dados que vou receber vai vir no (req), e os dados que eu vou enviar vai ir no (res)*/
app.get('/produtos', (req, res) => {
    res.json(produtos)
})

app.post('/produtos', (req, res) =>{
    const novoProduto = req.body;
    if(novoProduto && novoProduto.nome && novoProduto.preco){

        novoProduto.id = idGerado++;
    //idGerado = 6
    produtos.push(novoProduto);
    return res.status(201).json(novoProduto);

    }
    else{
        return res.status(400).json({
            Error:"Nome e/ou preco sao obrigatorio"
        })
    }
})

app.get('/produtos/:id', (req, res) => {
    const id= req.params.id;
    const produtoEncontrado = produtos.find((produto) => {
        return produto.id == id;
    })

    if(produtoEncontrado){
        
        return res.json(produtoEncontrado);
    }
    else{
        return res.status(404).json(
            {Erro:"Produto não encontrado"})

    }
})

app.put('/produtos/:id', (req, res) => {
    //Receber os dados que vem do request (req)

    const id = req.params.id;
    const produtoAlterar = req.body;

    if(!produtoAlterar || !produtoAlterar.nome || produtoAlterar.preco){

        return res.status(400).json({
            Error:"Nome e/ou preco sao obrigatorio"
        });

    }

    //Realizar/delegar a função de negocio

    const produtoEncontrado = produtos.find(
        (produto) => {
            return produto.id == id;
        }
    )

    if(produtoEncontrado){
        produtoEncontrado.nome = produtoAlterar.nome;
        produtoEncontrado.preco = produtoAlterar.preco;
        return res.json(produtoEncontrado)
    }
    else{
        return res.status(404).json(
            {Erro:"Produto não encontrado"})

    }

   

    res.send('Atualizando o produto'+req.params.id)
})

app.delete('/produtos/:id', (req, res) => {
    const id= req.params.id;

    const indiceProduto = produtos.findIndex(
        (produto) => {
            return produto.id == id;
        }
    
    )

    if(indiceProduto >= 0){
        const produtoDeletado = produtos.slice(indiceProduto, 1)
        return res.json(produtoDeletado);
    }
    else{
        return res.status(404).json(
            {Erro:"Produto não encontrado"})

    }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

